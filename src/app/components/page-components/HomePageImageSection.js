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
                        <h1 className="mb-4 text-4xl font-bold md:text-4xl xl:text-5xl text-white">
                            Discover Our Solutions
                        </h1>
                        <p className="mb-6 lg:mb-8 md:text-lg lg:text-xl text-grey-light">
                            When systems fail we have several solutions to fix your complicated ingress dilemmas.
                        </p>
                        <div className="inline-block">
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
        </div>
    )
};

export default HomePageImageSection;