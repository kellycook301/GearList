import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)


export default class AcousticList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="acousticEntries">
                    {
                        this.props.acoustics.map(acoustic =>

                            <div key={acoustic.id} className="card">
                                <div className="card-header bg-success"></div>
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
                                    <h6>
                                    <FontAwesomeIcon icon="trash" color="red" onClick={() => this.props.deleteAcousticPost(acoustic.id, "acoustics")} /> 
                                    <p></p>
                                        <Link className="nav-link editing-button" to={`/gear/edit/acoustic/${acoustic.id}`}>Edit Post</Link> 
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