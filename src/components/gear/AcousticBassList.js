import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewAcousticBassCard from './NewAcousticBassCard'
import "./AcousticBassList.css"

library.add(faTrash)
library.add(faPen)


export default class AcousticBassList extends Component {
    
    render() {
        return (
            <React.Fragment>
                <section className="acousticBassEntries">
                    {
                        this.props.acousticBasses.map(acousticBass =>
                            <NewAcousticBassCard {...this.props} key={acousticBass.id} acousticBass={acousticBass} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}