import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewCabinetCard from './NewCabinetCard'
import "./CabinetList.css"

library.add(faTrash)
library.add(faPen)


export default class CabinetList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="cabinetEntries">
                    {
                        this.props.cabinets.map(cabinet =>
                            <NewCabinetCard {...this.props} key={cabinet.id} cabinet={cabinet} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}