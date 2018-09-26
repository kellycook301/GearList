import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewModulationCard from './NewModulationCard'
import "./ModulationList.css"

library.add(faTrash)
library.add(faPen)

export default class ModulationList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="modulationEntries">
                    {
                        this.props.modulations.map(modulation =>
                            <NewModulationCard {...this.props} key={modulation.id} modulation={modulation} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}