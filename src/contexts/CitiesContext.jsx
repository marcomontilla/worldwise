import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCitites() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("Ops, something when wrong...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCitites();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);

  if (context === undefined)
    throw new Error("PostContext was used outside of the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
