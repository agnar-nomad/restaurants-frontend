import dayjs from 'dayjs'
import { Meal, ScrapeData } from '../lib/types.js'
import { cn } from '../lib/utils.js'

interface RestaurantPanelMealsProps {
    scrapeData: ScrapeData
}

export default function RestaurantPanelMeals({scrapeData}: RestaurantPanelMealsProps) {

    const { meals = [], scrapedAt } = scrapeData

    const today = dayjs()
    const scrapedAtDate = dayjs(scrapedAt)
    const isScrapeFresh = scrapedAtDate.isSame(today, 'day')

    return (
        <>
        {isScrapeFresh ? null : (
            <p className='text-sm font-bold text-red-400'>
                Vypadá to, že zde máme stará data. Poslední scrape: {scrapedAtDate.format('DD.MM.YYYY HH:mm')}
            </p>
        )}

        <ol className={cn(isScrapeFresh ? "" : 'opacity-35', 'pt-4 pb-6 space-y-4 sm:space-y-2 list-inside max-w-[1100px]')}>
            {meals.map((meal) => (
                <li key={meal.name} className='flex gap-6 justify-between'>
                    <div>
                    {meal.is_soup ? (
                        <>
                        <span>Polévka:&nbsp;{meal.name}</span>
                        &nbsp;
                        <MealDescription description={meal.description}/>
                        &nbsp;
                        <MealAllergens allergens={meal.allergens}/>
                        </>
                    ) : (
                        <span className='inline-flex flex-col md:flex-row md:gap-2'>
                            {meal.name}
                            <MealDescription description={meal.description}/>
                            <MealAllergens allergens={meal.allergens}/>
                        </span>
                    )}
                    </div>
                    <MealPrice price={meal.price}/>
                </li>
            ))}
        </ol>
        </>
    )
}

const MealDescription = ({description}: {description: Meal["description"]}) => {
    if (!description) return null

    return (
        <span className='text-gray-400'>
            {"(" + description + ")"}
        </span>
    )
}

const MealPrice = ({price}: {price: Meal["price"]}) => {
    if (!price || price <= 0) return null

    return (
        <span className='sm:ml-14 whitespace-nowrap'>
            {price}&nbsp;Kč
        </span>
    )
}

const MealAllergens = ({allergens}: {allergens: Meal["allergens"]}) => {
    if (!allergens || allergens.length === 0) return null

    return (
        <span className='text-gray-400 whitespace-nowrap'>
            [ A: {allergens.join(", ")} ]
        </span>
    )
}