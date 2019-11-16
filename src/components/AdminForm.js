import React from 'react'

const AdminForm = ({ id: key, modifierRecette, supprimerRecette, recettes }) => {
    const recette = recettes[key]

    const handleChange = (event, key) => {
        const { name, value } = event.target
        const recette = recettes[key]
        recette[name] = value
        modifierRecette(key, recette)
    }
    return (
        <div className='card'>
            <form className="admin-form">
                <input value={recette.nom} onChange={(e) => handleChange(e, key)} type="text" name="nom" placeholder="Nom de la recette"/>
                <input value={recette.image} onChange={modifierRecette} type="text" name="nom" placeholder="Image de la recette"/>
                <textarea value={recette.ingredients} onChange={modifierRecette} name="ingredients" rows="3" placeholder="Liste des ingrédients"></textarea>
                <textarea value={recette.instructions} onChange={modifierRecette} name="instructions" rows="15" placeholder="Liste des instructions"></textarea>
            </form>
            <button onClick={ () => supprimerRecette(key) }>Supprimer</button>
        </div>
    )
}

export default AdminForm;