import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const ingredientsListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };
  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredients-form">
        <input
          type="text"
          placeholder=" e.g. apple"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
};

export default Main;
