import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import distortionPedal from "./images/distortion_(md).png"
import "./DistortionList.css"

library.add(faTrash)
library.add(faPen)


export default class DistortionList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="overdriveEntries">
                    {
                        this.props.distortions.map(distortion =>

                            <div key={distortion.id} className="card distortionCard" style={{width: 400}}>
                                <div className="card-header bg-#ff5252 red accent-2">
                                    <img src={distortionPedal} className="icon--distortion" />
                                    <h3>My {distortion.make} {distortion.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {distortion.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {distortion.model}
                                    </section>
                                    <section className="card-title">
                                        Style: {distortion.style}
                                    </section>
                                    <section className="card-title">
                                        Power Draw: {distortion.draw}
                                    </section>
                                    <section className="card-title">
                                        True Bypass: {distortion.bypass}
                                    </section>
                                    <section className="card-title">
                                        Side or Top-Mounted Jacks: {distortion.jacks}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {distortion.features}
                                    </section>
                                    <p></p>
                                    <h6 className="distortionEditDelete">
                                        <Link to={`/gear/edit/distortion/${distortion.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="distortionTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteDistortionPost(distortion.id, "distortions") }; window.location.reload(); }} />
                                    </h6>
                                </div>
                            </div>
                        )
                    }
                </section>
                <p></p>
            </React.Fragment>
        )
    }
}

