import { properties } from "@/lib/properties"
import inf1 from "../assets/infinity-towers/inf-1.png"
import infLogoGroup from "../assets/logo-groups/infinity-tower-logo-group.png"

type PropertyCardProps = {
    property?: typeof properties[0]
}

const PropertyCard = ({ property }: PropertyCardProps) => {
    return (
        <div className="flex items-start gap-24 ">
            <div className="flex-1 flex flex-col gap-8">
                <div className="w-full h-[300px]">
                    <img src={property?.image} alt="infinity-tower-1" className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-xl font-sans">{property?.name}</h1>
                    <div className="flex flex-col gap-5">
                        <div>
                            <p className="text-lg">Location: {property?.location}</p>
                            <p className="text-lg">Status: {property?.status}</p>
                        </div>
                        <div>
                            <a href={property?.redirect} className="bg-brand-primary text-white px-8 rounded-full py-2 transition-all duration-200 ring-offset-2 ring-brand-primary focus:outline-none hover:ring-2 active:ring-4">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col justify-start h-full gap-4">
                <div className="text-xl w-full">
                    {property?.info}
                </div>
                <div className="flex flex-row gap-4 mt-2">
                    <div className="flex flex-col items-start">
                        <span className="text-xs font-semibold bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full mb-1 tracking-wide">Occupancy</span>
                        <span className="text-2xl md:text-4xl text-brand-primary">{property?.occupancy}</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-xs font-semibold bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full mb-1 tracking-wide">Size</span>
                        <span className="text-2xl md:text-4xl text-brand-primary">{property?.size}</span>
                    </div>
                </div>
                <div>
                    <img className={`${property?.name === "Huawei Building" ? "w-24" : ""}`} src={property?.tenants} alt={`${property?.name}-tower-tenants`} />
                </div>
            </div>
        </div>
    )
}


export default PropertyCard 