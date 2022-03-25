import type { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";
import { createContext, useContext, useState } from "react";
import type { Skill } from "@/skills";

interface Context {
  tags: Skill[];
  addTag: (skill: Skill) => void;
  removeTag: (skill: Skill) => void;
  setTags: Dispatch<SetStateAction<Skill[]>>;
}

const DataContext = createContext<Context>({} as Context);

const useData = (): Context => useContext(DataContext);

const DataProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [tags, setTags] = useState<Context["tags"]>([]);

  const addTag = (skill: Skill): void => {
    if (!tags.includes(skill)) {
      setTags((prevState) => [...prevState, skill]);
    }
  };

  const removeTag = (skill: Skill): void => {
    setTags((prevState) => prevState.filter((a) => a !== skill));
  };

  return (
    <DataContext.Provider
      value={{ addTag, removeTag, tags, setTags } as Context}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, useData };
