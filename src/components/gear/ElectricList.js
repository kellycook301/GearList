import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class ElectricList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="alectricEntries">
                    {
                        this.props.electrics.map(electric =>

                            <div key={electric.id} className="card">
                                <div className="card-header bg-success"></div>
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
                                    <h6>
                                        <p></p>
                                        <button type="button" className="btn btn-success"
                                            onClick={() => this.props.deleteElectricPost(electric.id, "electrics")}>Delete Post</button>
                                            <Link className="nav-link editing-button" to={`/gear/edit/electric/${electric.id}`}>Edit Post</Link>
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