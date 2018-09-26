import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewComboCard from './NewComboCard'
import "./ComboList.css"

library.add(faTrash)
library.add(faPen)


export default class ComboList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="comboEntries">
                    {
                        this.props.combos.map(combo =>
                            <NewComboCard {...this.props} key={combo.id} combo={combo} />
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}