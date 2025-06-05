
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible.js'
import { Button } from './ui/button.js'
import { ChevronsUpDown, House, MapPinned } from 'lucide-react'
import { Restaurant } from '../lib/types.js'

interface RestaurantPanelDetailsProps {
    websiteUrl: Restaurant["url"]
    address: Restaurant["address"]
    coords?: Restaurant["coordinates"]
}
export default function RestaurantPanelDetails(props: RestaurantPanelDetailsProps) {

    const { websiteUrl, address, coords } = props

    let urlToMapyCz: string;
    if (address) {
        const basicUrl = new URL("https://mapy.cz/zakladni");
        basicUrl.searchParams.append("q", address);

        urlToMapyCz = basicUrl.href;
    } else if (coords && coords.length > 0) {
        const basicUrl = new URL("https://mapy.cz/zakladni");
        basicUrl.searchParams.append("x", coords[0].toString());
        basicUrl.searchParams.append("y", coords[1].toString());
        basicUrl.searchParams.append("z", "19"); // zoom level, empirical

        urlToMapyCz = basicUrl.href;
    } else {
        urlToMapyCz = ""
    }

    return (
        <Collapsible className='my-2 max-w-[1100px]'>
            <div className='flex gap-2 items-center'>
                <CollapsibleTrigger asChild>
                    <Button variant="outline" size="sm">
                        <ChevronsUpDown className="h-4 w-4" />
                    </Button>
                </CollapsibleTrigger>
                <span>Zkoukni detaily</span>
            </div>
            <CollapsibleContent className='py-4'>
                <div className='flex gap-4 justify-between md:mr-12'>

                    <div>
                        <p className='text-gray-400'>Adresa restaurace</p>
                        <p className='font-bold'>{address}</p>   
                    </div>

                    <Button asChild size="sm" variant="outline" title="Webová stránka restaurace">
                        <a target='_blank' href={websiteUrl}>
                            <House className="h-4 w-4 mx-2" />
                        </a>
                    </Button>                    

                    <Button asChild size="sm" variant="outline" disabled={!urlToMapyCz} title={urlToMapyCz ? "Mapa restaurace" : "Není zadaná adresa nebo souřadnice"}>
                        <a target='_blank' href={urlToMapyCz}>
                            <MapPinned className="h-4 w-4 mx-2" />
                        </a>
                    </Button>
                </div>
            </CollapsibleContent>
        </Collapsible>
    )
}