import React from "react"
import {Link} from "react-router-dom";

class Title extends React.Component {
    state = {
        /*on déclare un tableau pour récupérer les données de l'API et les insérer dans un tableau*/
        todo: {}
    }
    /*On réutilise la requête Ajax au cas ou il y aurait un changement de la donnée todo entre temps*/


    /*méthode get pour récupérer le tableau , le comportement qu'il doit avoir à ce moment*/
    componentDidMount() {
        /*fetch(récupérer est montrer sous forme de tableau ce que l'on à l'URL qu'on lui à donné*/
        fetch(`http://localhost:4000/todos/${this.props.match.params.id}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ todo: data })
                console.log(this.state.todo)
            })
            .catch(console.log)
    }

    render(){
        console.log(this.props);
        return(
            <div>

                {/*.match.params fonction interne à React, */
                /*au moment de récuprer le props, on lui inject des paramètre supplémentaire*/}
                <h1>Le titre que l'on veut est : {this.state.todo.title}</h1>
                {/*le id est le nom de la clé qu'on utilisera pour la Route dans index.js*/
                /*exemple : <Route path="/Title/:id" component={Title}/>*/}
            </div>
        )
    }
}

export default Title