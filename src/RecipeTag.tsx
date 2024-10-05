import { IRecipeTagProps } from "./DataType";

export default function RecipeTag({ tagName, onSelectTag }: IRecipeTagProps) {
  return (
    <div
      onClick={() => onSelectTag(tagName)}
      role="button"
      tabIndex={0} // Add tabIndex to make the div focusable
      style={{ cursor: "pointer", border: "1px solid #ccc", padding: "5px" }}
    >
      {tagName}
    </div>
  );
}
