import { useState } from "react";
import { addBeer } from "../services/beers-service";
import { useNavigate } from "react-router-dom";

function AddBeerPage() {
  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const beer = { name, tagline, description };

    addBeer(beer)
      .then(() => {
        navigate("/beers");
      })
      .catch((err) => {
        setError(true);
      });
  }

  return (
    <div>
      {error && (
        <div
          className="alert alert-danger"
          onClick={() => {
            setError(false);
          }}
        >
          Error, revise los datos del formulario
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label htmlFor="name">Name</label>

          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="tagline">Tagline</label>

          <input
            type="text"
            name="tagline"
            className="form-control"
            id="tagline"
            placeholder="Enter tagline"
            value={tagline}
            onChange={(e) => {
              setTagline(e.target.value);
            }}
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="tagline">Tagline</label>

          <textarea
            type="text"
            name="description"
            className="form-control"
            id="description"
            placeholder="Enter description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddBeerPage;
