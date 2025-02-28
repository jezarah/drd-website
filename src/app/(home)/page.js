import React from "react";
import Section from "@/app/components/page-components/Section";
import FAQAccordion from "@/app/components/page-components/FAQAccordion";
import EmblaCarousel from "@/app/components/page-components/gallery/EmblaCarousel";
import HomePageImageSection from "@/app/components/page-components/HomePageImageSection";
import GridIcon from "@/app/components/page-components/GridIcon";
import LinkButton from "@/app/components/page-components/LinkButton";
import ImageColumn from "@/app/components/page-components/ImageColumn";

export default function Home() {
    return (
    <>
        <HomePageImageSection imagePath="../../images/header-images/commercial-work-header.jpg"/>
        <Section cols="md:grid-cols-4">
            <GridIcon
                imagePath="/images/icons/solve-problems.png"
                alt="Solving Problems"
                label="We Solve the Hard Problems, So You Don't Have To!"/>
            <GridIcon
                imagePath="/images/icons/safety.png"
                alt="Safety vest"
                label="Prioritized Safety Training"/>
            <GridIcon
                imagePath="/images/icons/together.png"
                alt="Working together"
                label="20 Years of Experience"/>
            <GridIcon
                imagePath="/images/icons/measurement.png"
                alt="We measure our success with yours"
                label="Quality Assurance"/>
        </Section>
        <Section>
            <div className="grid md:grid-cols-2">
                <ImageColumn
                    imagePath="/images/insulation.jpg"
                    alt="construction site"
                    title="Our ThermaDrainSeal Pro® System"
                    subTitle="Dow Rigid Insulation Thermal Break Protected by Superdrain"
                    unoptimized="false"
                />
                <ImageColumn
                    imagePath="/images/dimple-membrane.jpg"
                    alt="dimple membrane"
                    title="Our Spray and Dimple System"
                    subTitle="SuperPro Spray with SuperSeal Dimple Membrane"
                    unoptimized="false"
                />
            </div>
            <div className="grid gird-cols-1 place-items-center mt-4 text-center">
                <p>
                    Interested in one of our solutions? Get a free quote or contact us to learn more
                    about what systems are applicable to your project&apos;s needs.
                </p>
                <div className="pt-4">
                    <LinkButton to="/get-a-quote" type="bg-primary" label="Get a Quote"/>
                    <LinkButton to="/contact-us" type="bg-secondary" label="Contact Us"/>
                </div>
            </div>
        </Section>
        <Section>
                <FAQAccordion/>
        </Section>
        <Section>
                <EmblaCarousel/>
        </Section>
    </>
  )
}
