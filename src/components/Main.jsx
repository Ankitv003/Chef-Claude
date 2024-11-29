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
      <ul> {ingredientsListItems}</ul>
    </main>
  );
};

export default Main;
