export default function Main(){

    const ingredients=["Chicken", "Oregano", "Tomatoes"]
    const ingredientListItems=ingredients.map((ingredient)=>{
        return <li key={ingredient}>{ingredient}</li>
    })

    function onSubmit(event){
        event.preventDefault()
        const formData=new FormData(event.currentTarget)
        const newIngredient=formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }

    return(
        <main>
            <form 
            className="add-ingredient-form"
            onSubmit={onSubmit}
            >
                <input 
                type="text"
                name="ingredient"
                aria-label="Add ingredient"
                placeholder="e.g. oregano"
                />
                
                <button >Add ingredient</button>
            </form>
            <ul>
            {ingredientListItems}
            </ul>
        </main>
       
    )
}