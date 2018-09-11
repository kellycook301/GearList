import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './Login'
import DataManager from '../data/DataManager'

import GearList from './gear/GearList'
import GearEdit from './gear/GearEdit'

export default class AppViews extends Component {

    // check if credentials are in session storage
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        users: []
    }

    addUser = (user, link) => DataManager.post(user, link)
        .then(users => this.setState({
            users: users
        }))

    addGearEntry = (article, link) => DataManager.post(article, link)
        .then(() => DataManager.getAll("entries"))
        .then(entries => this.setState({
            entries: entries
        }))
    editGearEntry = (article, id, link) => DataManager.put(article, id, link)
        .then(() => DataManager.getAll("entries"))
        .then(entries => this.setState({
            entries: entries
        }))
    deleteGearEntry = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("entries"))
        .then(entries => this.setState({
            entries: entries
        }))


    // componentDidMount() {
    //     const _state = {}
    //     DataManager.getAll("entries").then(entries => _state.entries = entries)
    //         .then(() => DataManager.getAll("users").then(users => _state.users = users))
    //         .then(() => { this.setState(_state) })
    // }


    render() {
        return (
            <React.Fragment>
                <div className="viewArea">

                    <Route path="/login" render={(props) => {
                        return <Login {...props}
                            addUser={this.addUser} />
                    }} />

                    {/* gear entries */}
                    <Route exact path="/gear" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <GearList {...props}
                                entries={this.state.entries}
                                deleteGearEntry={this.deleteGearEntry} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />
                    <Route path="/entries/edit/:entryId(\d+)" render={(props) => {
                        return <GearEdit {...props}
                            editGearEntry={this.editGearEntry}
                            entries={this.state.entries} />
                    }} />
                </div>
            </React.Fragment>
        )
    }

}