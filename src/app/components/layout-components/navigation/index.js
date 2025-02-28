"use client";
import { useState } from "react";
import Navbar from "./navbar";
import MobileNavbar from "./mobile-navbar";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <MobileNavbar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    );
};

export default Navigation;