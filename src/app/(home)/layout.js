import '../globals.css'
import { Inter } from 'next/font/google'
import Navigation from "@/app/components/layout-components/navigation";
import {Analytics} from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from "@/app/components/layout-components/footer";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}) {
    return (
        <>
            <html lang="en">
                <head>
                    <title>David Rays Dampproofing</title>
                    <meta name="description" content="Professional Damp proofing, Waterproofing and building envelope
                        solutions contractorservicing the Fraser Valley, Greater Vancouver, and Lower Mainland. We provide
                        20 years of expert experience, visit our website to get a free quote or contact us to learn more
                        about our solutions."/>
                    <meta name="keywords" content="damp-proofing, damproofing, Basement Waterproofing, Dampproofing
                        Contractor Vancouver Abbotsford Chilliwack, Basement Waterproofing Fraser Valley, Commercial
                        Waterproofing, Industrial Waterproofing, Thermal Break Insulation, Foundation Waterproofing"/>
                    <link rel="icon" href="/public/favicon.ico" sizes="any" />
                </head>
                <body className={inter.className}>
                    <Navigation/>
                    {children}
                    <Analytics/>
                    <SpeedInsights/>
                    <Footer/>
                </body>
            </html>
        </>
      );
};
