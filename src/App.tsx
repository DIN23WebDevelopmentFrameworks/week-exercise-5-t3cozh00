import { useState, useEffect } from "react";
import RecipeTagList from "./RecipeTagList";
import RecipeList from "./RecipeList";
import { IRecipe } from "./DataType";

const App = () => {
  const [recipeTagList, setRecipeTagList] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [recipeList, setRecipeList] = useState<IRecipe[]>([]);
  const [currentPage, setCurrentPage] = useState("tags");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes/tags")
      .then((response) => response.json())
      .then((data) => {
        console.log("taglist", data);
        setRecipeTagList(data);
      });
  }, []);

  function handleSelectTag(tagName: string) {
    setSelectedTag(tagName);
    fetch(`https://dummyjson.com/recipes/tag/${tagName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("recipe data", data);
        setRecipeList(data.recipes);
        setCurrentPage("recipes");
      });
  }

  function handleBack() {
    setCurrentPage("tags");
  }

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {currentPage === "tags" ? (
        <RecipeTagList tagList={recipeTagList} onSelectTag={handleSelectTag} />
      ) : (
        <RecipeList
          recipes={recipeList}
          tagName={selectedTag}
          handleBack={handleBack}
        />
      )}
    </div>
  );
};

export default App;
