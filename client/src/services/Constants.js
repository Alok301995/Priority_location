export const KPIs = [
  "Customer Density",
  "Infrastructure score",
  "Similarity score",
  "Proximity Score",
  "Service Score",
]


export const cityList = [ "Ahmedabad","Bangalore", "Chennai", "Delhi", "Hyderabad", "Kolkata", "Mumbai", "Pune"]


export const userInfo = {
  "name": "Alok",
  "Department": "MIS"
}


export const cityData = {
  "Ahmedabad": {
    "center": {
      "lat": 23.0225,
      "lng": 72.5714
    },
    "zoom": 12,
    "boundaries": [
      { lat: 23.0797, lng: 72.5160 },
      { lat: 23.0386, lng: 72.5247 },
      { lat: 23.0258, lng: 72.5873 },
      { lat: 23.0272, lng: 72.6186 },
      { lat: 23.0291, lng: 72.6412 },
      { lat: 23.0711, lng: 72.6497 },
      { lat: 23.0901, lng: 72.6309 },
      { lat: 23.0875, lng: 72.5967 },
      { lat: 23.1062, lng: 72.5854 },
      { lat: 23.0983, lng: 72.5712 },
      { lat: 23.0994, lng: 72.5559 },
      { lat: 23.0800, lng: 72.5498 },
      { lat: 23.0797, lng: 72.5160 }, 
    ],
    "dealerNetwork": [{
      lat: 23.1950,
      lng: 72.7777
    },
    {
      lat: 23.0321,
      lng: 72.5866
    },
    {
      lat: 23.0396,
      lng: 72.5247
    },
    {
      lat: 23.0479,
      lng: 72.5066
    },
    {
      lat: 23.0662,
      lng: 72.5338
    },
    {
      lat: 23.0225,
      lng: 72.5677
    }]
  },
  "Bangalore": {

    "center": {
      "lat": 12.9716,
      "lng": 77.5946
    },
    "zoom": 12,

  },
  "Chennai": {
    "center": {
      "lat": 13.0827,
    "lng": 80.2707
    },
    "zoom": 12,

    
  },
  "Delhi": {
    "center": {
      "lat": 28.7041,
      "lng": 77.1025
    },
    "zoom": 12,

  },
  "Hyderabad": {
    "center": {
      "lat": 17.3850,
    "lng": 78.4867
    },
    "zoom": 12,
    
  },
  "Kolkata": {
    "center": {
      "lat": 22.5726,
    "lng": 88.3639
    },
    "zoom": 12,
    
  },
  "Mumbai": {
    "center": {
      "lat": 19.0760,
    "lng": 72.8777
    },
    "zoom": 12,
    
  },
  "Pune": {
    "center": {
      "lat": 18.5204,
      "lng": 73.8567
    },
    "zoom": 12,
    
  }
}



export const serviceLocationData = [
  {
    lat: 23.0588,
    long: 72.6216
  },
  {
    lat: 23.0036,
    long: 72.6021
  },
  {
    lat: 23.0268,
    long: 72.5879
  },
  {
    lat: 23.1716,
    long: 72.5955
  },
  {
    lat: 23.1950,
    long: 72.7777
  },
  {
    lat: 23.0321,
    long: 72.5866
  },
  {
    lat: 23.0396,
    long: 72.5247
  },
  {
    lat: 23.0479,
    long: 72.5066
  },
  {
    lat: 23.0662,
    long: 72.5338
  },
  {
    lat: 23.0225,
    long: 72.5677
  }
];



// Customer Density Data
export function generateCustomerDensityData(n) {
  const ahmedabadLat = 23.0225;
  const ahmedabadLng = 72.5714;

  const customerDensityData = [];

  // Generate 100 entries
  for (let i = 0; i < n; i++) {
    const latVariation = (Math.random() - 0.5) * 0.2; 
    const lngVariation = (Math.random() - 0.5) * 0.2;

    // Calculate new coordinates
    const lat = ahmedabadLat + latVariation;
    const lng = ahmedabadLng + lngVariation;

    const density = Math.floor(Math.random() * (30 - 10 + 1)) + 10;

    customerDensityData.push({ density, lat, lng });
  
  }

  return customerDensityData;
}