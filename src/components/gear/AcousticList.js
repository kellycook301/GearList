import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewAcousticCard from "./NewAcousticCard"
import "./AcousticList.css"

library.add(faTrash)
library.add(faPen)


export default class AcousticList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="acousticEntries">
                    {
                        this.props.acoustics.map(acoustic =>
                            <NewAcousticCard {...this.props} key={acoustic.id} acoustic={acoustic} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}