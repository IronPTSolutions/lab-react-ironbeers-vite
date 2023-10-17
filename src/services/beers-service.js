import axios from "axios";

let beersCache = null;

setInterval(() => {
  beersCache = null;
}, 1000 * 60 * 60 * 24);

const service = axios.create({
  baseURL: "https://ih-beers-api2.herokuapp.com",
});

export function getAllBeers() {
  if (beersCache) {
    return Promise.resolve(beersCache);
  }

  return service.get("/beers").then((response) => {
    beersCache = response.data;
    return response.data;
  });
}

export function getBeer(id) {
  const beer = beersCache?.find((b) => b._id === id);

  if (beer) {
    return Promise.resolve(beer);
  }

  return service.get(`/beers/${id}`).then((response) => response.data);
}
