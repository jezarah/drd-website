import React from "react";

const Logo = () => {
    return (
        <a href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
            src="/logo/mountain-logo.svg"
            alt="David Rays Dampproofing Logo"
            className="logo"
            width={300}
            height={72}
            />
        </a>
    );
};

export default Logo;