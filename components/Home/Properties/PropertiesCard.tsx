
import Image from "next/image";
import { FaBed, FaBath, FaSquare } from "react-icons/fa";

type Props = {
    property: {
        id: number;
        propertyName: string;
        location: string;
        bedrooms: number;
        bathrooms: number;
        size: number;
        price: number;
        imageUrl: string;
    };
};

const PropertiesCard = ({ property }: Props) => {
    return (
        <div className="w-full overflow-hidden group bg-white rounded-lg shadow-lg cursor-pointer">
        {/* Image */}
        <div className="relative ">
            <Image
            src={property.imageUrl}
            alt={property.propertyName}
            width={400}
            height={400}
            className="w-full object-cover group-hover:scale-110 transition-all duration-300"
            />
            <h1 className="px-4 absolute bottom-4 py-2 left-4 text-sm bg-black w-fit text-white rounded-lg">
            <span className="text-base font-bold">${property.price}</span>
            </h1>
        </div>

        {/* Content */}
        <div className="p-5">
            <h1 className="mt-4 text-black text-lg group-hover:underline font-bold">
            {property.propertyName}
            </h1>
            <p className="text-sm text-gray-500 mt-2">{property.location}</p>

            {/* Features row */}
            <div className="flex flex-wrap items-center gap-4 mt-4">
            <div className="flex items-center space-x-2">
                <FaBed className="text-red-600" />
                <p className="text-sm text-gray-500">{property.bedrooms} Beds</p>
            </div>
            <div className="flex items-center space-x-2">
                <FaBath className="text-rose-600" />
                <p className="text-sm text-gray-500">{property.bathrooms} Baths</p>
            </div>
            <div className="flex items-center space-x-2">
                <FaSquare className="text-rose-600" />
                <p className="text-sm text-gray-500">{property.size} sqrt</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default PropertiesCard;
