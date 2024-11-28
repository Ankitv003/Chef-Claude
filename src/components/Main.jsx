import { useState } from "react";

const Main = () => {
  const [ingredients, setIngredients] = useState([]);
  const ingredientsListItems = ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });
  return (
    <main>
      <form className="add-ingredients-form">
        <input
          type="text"
          placeholder=" e.g. apple"
          aria-label="Add ingredient"
        />
        <button>Add Ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
};

export default Main;
