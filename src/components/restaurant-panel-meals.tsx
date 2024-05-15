import { Meal } from '../lib/types.js'

interface RestaurantPanelMealsProps {
    menu: Meal[]
}

export default function RestaurantPanelMeals({menu}: RestaurantPanelMealsProps) {

    return (
        <ol className='pt-4 pb-6 space-y-2 list-inside max-w-[1100px]'>
            {menu.map((meal, idx) => (
            <li key={meal.name} className='flex items-center justify-between'>
                <div>
                    {meal.is_soup ? 
                        <span>Polévka:&nbsp;</span>
                        : 
                        null 
                    }
                    <span>
                        {meal.name}
                        &nbsp;
                        {meal.description ? 
                            <span className='text-gray-500'>
                                {"(" + meal.description + ")"}
                            </span>
                            :
                            null
                        }
                    </span>
                </div>
                <div className='ml-20'>{meal.price}&nbsp;Kč</div>
            </li>
            ))}
        </ol>
    )
}