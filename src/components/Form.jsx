const Form = () => {
  const handleSubmit = (formData) => {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  };
  return (
    <form action={handleSubmit} className="add-ingredients-form">
      <input
        type="text"
        placeholder=" e.g. apple"
        aria-label="Add ingredient"
        name="ingredient"
      />
      <button>Add Ingredient</button>
    </form>
  );
};

export default Form;
