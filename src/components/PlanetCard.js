import React, { useState, useEffect } from "react";
import axios from "axios";
import ResidentsList from "./ResidentsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchResidents();
  }, [planet.residents]);

  const fetchResidents = async () => {
    try {
      setLoading(true);
      const residentsData = await Promise.all(
        planet.residents.map((residentURL) => axios.get(residentURL))
      );
      setResidents(residentsData.map((resident) => resident.data));
    } catch (error) {
      console.error("Error fetching residents:", error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to capitalize the first letter of each word
  const capitalizeFirstLetter = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <div className="planet-details">
        <p>
          <FontAwesomeIcon icon="fa-solid fa-mountain" />
          Climate: {capitalizeFirstLetter(planet.climate)}
        </p>
        <p>Population: {capitalizeFirstLetter(planet.population)}</p>
        <p>Terrain: {capitalizeFirstLetter(planet.terrain)}</p>
      </div>
      {loading ? (
        <p>Loading residents...</p>
      ) : (
        <ResidentsList residents={residents} />
      )}
    </div>
  );
};

export default PlanetCard;
