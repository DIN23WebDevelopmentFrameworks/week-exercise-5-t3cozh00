import { IRecipeProps } from "./DataType";

export default function Recipe({ recipeData }: IRecipeProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "5px", margin: "10px" }}>
      <h3>{recipeData.name}</h3>
      <h4>Ingredients</h4>
      <ul>
        {recipeData.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions</h4>
      <ul>
        {recipeData.instructions.map((instruction, index) => (
          <div key={index}>
            {index + 1}. {instruction}
          </div>
        ))}
      </ul>
    </div>
  );
}
