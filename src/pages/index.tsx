import { Link } from 'waku';

import RestaurantPanel from '../components/restaurant-panel.js';
import { RestData } from '../lib/types.js';
import { getRestaurantMenus } from '../lib/api.js';

export default async function HomePage() {
  const data = await getData()
  const transformedData: RestData = {
    ...data,
    data: data.data.map(item => ({
      ...item,
      meals: JSON.parse(item.meals)
    }))
  }

  const rest = transformedData.data[0];
  // console.log('HomePage transformedData', transformedData);

  const data2 = await getRestaurantMenus();
  const menus = data2?.data;

  console.log('menus', menus);
  

  if(!menus) {
    return <p>No restaurant data</p>
  }

  return (
    <section>
        <title>{data.title}</title>
        {/* metadata */}

        <h2 className="text-2xl font-bold">Dnesni Obedy</h2>
        {/* <p>{data.body}</p> */}
        <br/>

        {/* <div className="grid gap-6 w-full">
        {transformedData.data.length > 0 ?
            transformedData.data.map(rest => (
            <RestaurantPanel rest={rest} key={rest.id}/>
            ))
        : null}
        </div> */}
        
        <div className="grid gap-6 w-full">
        {menus.length > 0 ?
            menus.map(restaurant => (
                <RestaurantPanel restaurant={restaurant} key={restaurant.name}/>
            ))
        : null}
        </div>
      
    </section>
  );
};

const getData = async () => {
  const data = 
  {
    "title": 'Obedy',
    "body": 'Hello world!',
    "message": "success",
    "data": [
      {
        "id": 1,
        "name": "Pago Restaurant",
        "date": "2024-01-22T09:25:41.862Z",
        "meals": "[\"Beef Asado\",\"Fettucine alfredo\",\"Beef Burger with Tartar Baked Potatoes\",\"Shakshuka\",\"Chicken Fajita Mac and Cheese\"]"
      },
      {
        "id": 2,
        "name": "Fresco Restaurant",
        "date": "2024-01-22T09:25:41.864Z",
        "meals": "[\"Chicken Couscous\",\"Honey Teriyaki Salmon\",\"Breakfast Potatoes\",\"Blini Pancakes\",\"Cabbage Soup (Shchi)\"]"
      },
      {
        "id": 3,
        "name": "Bagel Lounge Florenc",
        "date": "2024-01-22T09:25:41.864Z",
        "meals": "[\"Vegetarian Casserole\",\"Vegetarian Linguini with Tomatoes\",\"Dal fry\",\"Lamb and Potato pie\",\"Matar Paneer\"]"
      },
      {
        "id": 4,
        "name": "The Three Fiddles",
        "date": "2024-01-22T09:25:41.864Z",
        "meals": "[\"Chicken & mushroom Hotpot\",\"Escovitch Fish\",\"Nutty Chicken Curry\",\"Boulangère Potatoes\",\"Beef stroganoff\"]"
      },
      {
        "id": 5,
        "name": "Restaurace Mlynec",
        "date": "2024-01-22T09:25:41.864Z",
        "meals": "[\"Nanaimo Bars\",\"Hot and Sour Soup\",\"Christmas cake\",\"Tuna Nicoise\",\"Spotted Rice with Thai Pad\"]"
      }
    ]
  }

  // const ret = await data.json()

  return data;
};

export const getConfig = async () => {
    return {
      render: 'dynamic',
    };
};