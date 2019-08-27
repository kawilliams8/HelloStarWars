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

export const getPeople = () => {
  return fetch('https://swapi.co/api/people/')
  .then(response => {
    console.log(response)
    if(!response.ok) {
      throw Error('Error')
    } 
    return response.json()
  })
  .catch(error => {
    throw Error(error.message);
  })
};