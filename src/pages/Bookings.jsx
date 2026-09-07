import React,{useMemo,useState} from 'react';
import {CalendarDays,ChevronDown,Clock3,Ship,Ticket,Users,ArrowRight} from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import {Layout} from '../components/Layout';

const bookings=[
  {status:'Upcoming',route:'Mumbai → Mandwa',date:'12 Sep 2026',time:'09:30 AM',id:'FRY-928374'},
  {status:'Completed',route:'Kochi → Fort Kochi',date:'22 Aug 2026',time:'04:00 PM',id:'FRY-817263'}
];

function BookingCard({booking}){
  const nav=useNavigate();
  const upcoming=booking.status==='Upcoming';
  return <article className={`rounded-2xl border border-slate-200 border-l-4 bg-white p-5 shadow-sm ${upcoming?'border-l-teal':'border-l-slate-300'}`}>
    <div className="flex flex-wrap items-start justify-between gap-4">
      <div>
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${upcoming?'bg-teal/10 text-teal':'bg-slate-100 text-slate-500'}`}>{booking.status}</span>
        <h2 className="mt-4 text-xl font-black text-ocean">{booking.route}</h2>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
          <span className="flex items-center gap-1.5"><CalendarDays size={16} className="text-ocean"/>{booking.date}</span>
          <span className="flex items-center gap-1.5"><Clock3 size={16} className="text-ocean"/>{booking.time}</span>
          <span className="flex items-center gap-1.5"><Users size={16} className="text-ocean"/>1 Passenger</span>
        </div>
      </div>
      <span className="text-xs font-medium text-slate-400">{booking.id}</span>
    </div>
    <div className="mt-5 flex justify-end">
      <button type="button" onClick={()=>nav('/ticket')} className={upcoming?'btn-primary':'btn-secondary'}>View ticket <ArrowRight size={16}/></button>
    </div>
  </article>;
}

export default function Bookings(){
  const nav=useNavigate();
  const [filter,setFilter]=useState('All Bookings');
  const [sort,setSort]=useState('Recent first');
  const visible=useMemo(()=>filter==='All Bookings'?bookings:bookings.filter(booking=>booking.status===filter.replace(' Bookings','')), [filter]);
  const tabs=[['All Bookings',2],['Upcoming',1],['Completed',1]];
  return <Layout>
    <main className="bg-[#f4fafb]">
      <section className="relative min-h-[260px] overflow-hidden">
        <img src="/assets/images/ferryhero.png" alt="Ferry sailing across the coast" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#063b4c]/90 via-[#063b4c]/55 to-transparent"/>
        <div className="container-page relative z-10 flex min-h-[260px] items-center">
          <div className="max-w-xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-teal-100">My bookings</p>
            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Your journeys,<br/><span className="text-teal-100">all in one place</span></h1>
            <p className="mt-3 text-base text-white/80 sm:text-lg">Manage your upcoming trips and past journeys with ease.</p>
          </div>
        </div>
      </section>
      <section className="container-page py-7 sm:py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">{tabs.map(([label,count],index)=><button type="button" key={label} onClick={()=>setFilter(label)} className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition ${filter===label?'border-ocean bg-ocean text-white':'border-slate-200 bg-white text-slate-600 hover:border-teal hover:text-teal'}`}><Ticket size={16}/>{label} ({count})</button>)}</div>
          <label className="relative"><span className="sr-only">Sort bookings</span><select value={sort} onChange={event=>setSort(event.target.value)} className="appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-4 pr-10 text-sm font-semibold text-slate-600 outline-none"><option>Recent first</option><option>Oldest first</option></select><ChevronDown size={16} className="pointer-events-none absolute right-3 top-3.5 text-slate-500"/></label>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">{visible.map(booking=><BookingCard booking={booking} key={booking.id}/>)}</div>
        {!visible.length&&<div className="mt-5 rounded-2xl border border-dashed bg-white p-10 text-center text-slate-500">No bookings found in this category.</div>}
        <section className="mt-6 overflow-hidden rounded-2xl border border-dashed border-teal/30 bg-[#effbfd]">
          <div className="flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-center gap-4"><span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-teal/10 text-teal"><Ship size={28}/></span><div><p className="text-xs font-bold uppercase tracking-widest text-teal">Planning another trip?</p><h2 className="mt-1 text-xl font-black text-ocean">Explore new destinations</h2><p className="mt-1 text-sm text-slate-500">Discover amazing ferry routes across India’s islands, harbours and coastal cities.</p></div></div>
            <button type="button" onClick={()=>nav('/schedule')} className="btn-primary shrink-0">Book a Ferry <ArrowRight size={16}/></button>
          </div>
        </section>
      </section>
    </main>
  </Layout>;
}
