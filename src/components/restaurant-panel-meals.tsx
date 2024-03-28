import { Meal } from '../lib/types.js'

interface RestaurantPanelMealsProps {
    menu: Meal[]
}

export default function RestaurantPanelMeal({menu}: RestaurantPanelMealsProps) {

    return (
        <ol className='py-2 space-y-2 list-inside max-w-[600px]'>
            {menu.map((meal, idx) => (
            <li key={meal.name} className='flex items-center justify-between'>
                {meal.is_soup ? 
                    <span>Polévka: {meal.name}</span>
                    : 
                    <span>{meal.name}</span>
                }
                <span className='ml-20'>{meal.price}&nbsp;Kč</span>
            </li>
            ))}
        </ol>
    )
}
