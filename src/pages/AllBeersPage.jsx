import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllBeers } from "../services/beers-service";

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    getAllBeers().then((data) => {
      setBeers(data);
    });
  }, []);

  return (
    <div>
      {beers.map((beer) => (
        <div className="card mb-3" key={beer._id}>
          <img
            className="card-img-top"
            src={beer.image_url}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">
              <Link to={`/beers/${beer._id}`}>{beer.name}</Link>
            </h5>
            <p className="card-text">{beer.tagline}</p>
            <p className="card-text">{beer.contributed_by}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
