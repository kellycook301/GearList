import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import modulationPedal from "./images/modulation_(md).png"
import "./ModulationList.css"

library.add(faTrash)
library.add(faPen)


export default class ModulationList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="modulationEntries">
                    {
                        this.props.modulations.map(modulation =>

                            <div key={modulation.id} className="card modulationCard" style={{width: 400}}>
                                <div className="card-header bg-#03a9f4 light-blue">
                                    <img src={modulationPedal} className="icon--modulation"/>
                                    <h3>My {modulation.make} {modulation.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {modulation.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {modulation.model}
                                    </section>
                                    <section className="card-title">
                                        Type: {modulation.type}
                                    </section>
                                    <section className="card-title">
                                        Power Draw: {modulation.draw}
                                    </section>
                                    <section className="card-title">
                                        True Bypass: {modulation.bypass}
                                    </section>
                                    <section className="card-title">
                                        Side or Top-Mounted Jacks: {modulation.jacks}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {modulation.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="modulationEditDelete">
                                        <Link to={`/gear/edit/modulation/${modulation.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="modulationTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteModulationPost(modulation.id, "modulations") }; window.location.reload(); }} />
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

