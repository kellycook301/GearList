import React, { Component } from "react"
import Navbar from "./nav/Navbar"
import Footer from "./Footer.js"
import AppViews from "../AppViews"


import "bootstrap/dist/css/bootstrap.min.css"
import "./MyGearList.css"


class MyGearList extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <AppViews />
                <Footer />
            </React.Fragment>
        )
    }
}

export default MyGearList