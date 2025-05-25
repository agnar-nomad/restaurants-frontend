import { Restaurant, RestaurantWithScrapeData } from '../lib/types.js'
import FavouriteIcon from './favourite-icon.js'
import RestaurantPanelDetails from './restaurant-panel-details.js'
import RestaurantPanelMeals from './restaurant-panel-meals.js'

interface RestaurantPanelProps {
    restaurant: RestaurantWithScrapeData
}

export default function RestaurantPanel({restaurant}: RestaurantPanelProps) {

    const { name, latestData, address} = restaurant

    const shortAddress = address ? address.split(",")[0] : "123 Main St"

    return (
        <article className="w-full border rounded-lg p-4 drop-shadow-sm">
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-xl font-bold">{name}</h3>
                    <p className="text-gray-500">{shortAddress}</p>
                </div>
                <FavouriteIcon name={restaurant.name} />
            </div>

            {!latestData || latestData?.content?.length === 0 ? 
                <p>Pro dnešní den nejsou dostupná data.</p> 
                : 
                <RestaurantPanelMeals scrapeData={latestData}/>
            }

            <RestaurantPanelDetails 
                websiteUrl={restaurant.url} 
                address={address} 
                coords={restaurant.coordinates}
            />

        </article>
    )
}
