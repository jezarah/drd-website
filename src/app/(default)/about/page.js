import React from "react";
import DefaultPageHeader from "@/app/components/page-components/DefaultPageHeader";
import Section from "@/app/components/page-components/Section";
import TextColumn from "@/app/components/page-components/TextColumn";
import ImageColumn from "@/app/components/page-components/ImageColumn";



export default function About() {
    return (
        <>
            <DefaultPageHeader kicker="Family Owned Business" title="About Us"/>
            <Section cols="md:grid-cols-2">
                <TextColumn title="Dampproofing Contractor Servicing the Fraser Valley and Greater Vancouver">
                    David Ray&apos;s Dampproofing is a family owned business with decades of experience. Based
                    out of Abbotsford BC, we offer our commercial, industrial and residential waterproofing and
                    building envelope services throughout all of British Columbia. We offer a full range of
                    waterproofing services (listed in this site) for before, during and after your project.
                    We use specialty building materials, like polyurea, and specialty coatings for all your
                    waterproofing needs. Working closely with the manufacturer of these products, allows us to
                    make sure your project receives the most up to date and most applicable products needed.
                </TextColumn>
                <ImageColumn imagePath="/images/Abbotsford.jpg" alt="Abbotsford Dampproofing" unoptimized="true"/>
            </Section>
        </>
    );
};