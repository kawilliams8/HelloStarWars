import { getVehicles, getPlanets} from './apiCalls';

describe('getVehicles', () => {

  let mockVehicle;
  beforeEach(() => {
    mockVehicle = [{
      name: "Sand Crawler",
      model: "Digger Crawler",
      class: "wheeled",
      passengers: 30
    }];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockVehicle)
      });
    });
  }); 

  it('should call fetch with the correct URL', () => {
    getVehicles();
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/vehicles/');
  });

  it('should return an array of vehicles', () => {
    expect(getVehicles()).resolves.toEqual(mockVehicle);
  });

  it('should show an error when the fetch Promise returns rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      });
    });

    expect(getVehicles()).rejects.toEqual(Error('Fetching Error'));
  });

  it('should show an error when the fetch Promise returns rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        message: 'Fetching Error'
      });
    });

    expect(getVehicles()).rejects.toEqual(Error('Fetching Error'));
  });
});

describe('getPlanets', () => {

  let mockPlanet;
  beforeEach(() => {
    mockPlanet = [{
      name: "Alderaan",
      population: 2000000000,
      terrain: "grasslands, mountains",
      climate: "temperate",
      residents: ['Leia Organa', 'Bail Prestor Organa', 'Raymus Antilles']
    }];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockPlanet)
      })
    })
  });

  it('should call fetch with the correct URL', () => {
    getPlanets();
    expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/planets/')
  });

  it('should return an array of planets', () => {
    expect(getPlanets()).resolves.toEqual(mockPlanet);
  });

  it('should show an error when the fetch Promise returns rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
      });
    });

    expect(getPlanets()).rejects.toEqual(Error('Fetching Error'));
  });

  it('should show an error when the fetch Promise returns rejected', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        message: 'Fetching Error'
      });
    });

    expect(getPlanets()).rejects.toEqual(Error('Fetching Error'));
  });
});