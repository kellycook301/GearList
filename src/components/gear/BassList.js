import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import bassGuitar from "./images/bass.png"
import "./BassList.css"

library.add(faTrash)
library.add(faPen)


export default class BassList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bassEntries">
                    {
                        this.props.basses.map(bass =>

                            <div key={bass.id} className="card" style={{width: 450}}>
                                <div className="card-header bg-#0091ea light-blue accent-4">
                                    <img src={bassGuitar} className="icon--bass" />
                                    <h3>My {bass.make} {bass.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {bass.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {bass.model}
                                    </section>
                                    <section className="card-title">
                                        Strings: {bass.strings}
                                    </section>
                                    <section className="card-title">
                                        Pickup: {bass.pickups}
                                    </section>
                                    <section className="card-title">
                                        Body: {bass.body}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {bass.features}
                                    </section>
                                    <p></p>
                                    <h6 className="bassEditDelete">
                                        <Link to={`/gear/edit/bass/${bass.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="bassTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteBassPost(bass.id, "basses") }; window.location.reload(); }} />
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