import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import processorPedal from "./images/processor_(md).png"
import "./ProcessorList.css"

library.add(faTrash)
library.add(faPen)


export default class ProcessorList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="processorEntries">
                    {
                        this.props.processors.map(processor =>

                            <div key={processor.id} className="card processorCard" style={{width: 450}}>
                                <div className="card-header bg-#616161 grey darken-2">
                                    <img src={processorPedal} className="icon--processor"/>
                                    <h3>My {processor.make} {processor.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {processor.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {processor.model}
                                    </section>
                                    <section className="card-title">
                                        Style: {processor.style}
                                    </section>
                                    <section className="card-title">
                                        Unit Size: {processor.size}
                                    </section>
                                    <section className="card-title">
                                        MIDI Capable: {processor.MIDI}
                                    </section>
                                    <section className="card-title">
                                        Power Amp: {processor.powerAmp}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {processor.features}
                                    </section>
                                    <p></p>
                                    <h6 className="processorEditDelete">
                                        <Link to={`/gear/edit/processor/${processor.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="processorPen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="processorTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteProcessorPost(processor.id, "processors") }; window.location.reload(); }} />
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

