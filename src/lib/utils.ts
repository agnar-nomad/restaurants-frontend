import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fetchWithTimeout = (uri: string, options = {}, time = 5000) => {
	const controller = new AbortController();
	const config = { ...options, signal: controller.signal };

	const timeoutId = setTimeout(() => {
		controller.abort();
	}, time);

	return fetch(uri, config)
		.then((response) => {
			// Because _any_ response is considered a success to `fetch`, we
			// need to manually check that the response is in the 200 range.
			if (!response.ok) {
				throw new Error(`${response.status}: ${response.statusText}`);
			}

			clearTimeout(timeoutId);

			return response;
		})
		.catch((error) => {
			if (error.name === "AbortError") {
				throw new Error("Response timed out");
			}

			throw new Error(error.message);
		});
};
