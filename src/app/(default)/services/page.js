import React from "react";
import {Droplet} from "react-feather";
import Section from "@/app/components/page-components/Section";
import DefaultPageHeader from "@/app/components/page-components/DefaultPageHeader";
import TextColumn from "@/app/components/page-components/TextColumn";
import ImageColumn from "@/app/components/page-components/ImageColumn";

export default function Services() {
    return (
        <>
            <DefaultPageHeader kicker="What Can We Do?" title="Our Services"/>
            <Section cols="md:grid-cols-2">
                <TextColumn title="Commercial Services" style="md:px-8">
                    <p>
                        At David Rays we have encountered many different types of Commercial projects.
                        Most commonly, underground parkades with either conventional type walls and footings
                        to blindside applications. We work closely with your team and engineers to develop,
                        price and install our systems to meet specifications and provide suitable protection for your project.
                    </p>
                    <p className="my-4">
                        After 20+ years we have been involved in many unconventional projects, with situations
                        and environments that are extremely difficult both as a mediator to fix a failing system
                        and on a new structure. We can assist with developing a system to protect
                        and or manage high levels of water for any set of circumstances. For example new and
                        leaking elevators, tunnels, retention and detention tanks, pump stations and more.
                        We believe with careful thought there are many ways to add redundancy into many of our
                        solutions to ensure fail safe applications.
                    </p>
                </TextColumn>
                <ImageColumn
                    imagePath="/images/carousel/commercial_work.jpg"
                    alt="commercial construction site"
                    unoptimized="false"
                    priority
                />
            </Section>
            <Section cols="md:grid-cols-2">
                <ImageColumn
                    imagePath="/images/spray.jpg"
                    alt="residential construction site"
                    unoptimized="false"
                />
                <TextColumn title="Residential Services" style="md:px-8">
                    <p>
                        Dampproofing and waterproofing have come along way from when we started back in 2003,
                        from the back of a pick up truck with a simple hydraulic pump to spray a cutback asphalt to
                        today we can apply 6 different types of coatings and sealants, some that set up
                        immediately and others that need several days to cure out. From SBS or sheet applied
                        peel n sticks to double sided dimples with geo-textile cloth drain boards.
                    </p>
                    <p className="mt-4">
                        With the introduction of the step code requirements and ever increasing engineering,
                        we have responded by added systems including the installation of rigid insulation
                        to help achieve the moving of the dew point to the exterior of the Building and to
                        eliminate condensation.
                        Most times a standard coating with a simple dimple board is all anyone needs. However
                        there are situations with considerations that may need addressing and we don’t mind
                        answering those questions.
                    </p>
                </TextColumn>
            </Section>
            <Section>
                <TextColumn title="More Than Just Dampproofing" style="text-center">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 font-semibold text-start">
                        <div className="flex md:mx-auto">
                            <Droplet className="mr-4"/>
                            <a className="mr-4">Water Ingress</a>
                        </div>
                        <div className="flex md:mx-auto">
                            <Droplet className="mr-4"/>
                            <a className="mr-4">Thermal Break Insulation</a>
                        </div>
                        <div className="flex md:mx-auto">
                            <Droplet className="mr-4"/>
                            <a className="lg:w-48 mr-4">Water Proofing All Types of Concrete</a>
                        </div>
                        <div className="flex md:mx-auto">
                            <Droplet className="mr-4"/>
                            <a className="mr-4">Crack Injection</a>
                        </div>
                    </div>
                </TextColumn>
            </Section>
        </>
    );
};