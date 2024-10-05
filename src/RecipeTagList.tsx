import { IRecipeTagListProps } from "./DataType";
import RecipeTag from "./RecipeTag";

export default function RecipeTagList({
  tagList,
  onSelectTag,
}: IRecipeTagListProps) {
  return (
    <div>
      <h3>Choose a tag below</h3>
      {tagList.map((tag) => (
        <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
      ))}
    </div>
  );
}
