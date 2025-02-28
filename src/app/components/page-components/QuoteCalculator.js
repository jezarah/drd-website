"use client";
import React, {useEffect, useState} from "react";
import {createTheme, ThemeProvider} from "@mui/material";
import Slider from '@mui/material/Slider';
import GetRate from './util/Estimate';
export default function QuoteCalculator() {
    const [estimate, setEstimate] = useState("");
    const [city, setCity] = useState("none");
    const [type, setType] = useState("none");
    const [height, setHeight] = useState(1);
    const [length, setLength] = useState(20);

    useEffect(() => {
        const rate = GetRate({city, type});
        if (rate === -1) setEstimate("Send an email to drdampproofinginc@gmail.com to inquire about ICF.");
        else setEstimate(`$${(length * height * rate).toFixed(2)}`);
    }, [height, length, city, type]);

    const locations = [
        {value: 'none', label: 'Select one'},
        {value: 'fraserValley', label: 'Fraser Valley (Abbotsford, Chilliwack, Langley, Maple Ridge, Surrey, Mission)'},
        {value: 'greaterVancouver', label: 'Greater Vancouver (Burnaby, Coquitlam, Vancouver, North Shore)'},
        {value: 'okanagan', label: 'Okanagan' },
        {value: 'whistler', label: 'Whistler'},
        {value: 'vancouverIsland', label: 'Vancouver Island (including Sunshine Coast and Gulf Islands)'},
    ]

    const jobTypes = [
        {value: 'none', label: 'Select one'},
        {value: 'damp', label: 'Dampproofing'},
        {value: 'water', label: 'Waterproofing (40mils)'},
        {value: 'water60', label: 'Waterproofing (60mils)'},
        {value: 'dampDimple', label: 'Dampproofing & Dimple'},
        {value: 'waterDimple', label: 'Waterproofing & Dimple (40mils)'},
        {value: 'waterDimple60', label: 'Waterproofing & Dimple (60mils)'},
        {value: 'dampDrain', label: 'Dampproofing & Drain Mat'},
        {value: 'waterDrain', label: 'Waterproofing & Drain Mat (40mils)'},
        {value: 'waterDrain60', label: 'Waterproofing & Drain Mat (60mils)'},
        {value: 'thermaDrainSeal', label: 'ThermaDrainSeal Pro® (Waterproofing, 2” Rigid Insulation & Drain Mat ' +
                '(60 mils))'},
        {value: 'ICF', label: 'ICF Foundation (please send email for inquiry)'},
    ]

    return (
        <ThemeProvider theme={theme}>
            <div className="max-w-600 border-border-color bg-secondary-bg p-4 rounded-2xl border mx-auto my-6 shadow-xl
                            lg:absolute lg:top-[410px] lg:left-0 lg:right-0 lg:my-0 lg:z-10">
                <h1 className="text-2xl font-bold text-primary text-center mb-3 mt-6">
                    David Ray&apos;s Cost Estimator
                </h1>
                <p className="text-xs">Calculates cost based on the job&apos;s location and size. This calculator is only for estimation purposes, please fill out our contact form and we will get in touch with a formal quote.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-6" >
                    <div className="mr-2 mb-4">
                        <label className="text-sm ml-2 mt-2">
                            Location
                            <select
                                name={city}
                                placeholder="Select one"
                                className="form-field border w-full"
                                onChange={(event) => {
                                    setCity(event.target.value);
                                }}>
                                {locations.map((loc) => {
                                    return (
                                        <option key={loc.value} value={loc.value}>
                                            {loc.label}
                                        </option>
                                    );
                                })}
                            </select>
                        </label>
                    </div>
                    <div className="mr-2 mb-6">
                        <label className="text-sm ml-2">
                            Job Type
                            <select
                                name={type}
                                placeholder="Select one"
                                className="form-field border w-full"
                                onChange={(event) => {
                                    setType(event.target.value);
                                }}>
                                {jobTypes.map((job) => {
                                    return (
                                        <option key={job.value} value={job.value}>
                                            {job.label}
                                        </option>
                                    );
                                })}
                            </select>
                        </label>
                    </div>
                </div>
                <div>
                    <div className="flex gap-2 mb-4">
                        <label className="flex-1 text-sm ml-2">
                            Height (5&apos; min for Dimple)
                            <Slider value={height}
                                    step={1}
                                    marks
                                    color="primary"
                                    min={0}
                                    max={20}
                                    onChange={(event) => {
                                        setHeight(Number(event.target.value));
                                    }}
                                    style={{height: 8}}/>
                        </label>
                        <div className="flex">
                            <input
                                value={height}
                                type="number"
                                min="0"
                                className="flex-initial form-field border w-16"
                                onChange={(event) => {
                                    setHeight(Number(event.target.value));
                                }}/>
                            <p className="flex-initial mt-4 text-grey text-sm">ft</p>
                        </div>
                    </div>
                    <div className="flex gap-2 mb-6">
                        <label className="flex-1 text-sm ml-2">
                            Length
                            <Slider
                                color='primary'
                                value={length}
                                step={20}
                                marks
                                min={0}
                                max={300}
                                onChange={(event) => {
                                    setLength(Number(event.target.value));
                                }}
                                style={{height: 8}}/>
                        </label>
                        <div className="flex">
                            <input
                                className="flex-initial form-field border w-16"
                                value={length}
                                type="number"
                                min="0"
                                onChange={(event) => {
                                    setLength(Number(event.target.value));
                                }}/>
                            <p className="flex-initial mt-4 text-grey text-sm">ft</p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-2 rounded-lg drop-shadow-md bg-white">
                    <p className="text-grey text-sm">Estimated total for {String(length*height)} sqft</p>
                    <p className="text-lg text-center mb-2">{estimate}</p>
                </div>
            </div>
        </ThemeProvider>
    );
}

/** This is for the MaterialUI Sliders only**/
const theme = createTheme({
    palette: {
        primary: {
            main: '#ff3131',
            light: '#f59191',
            dark: '#a40f0f',
            contrastText: '#000000',
        },
    }
})