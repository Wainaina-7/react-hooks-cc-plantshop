import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch all plants
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);

  // Add new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Toggle sold-out status
  function handleToggleSoldOut(id) {
    setPlants(plants.map((p) =>
      p.id === id ? { ...p, soldOut: !p.soldOut } : p
    ));
  }

  // Filter by search
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={filteredPlants} onToggleSoldOut={handleToggleSoldOut} />
    </main>
  );
}

export default PlantPage;
