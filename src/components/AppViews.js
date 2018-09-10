import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import Login from './Login'
import DataManager from '../data/DataManager'

import ArticleForm from './article/ArticleForm'
import ArticleList from './article/ArticleList'
import ArticleEdit from './article/ArticleEdit'


export default class AppViews extends Component {


    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        articles: [],
        users: []
    }

    addUser = (user, link) => DataManager.post(user, link)
        .then(users => this.setState({
            users: users
        }))

    // ARTICLES. getAllArticles is used because I (Kelly) wanted to have them display is descending order by date. Couldn't figure out how to the other way.
    addArticle = (article, link) => DataManager.post(article, link)
        .then(() => DataManager.getAllArticles("articles"))
        .then(articles => this.setState({
            articles: articles
        }))
    editArticle = (article, id, link) => DataManager.put(article, id, link)
        .then(() => DataManager.getAll("articles"))
        .then(articles => this.setState({
            articles: articles
        }))
    deleteArticle = (id, link) => DataManager.removeAndList(id, link)
        .then(() => DataManager.getAll("articles"))
        .then(articles => this.setState({
            articles: articles
        }))


    componentDidMount() {
        const _state = {}
        DataManager.getAll("articles").then(articles => _state.articles = articles)
            .then(() => DataManager.getAll("users").then(users => _state.users = users))
            .then(() => { this.setState(_state) })
    }


    render() {
        return (
            <React.Fragment>
                <div className="viewArea">

                    <Route path="/login" render={(props) => {
                        return <Login {...props}
                            addUser={this.addUser} />
                    }} />

                    {/* ARTICLES */}
                    <Route exact path="/articles" render={(props) => {
                        if (this.isAuthenticated()) {
                            return <ArticleList {...props}
                                articles={this.state.articles}
                                deleteArticle={this.deleteArticle} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />

                    <Route path="/articles/new" render={(props) => {
                        return <ArticleForm {...props}
                            addArticle={this.addArticle} />
                    }} />
                    <Route path="/articles/edit/:articleId(\d+)" render={(props) => {
                        return <ArticleEdit {...props}
                            editArticle={this.editArticle}
                            articles={this.state.articles} />
                    }} />
                </div>
            </React.Fragment>
        )
    }

}