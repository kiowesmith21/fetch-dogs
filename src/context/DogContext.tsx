import React, { createContext, useState, useContext } from "react";

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

interface DogContextType {
  dogs: Dog[];
  favorites: string[];
  setDogs: (dogs: Dog[]) => void;
  addFavorite: (id: string) => void;
}

const DogContext = createContext<DogContextType | undefined>(undefined);

export const DogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);

  const addFavorite = (id: string) => {
    setFavorites((prev) => [...new Set([...prev, id])]);
  };

  return (
    <DogContext.Provider value={{ dogs, favorites, setDogs, addFavorite }}>
      {children}
    </DogContext.Provider>
  );
};

export const useDogContext = () => {
  const context = useContext(DogContext);
  if (!context) throw new Error("useDogContext must be used within DogProvider");
  return context;
};
