"use client";
import React, {useState} from "react";
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import {useForm} from "react-hook-form";
import Link from "next/link";

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.NEXT_PUBLIC_MAILGUN_API_KEY});
const mgDomain = process.env.NEXT_PUBLIC_MAILGUN_DOMAIN;

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phoneNumber: "",
            time: "",
            message: ""
        },
    });

    const onSubmit = (data) => {
        const currentDate = new Date();

        client.messages.create(mgDomain, {
            from: `"Contact Form Submission" <mailgun@${mgDomain}>`,
            to: ["ebeljezy@gmail.com", "drdampproofinginc@gmail.com"],
            subject: "Contact Form Submission " + currentDate,
            text: `New Form submission: \n
                   Name: ${data.name}\n
                   Company: ${data.company}\n
                   Phone Number: ${data.phoneNumber}\n
                   Email: ${data.email}\n
                   Selected Time Range: ${data.time}\n
                   Message: ${data.message}`,
        }).then(() => {
            setSubmitted(true);
        }).catch(err => console.log(err));
    };

    return (
        <div className="max-w-600 p-4 border border-border-color bg-secondary-bg my-6 rounded-2xl shadow-xl mx-auto
                        lg:absolute lg:top-[345px] lg:left-0 lg:right-0 lg:z-10">
            <form onSubmitCapture={handleSubmit(onSubmit)}>
                <h1 className="text-2xl font-bold text-primary text-center mb-3 mt-6">Discover Our Solutions</h1>
                <p className="text-xs">Complete this form and we&apos;ll get back to you, if you need an estimate please use the </p>
                <Link className="text-xs underline" href='/get-a-quote'>quote calculator -&gt;</Link>
                <div className="grid sm:grid-cols-2 mt-5" >
                    <div className="mr-2">
                        <label className="text-sm ml-1">Name
                            <input name="name" type="text" autoComplete="on" className="form-field border w-full" {...register("name",{required: true})}/>
                        </label>
                    </div>
                    <div className="mr-2">
                        <label className="text-sm ml-1">Company
                            <input name="company" type="text" autoComplete="on" className="form-field border w-full" {...register("company",{required: true})}/>
                        </label>
                    </div>
                </div>
                <div className="grid sm:grid-cols-2">
                    <div className="mr-2">
                        <label className="text-sm ml-1">Phone Number
                            <input name="phone" type="text" autoComplete="on" className="form-field border w-full" {...register("phone",{required: true})}/>
                        </label>
                    </div>
                    <div className="mr-2">
                        <label className="text-sm ml-1">Email
                            <input name="email" type="email" autoComplete="on" className="form-field border w-full" {...register("email",{required: true})}/>
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="mr-2">
                        <label className="text-sm ml-1">Time Range
                            <select className="form-field h-10 border w-full"
                                    placeholder="Select one"
                                    {...register("time", {required: true})}>
                                <option value="">Select one</option>
                                <option value="less than one month">Less than a month</option>
                                <option value="1-3 months">1-3 months</option>
                                <option value="3-6 months">3-6 months</option>
                                <option value="6 months and up">6 months and up</option>
                            </select>
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-1">
                    <div className="mr-2 mb-4">
                        <label className="text-sm ml-1">Message
                            <textarea rows={4} className="form-field h-unset border w-full" {...register("message", {required: true})}/>
                        </label>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-primary text-white py-1 px-2 rounded-xl bold uppercase hover:border-1
                         hover:border-primary hover:outline hover:bg-secondary-bg hover:text-primary">Submit</button>
                </div>
                <div hidden={!submitted}>
                    <p className="text-success text-xs mt-2">Successfully Submitted! We&apos;ll get back to you as soon as we can. Cheers!</p>
                </div>
            </form>
        </div>
    );
}