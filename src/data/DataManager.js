const remoteURL = "http://localhost:5002"

export default Object.create(null, {
    get: {
        value: function (id, link) {
            return fetch(`${remoteURL}/${link}/${id}`).then(e => e.json())
        }
    },
    getAll: {
        value: function (link) {
            return fetch(`${remoteURL}/${link}`).then(e => e.json())
        }
    },
    removeAndList: {
        value: function (id, link) {
            return fetch(`${remoteURL}/${link}/${id}`, {
                method: "DELETE"
            })
                .then(e => e.json())
                .then(() => this.getAll(link))
        }
    },
    post: {
        value: function (newItem, link) {
            return fetch(`${remoteURL}/${link}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newItem)
            })
                .then(e => e.json())
                .then(() => this.getAll(link))
        }
    },
    put: {
        value: function (editItem, id, link) {
            return fetch(`${remoteURL}/${link}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editItem)
            }).then(e => e.json())
            .then(() => this.getAll(link))
        }
    },
    getAllArticles: {
        value: () => {
            return fetch("http://localhost:5002/articles?_order=desc&_sort=date").then(r => r.json())
        }
    },
    findUser: {
        value: (email, password) => {
            return fetch(`http://localhost:5002/users?inputEmail=${email}&inputPassword=${password}`)
                .then(response => response.json())
        }
    }
})
