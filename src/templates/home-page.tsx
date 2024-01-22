import { Link } from 'waku';

import { Counter } from '../components/counter.js';
import RestaurantPanel from '../components/RestaurantPanel.js';

type RestData = {
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

export const HomePage = async () => {
  const data = await getData()
  // console.log('HomePage data', data);
  const transformedData: RestData = {
    ...data,
    data: data.data.map(item => ({
      ...item,
      meals: JSON.parse(item.meals)
    }))
  }

  
  const rest = transformedData.data[0];
  // console.log('HomePage transformedData', transformedData);
  // console.log('HomePage rest', rest);
  
  

  return (
    <div>
      <title>{data.title}</title>
      {/* metadata */}

      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <Counter />
      <Link to="/about">Learn more</Link>
      <br/>

      <div className="grid gap-6">
      {rest !== undefined ?
        <RestaurantPanel rest={rest} key={rest.id}/>
      : null}
      </div>

      
    </div>
  );
};

const getData = async () => {
  const data = 
  {
    "title": 'Waku',
    "body": 'Hello world!',
    "message": "success",
    "data": [
      {
        "id": 1,
        "name": "Pago Restaurant",
        "date": "2024-01-22T09:25:41.862Z",
        "meals": "[\"Beef Asado\",\"Fettucine alfredo\",\"Beef Asado\",\"Shakshuka\",\"Chicken Fajita Mac and Cheese\"]"
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
        "meals": "[\"Vegetarian Casserole\",\"Vegetarian Casserole\",\"Dal fry\",\"Lamb and Potato pie\",\"Matar Paneer\"]"
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
        "meals": "[\"Nanaimo Bars\",\"Hot and Sour Soup\",\"Christmas cake\",\"Tuna Nicoise\",\"Spotted Dick\"]"
      }
    ]
  }

  // const ret = await data.json()

  return data;
};
