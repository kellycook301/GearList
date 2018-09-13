import React, { Component } from 'react'
// import { Link } from "react-router-dom"

export default class BassList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bassEntries">
                    {
                        this.props.basses.map(bass =>

                            <div key={bass.id} className="card">
                                <div className="card-header bg-success"></div>
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
                                        Pickup: {bass.pickup}
                                    </section>
                                    <section className="card-title">
                                        Body: {bass.body}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {bass.features}
                                    </section>
                                    <p></p>
                                    <h6>
                                        <p></p>
                                        <button type="button" className="btn btn-success"
                                            onClick={() => this.props.deleteBassPost(bass.id, "basses")}>Delete Post</button>
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