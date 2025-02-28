import React from "react";
import Image from "next/image";

const GridIcon = ({imagePath, alt, label}) => {
    return (
        <div className="text-center place-items-center align-middle grid">
            <Image src={imagePath} alt={alt} className="h-20" width={80} height={80} unoptimized/>
            <a className="pb-8 lg:pb-0 text-lg font-bold max-w-275">{label}</a>
        </div>
    );
};

export default GridIcon;