import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import overdrivePedal from "./images/overdrivePedal.png"
import "./OverdriveList.css"

library.add(faTrash)
library.add(faPen)


export default class OverdriveList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="overdriveEntries">
                    {
                        this.props.overdrives.map(overdrive =>

                            <div key={overdrive.id} className="card overdriveCard" style={{width: 450}}>
                                <div className="card-header bg-#00e676 green accent-3">
                                    <img src={overdrivePedal} className="icon--overdrive" />
                                    <h3>My {overdrive.make} {overdrive.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {overdrive.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {overdrive.model}
                                    </section>
                                    <section className="card-title">
                                        Style: {overdrive.style}
                                    </section>
                                    <section className="card-title">
                                        Power Draw: {overdrive.draw}
                                    </section>
                                    <section className="card-title">
                                        True Bypass: {overdrive.bypass}
                                    </section>
                                    <section className="card-title">
                                        Side or Top-Mounted Jacks: {overdrive.jacks}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {overdrive.features}
                                    </section>
                                    <p></p>
                                    <h6 className="overdriveEditDelete">
                                        <Link to={`/gear/edit/overdrive/${overdrive.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="overdriveTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteOverdrivePost(overdrive.id, "overdrives") }; window.location.reload(); }} />
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

