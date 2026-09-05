import React,{useMemo,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Anchor,ArrowRight,Clock3,Grid2X2,Heart,Search,Ship,Star} from 'lucide-react';
import {PageShell} from '../components/Common';
import {routes,states} from '../data/siteData';

const filters=['All Routes',...states,'Popular'];
const routeImages=[
  'https://fastrental.co/wp-content/uploads/2025/03/ropax-ferry-image.webp',
  'https://images.unsplash.com/photo-1564835099575-3a09829cbee8?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVycnl8ZW58MHx8MHx8fDA%3D',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNoqg5K0i87wqCzpfLdhXtRwt5mo2Q4XuCEHtoISrqiilnT8MORXVnabM&s=10',
  'https://cdn.pixabay.com/photo/2024/02/05/18/14/passenger-ship-8555025_640.jpg',
  'https://ohio.org/static/uploads/0688y000004Pyy0AAC.jpg',
  'https://images.unsplash.com/photo-1753988986779-02b7da10b3b2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8',
];

const tagStyles={
  Popular:'bg-emerald-100 text-emerald-800',
  Heritage:'bg-orange-100 text-orange-800',
  Coastal:'bg-emerald-100 text-emerald-800',
  Fastest:'bg-sky-100 text-sky-800',
  'Island Hop':'bg-violet-100 text-violet-800',
  'Best Value':'bg-emerald-100 text-emerald-800',
  'Island Escape':'bg-indigo-100 text-indigo-800',
};

function RouteExplorerCard({route,index}) {
  const nav=useNavigate();
  const [favorite,setFavorite]=useState(false);
  return <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
    <div className="relative h-52 overflow-hidden">
      <img src={routeImages[index%routeImages.length]} alt={`${route.from} to ${route.to}`} className="h-full w-full object-cover transition duration-500 hover:scale-105"/>
      <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold ${tagStyles[route.tag]||'bg-white text-ocean'}`}>{route.tag}</span>
      <button type="button" aria-label={`${favorite?'Remove':'Add'} ${route.from} to ${route.to} ${favorite?'from':''} favourites`} onClick={()=>setFavorite(!favorite)} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ocean/70 text-white backdrop-blur transition hover:bg-ocean">
        <Heart size={18} fill={favorite?'currentColor':'none'}/>
      </button>
    </div>
    <button type="button" onClick={()=>nav(`/search?state=${encodeURIComponent(route.state)}&from=${encodeURIComponent(route.from)}&to=${encodeURIComponent(route.to)}`)} className="block min-h-52 w-full p-5 text-left">
      <p className="text-[11px] font-black uppercase tracking-[0.14em] text-sky-700">{route.state}</p>
      <h2 className="mt-1 text-lg font-black text-ocean">{route.from} <span className="text-teal">→</span> {route.to}</h2>
      <p className="mt-1 text-sm text-slate-500">{route.tag==='Heritage'?'Explore history, caves and culture.':route.tag==='Coastal'?'Gateway to coastal adventures.':'A comfortable and scenic ferry connection.'}</p>
      <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3 text-xs text-slate-600">
        <span className="flex items-center gap-1.5"><Clock3 size={15} className="text-ocean"/>{route.time}</span>
        <span className="hidden items-center gap-1.5 sm:flex"><Anchor size={15} className="text-ocean"/>Regular Ferries</span>
        <span><small className="block text-slate-400">From</small><b className="text-base text-ocean">₹{route.price}</b></span>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal text-white"><ArrowRight size={17}/></span>
      </div>
    </button>
  </article>;
}

export default function RoutesPage(){
  const [activeFilter,setActiveFilter]=useState('All Routes');
  const [query,setQuery]=useState('');
  const [visibleCount,setVisibleCount]=useState(6);
  const filteredRoutes=useMemo(()=>{
    const selected=activeFilter.trim().toLowerCase();
    const search=query.trim().toLowerCase();
    return routes.filter(route=>{
      const matchesFilter=selected==='all routes'
        || (selected==='popular' && route.tag.toLowerCase()==='popular')
        || route.state.trim().toLowerCase()===selected;
      const searchableText=`${route.state} ${route.from} ${route.to} ${route.tag}`.toLowerCase();
      return matchesFilter&&(!search||searchableText.includes(search));
    });
  },[activeFilter,query]);
  return <PageShell kicker="Destinations" title="Explore ferry routes">
    <div className="relative mt-3 overflow-hidden rounded-3xl bg-gradient-to-br from-[#f4fbfc] via-white to-[#e4f5f7] px-1 py-1">
      <div className="relative z-10">
        <p className="max-w-2xl text-slate-500">Discover ferry connections by state and city across India.</p>
        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map(filter=><button type="button" key={filter} aria-pressed={activeFilter===filter} onClick={()=>{setActiveFilter(filter);setVisibleCount(6)}} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold transition ${activeFilter===filter?'border-ocean bg-ocean text-white':'border-slate-200 bg-white text-slate-600 hover:border-teal hover:text-teal'}`}>
              {filter==='All Routes'?<Grid2X2 size={15}/>:filter==='Popular'?<Star size={15}/>:<Ship size={15}/>} {filter}
            </button>)}
          </div>
          <label className="relative block w-full shrink-0 lg:w-72">
            <Search size={17} className="absolute left-4 top-3.5 text-ocean"/>
            <input value={query} onChange={event=>setQuery(event.target.value)} className="field rounded-full pl-11" placeholder="Search routes, cities or islands..." aria-label="Search routes, cities or islands"/>
          </label>
        </div>
      </div>
    </div>
    <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {filteredRoutes.slice(0,visibleCount).map((route,index)=><RouteExplorerCard key={route.id} route={route} index={index}/>)}
    </div>
    {!filteredRoutes.length&&<div className="mt-8 rounded-2xl border border-dashed bg-white p-10 text-center text-slate-500">No ferry routes match your search.</div>}
    {visibleCount<filteredRoutes.length&&<div className="mt-8 text-center"><button type="button" onClick={()=>setVisibleCount(count=>count+6)} className="btn-secondary rounded-full px-6">Load More Routes <ArrowRight size={16}/></button></div>}
  </PageShell>;
}
