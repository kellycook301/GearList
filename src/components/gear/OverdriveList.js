import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewOverdriveCard from './NewAmpCard'
import "./OverdriveList.css"

library.add(faTrash)
library.add(faPen)


export default class OverdriveList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="overdriveEntries">
                    {
                        this.props.overdrives.map(overdrive =>
                            <NewOverdriveCard {...this.props} key={overdrive.id} overdrive={overdrive} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}