import type {
  ChangeEvent,
  HTMLAttributes,
  KeyboardEvent,
  ReactElement,
} from "react";
import type { Skill } from "@/skills";
import TagList from "@/components/tags/TagList";
import { useData } from "@/hooks/useData";
import { useState } from "react";

const TagInput = ({
  ...props
}: HTMLAttributes<HTMLDivElement>): ReactElement => {
  const [value, setValue] = useState("");
  const { tags, setTags } = useData();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value === "," ? "" : event.target.value);
  };

  const deleteTag = (index: number): void => {
    setTags((prevState) => prevState.filter((_, i) => i !== index));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    switch (event.key) {
      case "Tab":
        if (value) event.preventDefault();
      case "Enter":
      case ",": {
        const skill = value.trim() as Skill;
        if (!tags.includes(skill)) {
          setTags((prevState) => [...prevState, skill]);
        }
        setValue("");
        break;
      }
      case "Backspace":
        if (!value) {
          deleteTag(tags.length - 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <div
      className="flex overflow-auto py-2 px-4 w-full max-w-full border lg:w-min"
      {...props}
    >
      <TagList onDelete={(index) => deleteTag(index)} tags={tags} />
      <input
        className="px-3 bg-transparent focus:outline-none focus:placeholder-gray-300"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="search using tags..."
        type="text"
        value={value}
      />
    </div>
  );
};

export default TagInput;
