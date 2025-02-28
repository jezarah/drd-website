import React from "react";

const DefaultPageHeader = ({kicker, title}) => {
    return (
        <div className="absolute top-36 left-0 right-0 m-auto text-center">
            <p className="text-grey-light uppercase">{kicker}</p>
            <h1 className="text-4xl font-extrabold text-white">{title}</h1>
        </div>
    );
};
export default DefaultPageHeader;