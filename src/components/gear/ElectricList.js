import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import electricGuitar from "./images/electric.png"
import "./ElectricList.css"

library.add(faTrash)
library.add(faPen)

export default class ElectricList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="electricEntries">
                    {
                        this.props.electrics.map(electric =>

                            <div key={electric.id} className="card electricCard" style={{width: 450}}>
                                <div className="card-header bg-#ef5350 red lighten-1">
                                    <img src={electricGuitar} className="icon--electric" />
                                    <h3>My {electric.make} {electric.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {electric.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {electric.model}
                                    </section>
                                    <section className="card-title">
                                        Strings: {electric.strings}
                                    </section>
                                    <section className="card-title">
                                        Pickup: {electric.pickups}
                                    </section>
                                    <section className="card-title">
                                        Body: {electric.body}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {electric.features}
                                    </section>
                                    <p></p>
                                    <h6 className="electricEditDelete">
                                        <Link to={`/gear/edit/electric/${electric.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="electricTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteElectricPost(electric.id, "electrics") }; window.location.reload(); }} />
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