"use client";
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
const Navbar = ({ toggle }) => {
    return (
        <div className="navbar grid absolute h-32">
            <div className="content">
                <div className="flex justify-between items-center h-full">
                    <Logo/>
                    <button type="button" className="absolute right-0 lg:hidden" onClick={toggle}>
                        {/** Hamburger menu button **/}
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="40"
                             height="40"
                             viewBox="0 0 24 24">
                            <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                        </svg>
                    </button>
                    <ul className="hidden lg:visible lg:flex gap-x-6 text-white">
                        <li>
                            <Link href={{pathname: "./about"}}>
                                <p className="hover:text-primary">About Us</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <p className="hover:text-primary">Services</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/products"}>
                                <p className="hover:text-primary">Products</p>
                            </Link>
                        </li>
                        <li>
                            <Link href={"/contact-us"}>
                                <p className="hover:text-primary">Contact Us</p>
                            </Link>
                        </li>
                        <li>
                            <Link className="bg-primary p-3 rounded-2xl uppercase" href={"/get-a-quote"}>Get a Free Quote</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;