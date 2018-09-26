import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewFuzzCard from './NewFuzzCard'
import "./FuzzList.css"

library.add(faTrash)
library.add(faPen)

export default class FuzzList extends Component {

    render() {
        return (
            <React.Fragment>
                <section className="fuzzEntries">
                    {
                        this.props.fuzzes.map(fuzz =>
                            <NewFuzzCard {...this.props} key={fuzz.id} fuzz={fuzz} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}