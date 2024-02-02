import { RestInfoType } from '~/templates/home-page.js'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible.js'
import { Button } from './ui/button.js'
import { CaretSortIcon, HomeIcon, ExternalLinkIcon, GlobeIcon } from '@radix-ui/react-icons'

interface RestaurantPanelProps {
    rest: RestInfoType
}

export default function RestaurantPanel({rest}: RestaurantPanelProps) {

    const {id, name, meals, date} = rest
    
  return (
    <article className="w-full border rounded-lg p-4 drop-shadow-sm">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-gray-500">123 Main St, City, State</p>
        <ol key={date} className='py-2 space-y-2 list-inside max-w-[600px]'>
        {meals.map((meal, idx) => (
            <li key={meal} className='marker flex items-center justify-between'>
            <span>{`${idx + 1}. `}{meal}</span>
            <span className='ml-32'>price</span>
        </li>
        ))}
        </ol>

        <Collapsible className='my-2'>
            <div className='flex gap-2 items-center'>
                <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm"><CaretSortIcon className="h-4 w-4" /></Button>
                </CollapsibleTrigger>
                <span>View details</span>
            </div>
            <CollapsibleContent className='py-4'>
                <div className='flex gap-4 justify-evenly'>

                    <div>
                        <p>Opening Hours / Menu Hours</p>
                        <p>11:00 - 15:00</p>   
                    </div>

                    <Button asChild size="sm" variant="outline">
                        <a target='_blank' href="">
                            <GlobeIcon className="h-4 w-4 mx-2" />
                        </a>
                    </Button>                    

                    <Button asChild size="sm" variant="outline">
                        <a target='_blank' href="" className="flex gap-2 items-center">
                            <HomeIcon className="h-4 w-4" />
                            <ExternalLinkIcon className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </CollapsibleContent>
        </Collapsible>
    </article>
  )
}
