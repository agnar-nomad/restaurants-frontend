import React from 'react'
import { RestInfoType } from '~/templates/home-page.js'

interface RestaurantPanelProps {
    rest: RestInfoType
}

export default function RestaurantPanel({rest}: RestaurantPanelProps) {

    const {id, name, meals, date} = rest
    
  return (
    <div className="border rounded-lg p-4">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500">123 Main St, City, State</p>
        <ol key={date}>
        {meals.map(meal => (
          <li key={meal}>{meal}</li>
          ))}
        </ol>
    </div>
  )
}
