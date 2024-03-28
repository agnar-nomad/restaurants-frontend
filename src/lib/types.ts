export type RestData = {
    title: string,
    body: string,
    message: string,
    data: RestInfoType[]
}

export type RestInfoType = {
    id: number;
    name: string;
    date: string;
    meals: string[]
};

export type RestaurantsResponse = {
    loaded_scrapers: number,
    data_size: number,
    data: Restaurant[]
}

export type Restaurant = {
    name: string,
    // TODO add ID
    url?: string,
    accepts_cards?: boolean,
    last_scrape: string,
    meals: DailyMenu
}

type DailyMenu = {
    [day: string]: Meal[] | undefined
}


export type Meal = {
    name: string,
    price: number,
    description?: string,
    alergens?: string[],
    is_vegan?: boolean,
    is_gluten_free?: boolean,
    is_soup?: boolean,
}