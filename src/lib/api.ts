import { RestaurantsResponse } from "./types.js";


export async function getRestaurantMenus() {
    try {
        const response = await fetch('http://localhost:5000/restaurants');
        // TODO add abort signal and timeout as seen on YT
        const data = await response.json();
        return data as RestaurantsResponse;
        
    } catch (error) {
        console.error(error);
        return
    }
}