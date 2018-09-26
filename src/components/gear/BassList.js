import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import NewBassCard from './NewBassCard'
import "./BassList.css"

library.add(faTrash)
library.add(faPen)

export default class BassList extends Component {
    
    render() {
        return (
            <React.Fragment>
                <section className="bassEntries">
                    {
                        this.props.basses.map(bass =>
                            <NewBassCard {...this.props} key={bass.id} bass={bass} /> 
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}