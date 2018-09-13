import React, { Component } from 'react'
// import { Link } from "react-router-dom"

export default class AmplifierList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="amplifierEntries">
                    {
                        this.props.amplifiers.map(amplifier =>

                            <div key={amplifier.id} className="card">
                                <div className="card-header bg-success"></div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {amplifier.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {amplifier.model}
                                    </section>
                                    <section className="card-title">
                                        Power Section: {amplifier.powerSection}
                                    </section>
                                    <section className="card-title">
                                        Preamp Section: {amplifier.preampSection}
                                    </section>
                                    <section className="card-title">
                                        Head or Combo: {amplifier.amplifierHeadCombo}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {amplifier.features}
                                    </section>
                                    <p></p>
                                    <h6>
                                        <p></p>
                                        <button type="button" className="btn btn-success"
                                            onClick={() => this.props.deleteAmplifierPost(amplifier.id, "amplifiers")}>Delete Post</button>
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