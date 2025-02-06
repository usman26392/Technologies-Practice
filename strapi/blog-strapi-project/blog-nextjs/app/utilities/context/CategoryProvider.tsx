"use client";
import {
  createContext,
  useCallback,
  useState,
} from "react";


export interface CategoryContextType {
  category: string;
  changeCategory: (cat: string) => void;
}

const initialContext: CategoryContextType = {
  category: "",
  changeCategory: () => {},
};



export const CategoryContext = createContext(initialContext);

export default function CategoryProvider({ children }: any) {
  const [category, setCategory] = useState("");

  const changeCategory = useCallback((cat: string) => {
    // console.log(cat);
    setCategory(cat);
  }, []);

  return (
    <CategoryContext.Provider value={{ category, changeCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}
