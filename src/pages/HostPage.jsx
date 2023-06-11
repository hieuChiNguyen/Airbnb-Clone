import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HotelRent from "../components/Host/HotelRent";
import HotelUpload from "../components/Host/HotelUpload";

export default function HostPage() {
    return (
        <>
            <Navbar />
            <HotelRent />
            <HotelUpload />
        </>
    )
}