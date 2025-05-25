import RestaurantPanel from '../components/restaurant-panel.js';
import { getRestaurantMenus } from '../lib/api.js';
import { Suspense } from 'react';
import { buddha as buddhaMenu } from '../static-data/buddha.js'
import { naRohu as pivniceNaRohuMenu } from '../static-data/na-rohu.js'
import FavouriteRestaurants from '../components/favourite-restaurants.js';

export default async function HomePage() {

  const data = await getRestaurantMenus();

  console.log('data', data);

  const todaysDate = new Date().toLocaleDateString('cs-CZ', { 
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric', })
  

  if(!data || data?.length === 0) {
    return <p>No restaurant data</p>
  }

  return (
    <section>
        {/* <title>{data3.title}</title> */}
        {/* metadata */}

        <div className='flex items-center justify-between flex-wrap mb-4'>
            <h2 className="text-3xl font-bold">Dnešní obědy</h2>
            <p className='text-lg'>{todaysDate}</p>
        </div>

        <FavouriteRestaurants/>
        {/* TODO rename the "panel" components to sth better */}

        <Suspense fallback={<p>Loading data...</p>}>
            <div className="grid gap-6 w-full">
                {data.length > 0 ?
                    data.map(restaurant => (
                        <RestaurantPanel restaurant={restaurant} key={restaurant.name}/>
                    ))
                : null}
            </div>
        </Suspense>
    </section>
  );
};

const getDataStatically = async () => {
    const data = 
    {
      "title": 'Obedy Profitak',
      "body": 'Hello world!',
      "message": "success",
      "data": [
        {...buddhaMenu},
        {...pivniceNaRohuMenu}
      ]
    }
  
    return data;
  };

export const getConfig = async () => {
    return {
      render: 'dynamic',
    };
};