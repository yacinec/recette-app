import React, { Component } from 'react'

class AjouterRecette extends Component {
    state = {
        nom: '',
        image: '',
        ingredients: '',
        instructions: ''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault()
        const recette = { ...this.state }
        this.props.ajouterRecette(recette)

        // Reset
        Object.keys(recette).forEach(item => {
            recette[item] = ''
        })
        
        this.setState({ ...recette })
    }

    render() {
        return (
           <div className="card">
               <form className='admin-form ajouter-recette' onSubmit={ this.handleSubmit }>
                    <input value={this.state.nom} onChange={this.handleChange} name='nom' type="text" placeholder="Nom de la recette" />
                    <input value={this.state.image} onChange={this.handleChange} name='image' type="text" placeholder="Nom de l'image"/>
                    <textarea value={this.state.ingredients} onChange={this.handleChange} name="ingredients" rows="3" placeholder="Liste des ingredients"></textarea>                   
                    <textarea value={this.state.instructions} onChange={this.handleChange} name="instructions" rows="15" placeholder="Liste des instructions"></textarea>                   
                    <button>Ajouter Recette</button>
               </form>
           </div>  
        )
    }
}

export default AjouterRecette