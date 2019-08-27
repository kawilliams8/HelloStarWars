export const getVehicles = () => {
  return fetch('https://swapi.co/api/vehicles/')
    .then(response => {
      if (!response.ok) {
        throw Error('Fetching Error')
      }
      return response.json()
    }).catch(error => {
      throw Error(error.message);
    });
};

export const getPlanets = () => {
  return fetch('https://swapi.co/api/planets/')
    .then(response => {
      if (!response.ok) {
        throw Error('Fetching Error')
      }
      return response.json()
    }).catch(error => {
      throw Error(error.message);
    });
};