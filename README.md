# Helium Hotspots Simple API

Test API to get helium hotspots by city using [Helium API](https://docs.helium.com/api/).

## Steps to install

1. Clone the repository

```bash
git clone https://github.com/Vedant1202/simple-helium-hotspots.git
```

2. Enter the folder
```bash
cd simple-helium-hotspots
```

3. Install dependencies
```bash
npm install
```

4. Start the API
```bash
npm start
```

5. Go to `http://localhost:3000/` to see a starting page.



## Routes available

1. `/cities`: Get a list of all the cities supported by the API. 

2. `/cities/:cityId`: Get hotspots in a city by cityId. CityId is unique for every city and can be found on the `/cities` route.