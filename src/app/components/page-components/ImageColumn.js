import Image from "next/image";
import React from "react";

const ImageColumn = ({imagePath, alt, title, subTitle, unoptimized}) => {
    return (
        <div className="place-self-center justify-items-center">
            {title && <h1 className="text-center text-xl lg:text-2xl font-bold mt-4">{title}</h1>}
            <Image
                src={imagePath}
                alt={alt}
                className="px-4 max-h-520"
                width={300} height={200}
                unoptimized={unoptimized}
            />
            {subTitle && <p className="text-center h-12">{subTitle}</p>}
        </div>
    );
};

export default ImageColumn;