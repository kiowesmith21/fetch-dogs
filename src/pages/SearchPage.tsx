import React, { useEffect, useState } from "react";
import { useDogContext } from "../context/DogContext";
import axios from "axios";

const SearchPage: React.FC = () => {
  const { dogs, setDogs, addFavorite } = useDogContext();
  const [breeds, setBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    const fetchBreeds = async () => {
      const response = await axios.get("https://frontend-take-home-service.fetch.com/dogs/breeds", { withCredentials: true });
      setBreeds(response.data);
    };

    fetchBreeds();
  }, []);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await axios.get("https://frontend-take-home-service.fetch.com/dogs/search?sort=breed:asc", {
        withCredentials: true,
      });
      setDogs(response.data.resultIds);
    };

    fetchDogs();
  }, []);

  return (
    <div>
      <h1>Search Dogs</h1>
      <select onChange={(e) => setSelectedBreed(e.target.value)} value={selectedBreed}>
        <option value="">All Breeds</option>
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <div>
        {dogs.map((dog) => (
          <div key={dog.id}>
            <img src={dog.img} alt={dog.name} width={100} />
            <p>{dog.name} - {dog.breed}</p>
            <button onClick={() => addFavorite(dog.id)}>Favorite</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
