import {ListItem, ListItemButton, ListItemText} from "@mui/material";
import React from "react";

const ProductListItem = ({text, file, last}) => {
    return (
        <ListItem disablePadding className={"bg-secondary-bg border border-border-color drop-shadow-xl " + (last ? "" : "border-b-0")}>
            <ListItemButton component="a" href={file} target='_blank' rel='noreferrer'>
                <ListItemText primary={text} />
            </ListItemButton>
        </ListItem>
    );
};

export default ProductListItem;