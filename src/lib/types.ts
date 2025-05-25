export type RestaurantsResponse = RestaurantWithScrapeData[]

export type Restaurant = {
    id: number,
    name: string,
    url: string,
    address: string,
    accepts_cards?: boolean,
    coordinates?: [number, number],
    createdAt: string,
    updatedAt: string
}

export type ScrapeData = {
    id: number,
    restaurant_id: number,
    content?: Meal[] 
    scrapedAt: string,
}

export type RestaurantWithScrapeData = Restaurant & {
    latestData: ScrapeData | null
}

export type Meal = {
    name: string,
    price: number,
    description?: string,
    allergens?: string[],
    is_vegan?: boolean,
    is_gluten_free?: boolean,
    is_soup?: boolean,
}