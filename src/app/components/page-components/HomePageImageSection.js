import Image from "next/image";
import React from "react";
import LinkButton from "@/app/components/page-components/LinkButton";

const HomePageImageSection = ({imagePath}) => {
    return (
        <div className="grid w-full bg-cover overflow-hidden text-center home-page-header"
            style={{backgroundImage: `url(${imagePath})`}}>
            <div className="content">
                <div className="grid grid-cols-1 md:flex md:flex-row h-full">
                    <div className="flex flex-col h-96 pb-4 justify-center lg:p-8">
                        <h1 className="mb-4 text-4xl font-bold md:text-4xl xl:text-5xl text-white animate-slidein300 opacity-0">
                            Discover Our Solutions
                        </h1>
                        <p className="mb-6 lg:mb-8 md:text-lg lg:text-xl text-grey-light animate-slidein500 opacity-0">
                            When systems fail we have several solutions to fix your complicated ingress dilemmas.
                        </p>
                        <div className="inline-block animate-slidein700 opacity-0">
                            <LinkButton to="/contact-us" label="Contact Us" type="bg-primary"/>
                            <LinkButton to="/services" label="Learn More" type="bg-secondary"/>
                        </div>
                    </div>
                    <div className="invisible md:visible">
                        <Image src="/images/guy-spraying2.PNG"
                               alt="Abbotsford Dampproofing"
                               className="h-full object-cover"
                               width={300} height={500}
                        />
                    </div>
                </div>
            </div>
            <svg className="wave invisible lg:visible" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f2f2f2" fillOpacity="1" d="M0,64L80,101.3C160,139,320,213,480,213.3C640,213,800,139,960,106.7C1120,75,1280,85,1360,90.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    );
};

export default HomePageImageSection;