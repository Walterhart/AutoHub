import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./CarsDetail"


export default function Layout() {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}