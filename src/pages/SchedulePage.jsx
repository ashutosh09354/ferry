import React,{useMemo,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ArrowRight,CalendarDays,Clock3,MapPin,Star,Wifi,Coffee,Wind} from 'lucide-react';
import {PageShell} from '../components/Common';
import {ferries} from '../data/siteData';

const departureCities=[...new Set(ferries.map(ferry=>ferry.from))];
const formatDate=date=>date?new Date(`${date}T00:00:00`).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}):'';

function ScheduleRow({ferry,onSelect}){
  return <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5">
    <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr_.75fr_auto] lg:items-center">
      <div><h2 className="text-lg font-black text-ocean">{ferry.name}</h2><div className="mt-2 flex flex-wrap gap-2">{ferry.amenities.map(amenity=><span className="inline-flex items-center gap-1.5 rounded-lg bg-[#edf8fa] px-2.5 py-1 text-xs font-semibold text-ocean" key={amenity}>{amenity==='Wi-Fi'?<Wifi size={13}/>:amenity==='Cafe'?<Coffee size={13}/>:<Wind size={13}/>} {amenity}</span>)}</div></div>
      <div className="flex items-center gap-4 border-y border-slate-100 py-3 sm:gap-7 lg:border-y-0 lg:border-l lg:py-0 lg:pl-7"><div><b className="text-lg text-ocean">{ferry.depart}</b><p className="text-sm text-slate-500">{ferry.from}</p></div><ArrowRight className="text-slate-400"/><div><b className="text-lg text-ocean">{ferry.arrive}</b><p className="text-sm text-slate-500">{ferry.to}</p></div></div>
      <div className="flex items-center gap-5 text-sm text-slate-500 lg:border-l lg:pl-7"><span><Clock3 size={16} className="mb-1 text-teal"/>{ferry.duration}</span><span className="font-bold text-teal"><Star size={16} fill="currentColor" className="mb-1"/>{ferry.rating}</span></div>
      <div className="flex items-center justify-between gap-4 lg:block lg:border-l lg:pl-7 lg:text-right"><span><b className="text-xl text-ocean">₹{ferry.price}</b><small className="block text-xs text-slate-400">per passenger</small></span><button type="button" onClick={onSelect} className="btn-primary px-5 py-2.5">Select <ArrowRight size={15}/></button></div>
    </div>
  </article>;
}

export default function SchedulePage(){
  const nav=useNavigate();
  const [from,setFrom]=useState('');
  const [to,setTo]=useState('');
  const [date,setDate]=useState('');
  const [searched,setSearched]=useState(false);
  const destinations=useMemo(()=>[...new Set(ferries.filter(ferry=>!from||ferry.from===from).map(ferry=>ferry.to))],[from]);
  const filteredFerries=useMemo(()=>ferries.filter(ferry=>(!from||ferry.from===from)&&(!to||ferry.to===to)),[from,to]);
  const updateFrom=event=>{setFrom(event.target.value);setTo('')};
  const searchFerries=()=>{setSearched(true);document.getElementById('available-ferries')?.scrollIntoView({behavior:'smooth',block:'start'})};
  return <PageShell kicker="Live timetable" title="Ferry schedule">
    <div className="mt-8 overflow-hidden rounded-3xl shadow-lg">
    <section className="relative min-h-[280px] overflow-hidden">
      <img src="/assets/images/ferryhero.png" alt="Ferry sailing at sunset" className="absolute inset-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#063b4c]/90 via-[#063b4c]/45 to-transparent"/>
      <div className="relative z-10 flex min-h-[280px] flex-col justify-center p-7 text-white sm:p-10"><p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-100">Live timetable</p><h2 className="mt-3 text-4xl font-black sm:text-5xl">Ferry schedule</h2><p className="mt-3 text-base text-white/80 sm:text-lg">Plan your next journey, one wave at a time.</p></div>
    </section>
    <section className="relative z-10 border-t border-white/70 bg-white/95 p-5 backdrop-blur sm:p-6">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_1fr_auto] lg:items-end">
        <label><span className="mb-2 block text-xs font-bold text-slate-500">FROM</span><div className="relative"><MapPin size={18} className="absolute left-3 top-3.5 text-teal"/><select className="field pl-10" value={from} onChange={updateFrom} aria-label="Departure city"><option value="">All departure cities</option>{departureCities.map(city=><option key={city}>{city}</option>)}</select></div></label>
        <label><span className="mb-2 block text-xs font-bold text-slate-500">TO</span><div className="relative"><MapPin size={18} className="absolute left-3 top-3.5 text-teal"/><select className="field pl-10" value={to} onChange={event=>setTo(event.target.value)} aria-label="Destination city"><option value="">All destinations</option>{destinations.map(destination=><option key={destination}>{destination}</option>)}</select></div></label>
        <label><span className="mb-2 block text-xs font-bold text-slate-500">DATE</span><div className="relative"><CalendarDays size={18} className="absolute left-3 top-3.5 text-teal"/><input type="date" className="field pl-10" value={date} onChange={event=>setDate(event.target.value)} aria-label="Travel date"/></div></label>
        <button type="button" onClick={searchFerries} className="btn-primary h-[50px]">Search Ferries <ArrowRight size={17}/></button>
      </div>
    </section>
    </div>
    <section id="available-ferries" className="mt-8 scroll-mt-6"><h2 className="text-2xl font-black text-ocean">Available Ferries</h2><p className="mt-1 text-slate-500">{searched?`${filteredFerries.length} scheduled service${filteredFerries.length===1?'':'s'} found${date?` for ${formatDate(date)}`:'.'}`:'Choose from our scheduled services and set sail on your next adventure.'}</p><div className="mt-5 space-y-3">{filteredFerries.map((ferry,index)=><ScheduleRow ferry={ferry} key={`${ferry.routeId}-${ferry.name}-${index}`} onSelect={()=>nav(`/ferry/${ferry.name.toLowerCase().replaceAll(' ','-')}?routeId=${encodeURIComponent(ferry.routeId)}&ferryName=${encodeURIComponent(ferry.name)}&people=${encodeURIComponent('2 Adults, 0 Children')}`)}/>)}{!filteredFerries.length&&<div className="rounded-2xl border border-dashed bg-white p-10 text-center text-slate-500">No ferry schedules match your selected route{date&&` for ${formatDate(date)}`}.</div>}</div></section>
  </PageShell>;
}
