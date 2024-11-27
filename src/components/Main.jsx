const Main = () => {
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
    </main>
  );
};

export default Main;
