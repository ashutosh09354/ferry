import React, {useState} from 'react';
import {useLocation,useNavigate} from 'react-router-dom';
import {Ship,ArrowRight,Menu,X} from 'lucide-react';

export function Layout({children}){return <div className="flex min-h-screen flex-col"><Header/><div className="flex-1">{children}</div><Footer/></div>}
export function Header(){
  const [open,setOpen]=useState(false); const nav=useNavigate(); const loc=useLocation();
  const go=(p)=>{setOpen(false);nav(p)};
  return <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
    <div className="container-page flex min-h-20 items-center justify-between gap-5">
      <button onClick={()=>go('/')} className="flex shrink-0 items-center gap-2.5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-ocean text-white"><Ship size={22}/></span><span className="text-2xl font-black tracking-tight text-ocean">Ferry</span></button>
      <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
        {[['Routes','/routes'],['Schedule','/schedule'],['Experiences','/experiences'],['Help','/help']].map(([label,path])=><button key={path} onClick={()=>go(path)} className={loc.pathname===path?'text-teal':''}>{label}</button>)}
      </nav>
      <div className="hidden items-center gap-2 lg:flex"><button onClick={()=>go('/bookings')} className="btn-secondary !border-0">My Bookings</button><button onClick={()=>go('/login')} className="btn-secondary">Login</button><button onClick={()=>go('/search')} className="btn-primary">Book a Ferry <ArrowRight size={16}/></button></div>
      <button onClick={()=>setOpen(!open)} className="rounded-lg p-2 lg:hidden" aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    </div>
    {open&&<div className="border-t bg-white p-5 lg:hidden"><div className="flex flex-col gap-2 text-sm font-semibold">{[['Routes','/routes'],['Schedule','/schedule'],['Experiences','/experiences'],['Help','/help']].map(([label,path])=><button key={path} className="p-3 text-left" onClick={()=>go(path)}>{label}</button>)}<button className="btn-secondary mt-2" onClick={()=>go('/bookings')}>My Bookings</button><button className="btn-secondary" onClick={()=>go('/login')}>Login</button><button className="btn-primary" onClick={()=>go('/search')}>Book a Ferry</button></div></div>}
  </header>
}
export function Footer(){const nav=useNavigate(); const groups=[['Explore',[['Routes','/routes'],['Schedule','/schedule'],['Experiences','/experiences'],['Book Tickets','/search']]],['Account',[['My Bookings','/bookings'],['Profile','/profile'],['Settings','/settings'],['Login','/login']]],['Support',[['Help Center','/help'],['Cancellation Policy','/help'],['Refund Policy','/help'],['Terms & Conditions','/help']]]]; return <footer className="bg-[#062F3D] py-12 text-white"><div className="container-page grid gap-10 sm:grid-cols-2 lg:grid-cols-4"><div><button onClick={()=>nav('/')} className="flex items-center gap-2 text-2xl font-black"><span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10"><Ship size={19}/></span>Ferry</button><p className="mt-4 max-w-xs text-sm leading-6 text-white/55">Your journey starts beyond the shore.</p></div>{groups.map(([h,items])=><div key={h}><h3 className="font-bold">{h}</h3><div className="mt-4 space-y-3 text-sm text-white/60">{items.map(([x,p])=><button className="block hover:text-white" onClick={()=>nav(p)} key={x}>{x}</button>)}</div></div>)}</div><div className="container-page mt-10 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row"><span>© 2026 Ferry. All rights reserved.</span><span>Privacy · Terms · Refund Policy</span></div></footer>}
