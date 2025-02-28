import React from "react";
import QuoteCalculator from "@/app/components/page-components/QuoteCalculator";
import DefaultPageHeader from "@/app/components/page-components/DefaultPageHeader";
import Section from "@/app/components/page-components/Section";
import Image from "next/image";

export default function GetAQuote() {
    return (
        <>
            <DefaultPageHeader kicker="Want to Get an Idea About Cost?" title="Get a Free Quote"/>
            <Section minHeight="min-h-672">
                <div className="lg:grid lg:grid-cols-3 hidden">
                    <Image src="/images/background/drd-van.png" alt="drd van" height={500} width={500} unoptimized/>
                    <Image src="/images/background/skyline.png" alt="buildings" height={500} width={500} unoptimized/>
                    <Image src="/images/background/skyline.png" alt="buildings" height={500} width={500} unoptimized/>
                </div>
                <QuoteCalculator/>
            </Section>
        </>
    );
};