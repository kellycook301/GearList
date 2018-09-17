import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import comboAmp from "./images/combo_(md).png"
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

                            <div key={combo.id} className="card comboCard" style={{width: 400}}>
                                <div className="card-header bg-#ffcc80 orange lighten-3">
                                    <img src={comboAmp} className="icon--comboAmp" />
                                    <h3>My {combo.make} {combo.model}</h3>
                                </div>
                                <div className="card-body">
                                    <section className="card-title">
                                        Make: {combo.make}
                                    </section>
                                    <section className="card-title">
                                        Model: {combo.model}
                                    </section>
                                    <section className="card-title">
                                        Power Section: {combo.powerSection}
                                    </section>
                                    <section className="card-title">
                                        Preamp Section: {combo.preampSection}
                                    </section>
                                    <section className="card-title">
                                        Wattage: {combo.wattage}
                                    </section>
                                    <section className="card-title">
                                        Speakers: {combo.speakers}
                                    </section>
                                    <section className="card-title">
                                        Special Features: {combo.features}
                                    </section>
                                    <p></p>
                                    <h6 className="comboEditDelete">
                                        <Link to={`/gear/edit/combo/${combo.id}`}><FontAwesomeIcon
                                            icon="pen"
                                            color="blue" className="pen" /></Link>
                                        <p></p>
                                        <FontAwesomeIcon icon="trash" color="red" className="comboTrash" onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) { this.props.deleteComboPost(combo.id, "combos") }; window.location.reload(); }} />
                                    </h6>
                                </div>
                            </div>
                        )
                    }
                </section>
                <p></p>
            </React.Fragment>
        )
    }
}