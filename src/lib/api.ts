import { RestaurantsResponse } from "./types.js";
import { backendUrl } from "./config.js";
import { fetchWithTimeout } from "./utils.js";

export async function getRestaurantMenus() {
    try {
        const localUrl = `http://localhost:4242/restaurants`;
        const response = await fetchWithTimeout(localUrl, {}, 6000)
        
        // const url = `${backendUrl}/restaurants`;
        // const response = await fetchWithTimeout(url, {}, 6000);
        
        const data = await response.json();
        return data as RestaurantsResponse;
        
    } catch (error) {
        console.error(error);
        return []
    }
}