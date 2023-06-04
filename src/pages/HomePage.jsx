import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Categories from "../components/Category/Categories";
import Rooms from "../components/Room/Rooms";

export default function HomePage() {
    return(
        <>
            <Navbar />
            <Categories />
            <Rooms />
        </>  
    )
}

