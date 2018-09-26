import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewDistortionCard from './NewDistortionCard'
import "./DistortionList.css"

library.add(faTrash)
library.add(faPen)


export default class DistortionList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="distortionEntries">
                    {
                        this.props.distortions.map(distortion =>
                            <NewDistortionCard {...this.props} key={distortion.id} distortion={distortion} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}