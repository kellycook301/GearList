import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewPracticeCard from './NewPracticeCard'
import "./PracticeAmpList.css"

library.add(faTrash)
library.add(faPen)

export default class PracticeAmpList extends Component {
    
    render() {
        return (
            <React.Fragment>
                <section className="practiceAmpEntries">
                    {
                        this.props.practices.map(practice =>
                            <NewPracticeCard {...this.props} key={practice.id} practice={practice} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}