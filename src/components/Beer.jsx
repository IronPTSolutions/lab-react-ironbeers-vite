import { useEffect, useState } from "react";
import { getBeer } from "../services/beers-service";

function Beer({ id }) {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    getBeer(id).then((data) => {
      setBeer(data);
    });
  }, []);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img className="w-100 mg-3" src={beer.image_url} />
      <div className="d-flex justify-content-between">
        <h1>{beer.name}</h1>
        <h3 className="text-muted">{beer.attenuation_level}</h3>
      </div>
      <p>{beer.tagline}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
}

export default Beer;
