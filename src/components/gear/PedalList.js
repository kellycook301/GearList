import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import effectPedal from "./images/effectPedal.png"
import "./PedalList.css"

library.add(faTrash)
library.add(faPen)


export default class PedalList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="pedalEntries">
                    {
                        this.props.pedals.map(pedal =>

                            <div key={pedal.id} className="card">
                                <div className="card-header bg-#00e676 green accent-3">
                                    <img src={effectPedal} className="icon--pedal" />
                                    <h3>My {pedal.make} {pedal.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {pedal.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {pedal.model}
                                    </section>
                                    <section className="card-title">
                                        Type: {pedal.type}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {pedal.features}
                                    </section>
                                    <p></p>
                                    <h6>
                                        <FontAwesomeIcon icon="trash" color="red" className="trash" onClick={() =>
                                         {if (window.confirm('Are you sure you wish to delete this item?')) {this.props.deletePedalPost(pedal.id, "pedals")}; window.location.reload();}} />
                                        <p></p>
                                        <Link to={`/gear/edit/pedal/${pedal.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" /></Link>
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

