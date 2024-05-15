
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible.js'
import { Button } from './ui/button.js'
import { CaretSortIcon, HomeIcon, Crosshair2Icon } from '@radix-ui/react-icons'
import { Restaurant } from '../lib/types.js'

interface RestaurantPanelDetailsProps {
    websiteUrl?: Restaurant["url"]
    address?: Restaurant["address"]
    coords?: Restaurant["coordinates"]
}
export default function RestaurantPanelDetails(props: RestaurantPanelDetailsProps) {

    const { websiteUrl, address, coords } = props

    let urlToMapyCz: string;
    if (coords && coords.length > 0) {
        const basicUrl = new URL("https://mapy.cz/zakladni");
        basicUrl.searchParams.append("x", coords[0].toString());
        basicUrl.searchParams.append("y", coords[1].toString());
        basicUrl.searchParams.append("z", "19");

        urlToMapyCz = basicUrl.href;
    } else if (address) {
        const basicUrl = new URL("https://mapy.cz/zakladni");
        basicUrl.searchParams.append("q", address);

        urlToMapyCz = basicUrl.href;
    } else {
        urlToMapyCz = ""
    }

    return (
        <Collapsible className='my-2'>
            <div className='flex gap-2 items-center'>
                <CollapsibleTrigger asChild>
                    <Button variant="outline" size="sm">
                        <CaretSortIcon className="h-4 w-4" />
                    </Button>
                </CollapsibleTrigger>
                <span>Zkoukni detaily</span>
            </div>
            <CollapsibleContent className='py-4'>
                <div className='flex gap-4 justify-evenly'>

                    <div>
                        <p>Adresa restaurace</p>
                        <p>{address}</p>   
                    </div>

                    <Button asChild size="sm" variant="outline">
                        <a target='_blank' href={websiteUrl || ""}>
                            <HomeIcon className="h-4 w-4 mx-2" />
                        </a>
                    </Button>                    

                    <Button asChild size="sm" variant="outline">
                        <a target='_blank' href={urlToMapyCz} className="flex gap-2 items-center">
                            <Crosshair2Icon className="h-4 w-4 mx-2" />
                        </a>
                    </Button>
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}
