import { Restaurant } from '../lib/types.js'
import FavouriteIcon from './favourite-icon.js'
import RestaurantPanelDetails from './restaurant-panel-details.js'
import RestaurantPanelMeals from './restaurant-panel-meals.js'

interface RestaurantPanelProps {
    restaurant: Restaurant
}

export default function RestaurantPanel({restaurant}: RestaurantPanelProps) {

    const { name, meals, address} = restaurant

    const todaysDayName = new Date().toLocaleDateString('en-GB', { weekday: 'long' })

    console.log( 
        "name", name, 
        // "meals", meals,
        "keys", Object.keys(meals),
        // "todaysDayName", todaysDayName
    )

    const todaysMenu = meals[todaysDayName]

    const shortAddress = address ? address.split(",")[0] : "123 Main St"

    return (
        <article className="w-full border rounded-lg p-4 drop-shadow-sm">
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="text-gray-500">{shortAddress}</p>
                </div>
                <FavouriteIcon id={restaurant.id} />
            </div>

            {!todaysMenu || todaysMenu.length === 0 ? 
                <p>Pro dnešní den nejsou dostupná data.</p> 
                : 
                <RestaurantPanelMeals menu={todaysMenu}/>
            }

            <RestaurantPanelDetails 
                websiteUrl={restaurant.url} 
                address={address} 
                coords={restaurant.coordinates}
            />

        </article>
    )
}
