
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible.js'
import { Button } from './ui/button.js'
import { CaretSortIcon, HomeIcon, ExternalLinkIcon, GlobeIcon, Crosshair2Icon } from '@radix-ui/react-icons'

interface RestaurantPanelDetailsProps {
    websiteUrl?: string
    address?: string

}
export default function RestaurantPanelDetails({websiteUrl, address}: RestaurantPanelDetailsProps) {

    return (
        <Collapsible className='my-2'>
            <div className='flex gap-2 items-center'>
                <CollapsibleTrigger asChild>
                    <Button variant="outline" size="sm">
                        <CaretSortIcon className="h-4 w-4" />
                    </Button>
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
                        <a target='_blank' href={websiteUrl || ""}>
                            <HomeIcon className="h-4 w-4 mx-2" />
                        </a>
                    </Button>                    

                    <Button asChild size="sm" variant="outline">
                        <a target='_blank' href={""} className="flex gap-2 items-center">
                            <Crosshair2Icon className="h-4 w-4" />
                            <ExternalLinkIcon className="h-4 w-4" />
                        </a>
                    </Button>
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}
