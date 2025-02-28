import Section from "@/app/components/page-components/Section";
import React from "react";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import DefaultPageHeader from "@/app/components/page-components/DefaultPageHeader";
import ProductListItem from "@/app/components/page-components/ProductListItem";
export default function Products() {
    return (
        <>
            <DefaultPageHeader kicker="A Commitment to Quality" title="Products"/>
            <Section>
                <List className="w-fit md:w-600 lg:w-800">
                    <p className="font-bold mb-2 ml-4">Spec Sheets:</p>
                    <ProductListItem text="COLPHENE 3000" file="/files/COLPHENE_3000-ANZ-TDS-10.pdf61b160f61d7cc0edd898e3ef80d26b04894e1e17a78e3.pdf"/>
                    <ProductListItem text="DMX 5X™ Drainage Membrane" file="/files/DMX-Drain-5X-Technical-Data-SheetV2.pdf"/>
                    <ProductListItem text="DOW STYROFOAM™ Brand SM Extruded Polystyrene Foam Insulation" file="/files/Rigid SM insulation.pdf"/>
                    <ProductListItem text="EPRO e.poly" file="/files/epro-e.poly_ white scim.pdf"/>
                    <ProductListItem text="EPRO e.base 205" file="/files/esheild epro-e.base_205.pdf"/>
                    <ProductListItem text="SUPERPRO DP" file="/files/Superpro Dampproof -Product Data Sheet.pdf"/>
                    <ProductListItem text="SUPERSEAL Brush & Trowel Grade Mastic" file="/files/Spec Sheet - SUPERSEAL Brush & Trowel Grade Mastic.pdf"/>
                    <ProductListItem text="SUPERSEAL WP Roller Grade" file="/files/Spec Sheet - SUPERSEAL WP Roller Grade.pdf"/>
                    <ProductListItem text="SUPERSEAL WP 40 mil" file="/files/Spec Sheet - SUPERSEAL WP 40 mil.pdf"/>
                    <ProductListItem text="SUPERSEAL WP 60 mil" file="/files/Spec Sheet - SUPERSEAL WP 60 mil.pdf"/>
                    <ProductListItem text="SUPERSEAL Dimpled Membrane" file="/files/Dimpled_Foundation_Membrane copy copy.pdf"/>
                    <ProductListItem text="SUPERSEAL Double Drain Geo-Textile Drainage" file="/files/07 -Spec Sheet Double Dimple Drainage Membrane.pdf"/>
                    <ProductListItem text="SUPERSEAL Superdrain" file="/files/Superdrain Spec sheet.pdf" last/>

                    <p className="font-bold mb-2 mt-4 ml-4">Other Info:</p>
                    <ProductListItem text="Health & Safety Policy" file="/files/2021 Heath & Safety copy.pdf"/>
                    <ProductListItem text="SUPERPRO Coatings Installation Instructions" file="/files/Installation Instructions.pdf"/>
                    <ProductListItem text="SUPERPRO Coatings ICF Compatible Letter" file="/files/SUPERPRO Letter ICF Compatible.pdf" last/>
                </List>
            </Section>
        </>
    );
};