import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import acousticGuitar from "./images/acoustic.png"
import "./AcousticList.css"

library.add(faTrash)
library.add(faPen)


export default class AcousticList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="acousticEntries">
                    {
                        this.props.acoustics.map(acoustic =>

                            <div key={acoustic.id} className="card" style={{width: 450}}>
                                <div className="card-header bg-#a1887f brown lighten-2">
                                    <img src={acousticGuitar} className="icon--acoustic" />
                                    <h3>My {acoustic.make} {acoustic.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {acoustic.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {acoustic.model}
                                    </section>
                                    <section className="card-title">
                                        Strings: {acoustic.strings}
                                    </section>
                                    <section className="card-title">
                                        Pickup: {acoustic.pickup}
                                    </section>
                                    <section className="card-title">
                                        Body: {acoustic.body}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {acoustic.features}
                                    </section>
                                    <p></p>
                                    <h6 className="acousticEditDelete">
                                        <Link to={`/gear/edit/acoustic/${acoustic.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="acousticTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteAcousticPost(acoustic.id, "acoustics") }; window.location.reload(); }} />
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