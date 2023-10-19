import axios from "axios";

const service = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com/beers",
});

export function getAllBeers() {
  return service.get("/").then((response) => response.data);
}

export function getBeer(id) {
  return service.get(`/${id}`).then((response) => response.data);
}

export function addBeer(beer) {
  return service.post("/new", beer).then((response) => response.data);
}
