import React from 'react'
import { RestInfoType } from '~/templates/home-page.js'

interface RestaurantPanelProps {
    rest: RestInfoType
}

export default function RestaurantPanel({rest}: RestaurantPanelProps) {

    const {id, name, meals, date} = rest
    
  return (
    <article className="w-full border rounded-lg p-4 drop-shadow-sm">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500">123 Main St, City, State</p>
        <ol key={date} className='py-2 space-y-2 list-decimal list-inside'>
        {meals.map(meal => (
          <li key={meal} className='marker'>
              <span>{meal}</span>
              <span className='ml-32'>price</span>
          </li>
          ))}
        </ol>
    </article>
  )
}
