import { RestaurantsResponse } from "./types.js";


export async function getRestaurantMenus() {
    try {
        const controller = new AbortController();
        // const id = setTimeout(() => controller.abort(), 5000);

        const response = await fetch('http://localhost:4141/restaurants', {
            signal: controller.signal
        });
        // clearTimeout(id);
        // TODO handle timeout with signal
        const data = await response.json();
        return data as RestaurantsResponse;
        
    } catch (error) {
        console.error(error);
        return
    }
}