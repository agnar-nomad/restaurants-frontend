import { Link } from 'waku';

import RestaurantPanel from '../components/restaurant-panel.js';

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
  const transformedData: RestData = {
    ...data,
    data: data.data.map(item => ({
      ...item,
      meals: JSON.parse(item.meals)
    }))
  }

  const rest = transformedData.data[0];
  // console.log('HomePage transformedData', transformedData);

  return (
    <section>
      <title>{data.title}</title>
      {/* metadata */}

      <h1 className="text-2xl font-bold">Dnesni Obedy</h1>
      {/* <p>{data.body}</p>
      <Counter />
      <Link to="/about">Learn more</Link> */}
      <br/>

      <div className="grid gap-6 w-full">
      {transformedData.data.length > 0 ?
        transformedData.data.map(rest => (
          <RestaurantPanel rest={rest} key={rest.id}/>
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
