import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewAmpCard from './NewAmpCard'
import "./AmplifierList.css"

library.add(faTrash)
library.add(faPen)

export default class AmplifierList extends Component {

    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <section className="amplifierEntries">
                    {
                        this.props.amplifiers.map(amplifier =>
                            <NewAmpCard {...this.props} key={amplifier.id} amplifier={amplifier} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}