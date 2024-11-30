import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const ingredientsListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  const handleSubmit = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };
  return (
    <main>
      <form action={handleSubmit} className="add-ingredients-form">
        <input
          type="text"
          placeholder=" e.g. apple"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">
          {ingredientsListItems}
        </ul>
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>
      </section>
    </main>
  );
};

export default Main;
