//import React from "react";

import { IRecipeListProps } from "./DataType";
import Recipe from "./Recipe";

export default function RecipeList({
  recipes,
  tagName,
  handleBack,
}: IRecipeListProps) {
  return (
    <div>
      <h3>Recipes for {tagName} </h3>
      <button onClick={handleBack}>Back</button>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipeData={recipe} />
      ))}
    </div>
  );
}
