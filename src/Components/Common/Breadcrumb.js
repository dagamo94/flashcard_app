import React from "react";
import { useHistory } from "react-router-dom";

export default function Breadcrumb(){

    const {pathname} = useHistory().location;

    return (
        <div>
            <p>Path: {pathname.split("/").join(" / ")}</p>
        </div>
    )
}