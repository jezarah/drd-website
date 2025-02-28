import React from "react";
import ContactForm from "@/app/components/page-components/ContactForm";
import DefaultPageHeader from "@/app/components/page-components/DefaultPageHeader";
import Section from "@/app/components/page-components/Section";

export default function ContactUs() {
    return (
        <>
            <DefaultPageHeader kicker="Have a Question?" title="Contact Us"/>
            <Section minHeight="min-h-672">
                <div className="lg:grid lg:grid-cols-3 hidden">
                    <img src="/images/background/drd-van.png" alt="drd van" height={500} width={500}/>
                    <img src="/images/background/skyline.png" alt="buildings" height={500} width={500}/>
                    <img src="/images/background/skyline.png" alt="buildings" height={500} width={500}/>
                </div>
                <ContactForm/>
            </Section>
        </>
    );
};