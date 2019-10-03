import React, { Component } from 'react';
import {Link, BrowserRouter as Router } from 'react-router-dom';
class App extends Component {
    state = {
        /*on déclare un tableau pour récupérer les données de l'API et les insérer dans un tableau*/
        todo: []
    }
    /*méthode get pour récupérer le tableau , le comportement qu'il doit avoir à ce moment*/
    componentDidMount() {
        /*fetch(récupérer est montrer sous forme de tableau ce que l'on à l'URL qu'on lui à donné*/
        /*requête Ajax*/
        fetch('http://localhost:4000/todos')
            .then(res => res.json())
            .then((data) => {
                this.setState({ todo: data })
                console.log(this.state.todo)
            })
            .catch(console.log)
    }

    render() {
        return (
            <div className="container">
                <div className="col-xs-12">
                    <Link to="/home">Home</Link>
                    <h1>My Todos</h1>
                    {this.state.todo.map((todo) => (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    {/*le chemin qui sera écrit dans l'url, /nomDeLaPage/${laDonnéeQueJenvoie}*/}
                                    <Link to={`/Title/${todo.id}`}>{todo.title}</Link>
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {todo.id}
                                </h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default App;