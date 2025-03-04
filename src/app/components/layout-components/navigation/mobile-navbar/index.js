import Link from "next/link";
import React from "react";

const MobileNavbar = ({ isOpen, toggle }) => {
    return (
        <>
            <div className="fixed w-full h-full overflow-auto justify-center bg-navbar-bg grid z-20"
                 style={{
                     opacity: `${isOpen ? "1" : "0"}`,
                     top: ` ${isOpen ? "0" : "-100%"}`,
                 }}>
                    <div className="content">
                        <div className="flex justify-end items-center h-32">
                            <button className="relative right-0" onClick={toggle}>
                                {/**Close icon**/}
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24">
                                    <path fill="white" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
                                </svg>
                            </button>
                        </div>
                    <ul className="text-center text-xl text-white gap-y-8">
                        <li className="hover:text-primary pb-3">
                            <Link href="/" onClick={toggle}>
                                <p className="mobile-navbar-text-color">Home</p>
                            </Link>
                        </li>
                        <li className="hover:text-primary py-3">
                            <Link href="/about" onClick={toggle}>
                                <p className="mobile-navbar-text-color">About Us</p>
                            </Link>
                        </li>
                        <li className="hover:text-primary py-3">
                            <Link href="/services" onClick={toggle}>
                                <p>Services</p>
                            </Link>
                        </li>
                        <li className="hover:text-primary py-3">
                            <Link href="/products" onClick={toggle}>
                                <p>Products</p>
                            </Link>
                        </li>
                        <li className="hover:text-primary py-3">
                            <Link href="/contact-us" onClick={toggle}>
                                <p>Contact Us</p>
                            </Link>
                        </li>
                        <li className="mt-8">
                            <Link className="bg-primary p-3 rounded-2xl uppercase" href="/get-a-quote"
                                  onClick={toggle}>Get a Free Quote</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;