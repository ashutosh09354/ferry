const routeImages = [
  'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85',
];

export const ferryDetailImages = [
  'https://fastrental.co/wp-content/uploads/2025/03/ropax-ferry-image.webp',
  'https://images.unsplash.com/photo-1564835099575-3a09829cbee8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVycnl8ZW58MHx8MHx8fDA%3D',
  'https://cdn.pixabay.com/photo/2024/02/05/18/14/passenger-ship-8555025_640.jpg',
  'https://ohio.org/static/uploads/0688y000004Pyy0AAC.jpg',
  'https://images.unsplash.com/photo-1753988986779-02b7da10b3b2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
];

export const routes = [
  { id:'mumbai-mandwa', state:'Maharashtra', from:'Mumbai', to:'Mandwa', price:650, time:'1h 30m', tag:'Popular' },
  { id:'mumbai-elephanta', state:'Maharashtra', from:'Mumbai', to:'Elephanta', price:550, time:'1h', tag:'Heritage' },
  { id:'mumbai-rewas', state:'Maharashtra', from:'Mumbai', to:'Rewas', price:500, time:'1h 15m', tag:'Coastal' },
  { id:'panaji-betim', state:'Goa', from:'Panaji', to:'Betim', price:150, time:'15m', tag:'Fastest' },
  { id:'ribandar-chorao', state:'Goa', from:'Ribandar', to:'Chorao', price:120, time:'20m', tag:'Island Hop' },
  { id:'kochi-fort-kochi', state:'Kerala', from:'Kochi', to:'Fort Kochi', price:450, time:'20m', tag:'Best Value' },
  { id:'vypin-fort-kochi', state:'Kerala', from:'Vypin', to:'Fort Kochi', price:350, time:'15m', tag:'Popular' },
  { id:'port-blair-havelock', state:'Andaman & Nicobar', from:'Port Blair', to:'Havelock', price:1800, time:'2h 30m', tag:'Island Escape' },
  { id:'havelock-neil-island', state:'Andaman & Nicobar', from:'Havelock', to:'Neil Island', price:1400, time:'1h 30m', tag:'Island Hop' },
  { id:'kochi-agatti', state:'Lakshadweep', from:'Kochi', to:'Agatti', price:3500, time:'14h', tag:'Island Escape' },
  { id:'kochi-kavaratti', state:'Lakshadweep', from:'Kochi', to:'Kavaratti', price:3500, time:'14h', tag:'Island Escape' },
  { id:'kolkata-howrah', state:'West Bengal', from:'Kolkata', to:'Howrah', price:100, time:'20m', tag:'Fastest' },
  { id:'guwahati-north-guwahati', state:'Assam', from:'Guwahati', to:'North Guwahati', price:100, time:'30m', tag:'Best Value' },
  { id:'ghogha-dahej', state:'Gujarat', from:'Ghogha', to:'Dahej', price:900, time:'1h 15m', tag:'Popular' },    
].map((route, index) => ({ ...route, img: routeImages[index % routeImages.length] }));

export const states = [...new Set(routes.map(route => route.state))];

export function getRoutesForState(state) {
  return routes.filter(route => route.state === state);
}

export function getRoutesFromCity(state, from) {
  return getRoutesForState(state).filter(route => route.from === from);
}

export function getCitiesForState(state) {
  return [...new Set(getRoutesForState(state).map(route => route.from))];
}

export function findRoute({ state, from, to }) {
  return routes.find(route => route.state === state && route.from === from && route.to === to);
}

export const ferries = routes.flatMap(route => [
  { name:'SeaLink Express', routeId:route.id, from:route.from, to:route.to, depart:'09:30 AM', arrive:'11:00 AM', duration:route.time, price:route.price, rating:4.8, amenities:['AC','Wi-Fi','Cafe'], image:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85' },
  { name:'Island Queen', routeId:route.id, from:route.from, to:route.to, depart:'12:00 PM', arrive:'01:30 PM', duration:route.time, price:route.price, rating:4.7, amenities:['AC','Wi-Fi','Cafe'], image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85' },
  { name:'Coastal Cruiser', routeId:route.id, from:route.from, to:route.to, depart:'03:00 PM', arrive:'04:30 PM', duration:route.time, price:route.price, rating:4.9, amenities:['AC','Wi-Fi','Washroom'], image:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1400&q=85' },
]);

export function getFerriesForRoute(routeId) {
  return ferries.filter(ferry => ferry.routeId === routeId);
}
