import { RestaurantWithScrapeData } from '../lib/types.js'
// import FavouriteIcon from './favourite-icon.js'
import RestaurantPanelDetails from './restaurant-panel-details.js'
import RestaurantPanelMeals from './restaurant-panel-meals.js'
import { CreditCard, HandCoins, TriangleAlert} from 'lucide-react'
import CustomTooltip from './custom-tooltip.js'


interface RestaurantPanelProps {
    restaurant: RestaurantWithScrapeData
}

export default function RestaurantPanel({restaurant}: RestaurantPanelProps) {

    const { name, latestData, address, acceptsCards } = restaurant

    const shortAddress = address ? address.split(",")[0] : "123 Main St"

    return (
        <article className="w-full border rounded-lg p-4 drop-shadow-sm">
            <div className='flex justify-between'>
                <div>
                    <h3 className="text-xl font-bold">
                        <span className='flex items-center gap-3'>
                            {name}
                            <CustomTooltip content="Platba v hotovosti">
                                <HandCoins className="w-4 h-4" />
                            </CustomTooltip>
                            {acceptsCards && (
                                <CustomTooltip content="Platba kartou">
                                    <CreditCard className="w-4 h-4" />
                                </CustomTooltip>
                            )}
                        </span>
                    </h3>
                    <p className="text-gray-500">{shortAddress}</p>
                </div>
                {/* <FavouriteIcon name={restaurant.name} /> */}
            </div>

            {!latestData || latestData?.meals?.length === 0 ? 
                <p className='flex gap-1 items-center'>
                    <TriangleAlert className="w-4 h-4" />&nbsp;
                    Pro dnešní den nejsou dostupná data.
                </p> 
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
