import React,{useMemo,useState} from 'react';
import {PageShell,FerryRow} from '../components/Common';
import {ferries} from '../data/siteData';

const departureCities=[...new Set(ferries.map(ferry=>ferry.from))];
const formatDate=date=>date?new Date(`${date}T00:00:00`).toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'}):'';

export default function SchedulePage(){
  const [from,setFrom]=useState('');
  const [to,setTo]=useState('');
  const [date,setDate]=useState('');
  const destinations=useMemo(()=>[...new Set(ferries.filter(ferry=>!from||ferry.from===from).map(ferry=>ferry.to))],[from]);
  const filteredFerries=useMemo(()=>ferries.filter(ferry=>(!from||ferry.from===from)&&(!to||ferry.to===to)),[from,to]);
  const updateFrom=event=>{setFrom(event.target.value);setTo('')};
  return <PageShell kicker="Live timetable" title="Ferry schedule">
    <div className="mt-8 rounded-2xl border bg-white p-5">
      <div className="grid gap-3 md:grid-cols-3">
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold text-slate-500">FROM</span>
          <select className="field" value={from} onChange={updateFrom} aria-label="Departure city">
            <option value="">All departure cities</option>
            {departureCities.map(city=><option key={city} value={city}>{city}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold text-slate-500">TO</span>
          <select className="field" value={to} onChange={event=>setTo(event.target.value)} aria-label="Destination city">
            <option value="">All destinations</option>
            {destinations.map(destination=><option key={destination} value={destination}>{destination}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-bold text-slate-500">DATE</span>
          <input type="date" className="field" value={date} onChange={event=>setDate(event.target.value)} aria-label="Travel date"/>
        </label>
      </div>
      {(from||to||date)&&<p className="mt-4 text-sm text-slate-500">{filteredFerries.length} schedule{filteredFerries.length===1?'':'s'} found{date&&` for ${formatDate(date)}`}.</p>}
    </div>
    <div className="mt-7 space-y-4">
      {filteredFerries.map((ferry,index)=><FerryRow f={ferry} key={`${ferry.routeId}-${ferry.name}-${index}`}/>)}
      {!filteredFerries.length&&<div className="rounded-2xl border border-dashed bg-white p-10 text-center text-slate-500">No ferry schedules match your selected route.</div>}
    </div>
  </PageShell>;
}
