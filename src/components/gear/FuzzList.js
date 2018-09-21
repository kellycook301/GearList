import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import fuzzPedal from "./images/fuzz_(md).png"
import "./FuzzList.css"

library.add(faTrash)
library.add(faPen)


export default class FuzzList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="fuzzEntries">
                    {
                        this.props.fuzzes.map(fuzz =>

                            <div key={fuzz.id} className="card fuzzCard" style={{width: 400}}>
                                <div className="card-header bg-#ff7043 deep-orange lighten-1">
                                    <img src={fuzzPedal} className="icon--fuzz" />
                                    <h3>My {fuzz.make} {fuzz.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {fuzz.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {fuzz.model}
                                    </section>
                                    <section className="card-title">
                                        Style: {fuzz.style}
                                    </section>
                                    <section className="card-title">
                                        Power Draw: {fuzz.draw}
                                    </section>
                                    <section className="card-title">
                                        True Bypass: {fuzz.bypass}
                                    </section>
                                    <section className="card-title">
                                        Side or Top-Mounted Jacks: {fuzz.jacks}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {fuzz.features}
                                    </section>
                                    <hr></hr>
                                    <h6 className="fuzzEditDelete">
                                        <Link to={`/gear/edit/fuzz/${fuzz.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="fuzzTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteFuzzPost(fuzz.id, "fuzzes") }; window.location.reload(); }} />
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

