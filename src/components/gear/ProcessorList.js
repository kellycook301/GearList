import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewProcessorCard from './NewProcessorCard'
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
                            <NewProcessorCard {...this.props} key={processor.id} processor={processor} />  
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}