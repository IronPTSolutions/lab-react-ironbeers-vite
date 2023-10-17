import beers from "../assets/beers.png";
import random from "../assets/random-beer.png";
import newBeer from "../assets/new-beer.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <img src={beers} alt="beers" className="w-100" />
        <h1>All Beers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          voluptate.
        </p>
      </Link>

      <Link to="random-beer">
        <img src={random} alt="random beer" className="w-100" />
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          voluptate.
        </p>
      </Link>

      <Link to="/new-beer">
        <img src={newBeer} alt="new beer" className="w-100" />
        <h1>New Beer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          voluptate.
        </p>
      </Link>
    </div>
  );
}

export default HomePage;
