import React,{useMemo,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ArrowRight,CalendarDays,Clock3,Heart,MapPin,Ship,Star,Users} from 'lucide-react';
import {routes} from '../data/siteData';
import {PageShell} from '../components/Common';

const experiences=[
  {id:'mumbai-elephanta-heritage',title:'Elephanta Caves heritage day',type:'Heritage',location:'Mumbai → Elephanta',duration:'Full day',price:550,rating:4.9,people:'2.4k travelers',routeId:'mumbai-elephanta',description:'Cruise across the harbour and explore ancient cave temples, island paths and unforgettable Gateway views.',image:'https://images.unsplash.com/photo-1564835099575-3a09829cbee8?auto=format&fit=crop&w=1200&q=85'},
  {id:'goa-island-hop',title:'Goa island-hopping escape',type:'Island escape',location:'Ribandar → Chorao',duration:'Half day',price:120,rating:4.8,people:'1.8k travelers',routeId:'ribandar-chorao',description:'Slow down among mangroves, quiet villages and the green waterways of Goa’s hidden island.',image:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85'},
  {id:'kochi-sunset-cruise',title:'Kochi backwater sunset',type:'Scenic cruise',location:'Kochi → Fort Kochi',duration:'2 hours',price:450,rating:4.7,people:'3.1k travelers',routeId:'kochi-fort-kochi',description:'Watch the sun set over the harbour while crossing between Kochi’s historic waterfront neighbourhoods.',image:'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85'},
  {id:'andaman-island-escape',title:'Andaman island escape',type:'Island escape',location:'Port Blair → Havelock',duration:'2h 30m',price:1800,rating:4.9,people:'980 travelers',routeId:'port-blair-havelock',description:'Begin your island holiday with a comfortable sea crossing toward Havelock’s clear water and beaches.',image:'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85'},
  {id:'mumbai-coastal-day',title:'Mumbai coastal day trip',type:'Scenic cruise',location:'Mumbai → Mandwa',duration:'Full day',price:650,rating:4.8,people:'4.2k travelers',routeId:'mumbai-mandwa',description:'Trade city traffic for sea breeze, Alibaug beaches and a relaxed return journey across the harbour.',image:'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85'},
  {id:'lakshadweep-crossing',title:'Lakshadweep ocean crossing',type:'Island escape',location:'Kochi → Agatti',duration:'14 hours',price:3500,rating:4.6,people:'640 travelers',routeId:'kochi-agatti',description:'Set sail toward turquoise lagoons and a slower island rhythm on this memorable long-distance crossing.',image:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=85'},
];

function ExperienceCard({experience}){
  const nav=useNavigate();
  const [liked,setLiked]=useState(false);
  const route=routes.find(item=>item.id===experience.routeId);
  return <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
    <div className="relative h-52 overflow-hidden"><img src={experience.image} alt={experience.title} className="h-full w-full object-cover transition duration-500 hover:scale-105"/><span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-bold text-ocean">{experience.type}</span><button type="button" aria-label={`${liked?'Remove':'Save'} ${experience.title}`} onClick={()=>setLiked(!liked)} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-ocean/70 text-white backdrop-blur"><Heart size={17} fill={liked?'currentColor':'none'}/></button></div>
    <div className="p-5"><div className="flex items-start justify-between gap-3"><div><h2 className="text-xl font-black text-ocean">{experience.title}</h2><p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500"><MapPin size={15} className="text-teal"/>{experience.location}</p></div><span className="flex items-center gap-1 text-sm font-bold text-amber-500"><Star size={15} fill="currentColor"/>{experience.rating}</span></div><p className="mt-4 text-sm leading-6 text-slate-500">{experience.description}</p><div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-600"><span className="flex items-center gap-1.5"><Clock3 size={15} className="text-teal"/>{experience.duration}</span><span className="flex items-center gap-1.5"><Users size={15} className="text-teal"/>{experience.people}</span></div><div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><span><small className="block text-xs text-slate-400">From</small><b className="text-lg text-ocean">₹{experience.price}</b> <small className="text-slate-400">/person</small></span><button type="button" onClick={()=>nav(route?`/search?state=${encodeURIComponent(route.state)}&from=${encodeURIComponent(route.from)}&to=${encodeURIComponent(route.to)}&image=${encodeURIComponent(experience.image)}`:'/routes')} className="btn-primary px-4 py-2.5">Plan this trip <ArrowRight size={15}/></button></div></div>
  </article>;
}

export default function Experiences(){
  const [filter,setFilter]=useState('All');
  const categories=['All',...new Set(experiences.map(experience=>experience.type))];
  const visible=useMemo(()=>filter==='All'?experiences:experiences.filter(experience=>experience.type===filter),[filter]);
  return <PageShell kicker="Travel better" title="Experiences on the water">
    <div className="mt-8 overflow-hidden rounded-3xl shadow-lg">
    <section className="relative min-h-[330px] overflow-hidden">
      <img src="/assets/images/expeiencebanner.png" alt="Ferry journey through India's coast" className="absolute inset-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#063b4c]/90 via-[#063b4c]/45 to-transparent"/>
      <div className="relative z-10 flex min-h-[330px] max-w-xl flex-col justify-center p-7 text-white sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-100">Travel better</p>
        <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Experiences on <span className="text-teal-100">the water</span></h2>
        <p className="mt-4 max-w-lg text-base leading-7 text-white/80">More than a ferry ride. Find memorable ways to explore India’s islands, harbours and coastal cities.</p>
      </div>
    </section>
    <div className="relative z-10 grid gap-4 bg-ocean p-5 text-white sm:grid-cols-3 sm:p-6">
      <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-white/10"><Ship size={21}/></span><span><b className="block">Curated journeys</b><small className="text-white/60">Handpicked routes</small></span></div>
      <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-white/10"><CalendarDays size={21}/></span><span><b className="block">Flexible planning</b><small className="text-white/60">Choose your travel day</small></span></div>
      <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-white/10"><Users size={21}/></span><span><b className="block">For every traveler</b><small className="text-white/60">Solo, family or friends</small></span></div>
    </div>
    </div>
    <div className="mt-7 flex flex-wrap gap-2">{categories.map(category=><button type="button" key={category} onClick={()=>setFilter(category)} aria-pressed={filter===category} className={`rounded-full border px-4 py-2 text-sm font-bold transition ${filter===category?'border-ocean bg-ocean text-white':'border-slate-200 bg-white text-slate-600 hover:border-teal hover:text-teal'}`}>{category}</button>)}</div>
    <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{visible.map(experience=><ExperienceCard key={experience.id} experience={experience}/>)}</div>
  </PageShell>;
}
