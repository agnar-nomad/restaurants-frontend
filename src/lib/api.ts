import { RestaurantsResponse } from "./types.js";


export async function getRestaurantMenus() {
    try {
        const response = await fetch('http://localhost:5000/restaurants');
        const data = await response.json();
        return data as RestaurantsResponse;
        
    } catch (error) {
        console.error(error);
        return
    }
}