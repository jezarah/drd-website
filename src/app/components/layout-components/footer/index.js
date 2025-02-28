import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bottom-0 w-full bg-black grid grid-cols-1 place-items-center">
            <div className="content">
                <div className="w-full place-items-stretch py-12 text-white">
                    <div className="grid md:grid-cols-2">
                        <div>
                            <div className="top-0">
                                <h1 className="text-primary text-2xl font-bold">David Rays Dampproofing</h1>
                                <ul className="text-white">
                                    <li className="hover:text-primary">
                                        <Link href="/about">
                                            <p>About the Team</p>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href="/contact-us">
                                            <p>Contact Us</p>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary flex align-bottom">
                                        <MdOutlineEmail className="mr-1 mt-1"/>
                                        <Link href={`mailto:drdampproofinginc@gmail.com`}
                                              target="_blank"
                                              rel="noreferrer">
                                            <p>drdampproofinginc@gmail.com</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 place-items-end text-end">
                            <div></div>
                            <div className="top-0">
                                <h1 className="text-primary text-2xl font-bold max-[450px]:mt-4">Areas We Serve</h1>
                                <ul className="text-white">
                                    <li className="hover:text-primary">
                                        <p>Fraser Valley</p>
                                    </li>
                                    <li className="hover:text-primary">
                                        <p>Greater Vancouver</p>
                                    </li>
                                    <li className="hover:text-primary">
                                        <p>Whistler</p>
                                    </li>
                                    <li className="hover:text-primary">
                                        <p>Okanagan</p>
                                    </li>
                                    <li className="hover:text-primary">
                                    </li>
                                    <li className="hover:text-primary">
                                        <p>and surrounding areas</p>
                                    </li>
                                </ul>
                                <h1 className="text-primary text-2xl font-bold mt-2 max-[450px]:mt-4">Learn More</h1>
                                <ul className="text-white">
                                    <li className="hover:text-primary">
                                        <Link href="/#faq">
                                            <p>FAQ</p>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary">
                                        <Link href="/services">
                                            <p>Our Services</p>
                                        </Link>
                                    </li>
                                    <li className="hover:text-primary mb-2">
                                        <Link href="/products">
                                            <p>Our Products</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-white mt-2 text-xs">
                        © David Rays Dampproofing Inc. 2025
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
