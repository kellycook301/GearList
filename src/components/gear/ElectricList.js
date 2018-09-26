import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewElectricCard from './NewElectricCard'
import "./ElectricList.css"

library.add(faTrash)
library.add(faPen)

export default class ElectricList extends Component {
    
    render() {
        return (
            <React.Fragment>
                <section className="electricEntries">
                    {
                        this.props.electrics.map(electric =>
                            <NewElectricCard {...this.props} key={electric.id} electric={electric} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}