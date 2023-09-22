import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://api.punkapi.com/v2/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="beer-list-container">
      <h1>BEER CATALOG</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search beers"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="beer-list">
        {filteredBeers.map((beer) => (
          <div className="beer-card" key={beer.id}>
            <img src={beer.image_url} alt={beer.name} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>ABV: {beer.abv}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
