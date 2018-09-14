import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import cab from "./images/cabinet.png"
import "./CabinetList.css"

library.add(faTrash)
library.add(faPen)


export default class CabinetList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="cabinetEntries">
                    {
                        this.props.cabinets.map(cabinet =>

                            <div key={cabinet.id} className="card">
                                <div className="card-header bg-#ffa726 orange lighten-1">
                                    <img src={cab} className="icon--cab" />
                                    <h3>My {cabinet.make} {cabinet.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {cabinet.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {cabinet.model}
                                    </section>
                                    <section className="card-title">
                                        Speakers: {cabinet.speakers}
                                    </section>
                                    <section className="card-title">
                                        Wood Type: {cabinet.woodType}
                                    </section>
                                    <p></p>
                                    <h6 className="cabinetEditDelete">
                                        <Link to={`/gear/edit/cabinet/${cabinet.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="cabinetTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteCabinetPost(cabinet.id, "cabinets") }; window.location.reload(); }} />
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