import React, { Component } from "react"
import Navbar from "./nav/Navbar"
import AppViews from "./AppViews"


import "bootstrap/dist/css/bootstrap.min.css"
import "./MyGearList.css"


class MyGearList extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <AppViews />
            </React.Fragment>
        )
    }
}

export default MyGearList