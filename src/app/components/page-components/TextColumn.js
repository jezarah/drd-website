import React from "react";

const TextColumn = ({title, style, children}) => {
    return (
        <div className={"place-self-center px-4 " + style}>
            <h1 className="text-primary font-bold text-3xl my-4">
                {title}
            </h1>
            <div className="mb-4">
                {children}
            </div>
        </div>
    );
};

export default TextColumn;