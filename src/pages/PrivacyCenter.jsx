import React from 'react';
import {ArrowRight,BookOpen,CalendarClock,Cookie,FileText,HandCoins,Scale,ShieldCheck,Ship} from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import {PageShell} from '../components/Common';

const policies = [
  {title:'Terms & Conditions',description:'The terms that govern access to our website and booking services.',path:'/terms',Icon:FileText},
  {title:'Privacy Policy',description:'How personal information may be collected, used, stored, and shared.',path:'/privacy',Icon:ShieldCheck},
  {title:'Cancellation & Refund Policy',description:'Information about cancellations, refunds, payment failures, and no-shows.',path:'/cancellation-refund',Icon:HandCoins},
  {title:'Booking & Payment Policy',description:'Booking confirmations, fares, payments, and fraud prevention information.',path:'/booking-payment',Icon:BookOpen},
  {title:'Travel & Boarding Policy',description:'Important travel, identification, baggage, safety, and boarding information.',path:'/travel-boarding',Icon:Ship},
  {title:'Disclaimer Policy',description:'Information about ferry operators, service availability, and third-party services.',path:'/disclaimer',Icon:Scale},
  {title:'Cookie Policy',description:'How cookies and similar technologies may be used on this website.',path:'/cookie',Icon:Cookie},
  {title:'Grievance Redressal Policy',description:'How to submit and escalate complaints about bookings, payments, and services.',path:'/grievance',Icon:CalendarClock}
];

export default function PrivacyCenter(){
  const nav=useNavigate();
  return <PageShell kicker="Legal & privacy" title="Privacy Center">
    <section className="mt-8 rounded-3xl bg-ocean p-7 text-white sm:p-10">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-100">Your information, your journey</p>
      <p className="mt-4 max-w-2xl text-base leading-7 text-white/80">Find our privacy, booking, travel, cancellation, and customer-support policies in one place.</p>
    </section>
    <section className="mt-10">
      <p className="text-sm font-bold uppercase tracking-widest text-teal">Policies</p>
      <h2 className="mt-2 text-2xl font-black text-ocean sm:text-3xl">Explore our policies</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {policies.map(({title,description,path,Icon})=><button type="button" onClick={()=>nav(path)} key={path} className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-teal hover:shadow-md">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white"><Icon size={21}/></span>
          <span className="min-w-0 flex-1"><span className="block font-bold text-ocean">{title}</span><span className="mt-1.5 block text-sm leading-6 text-slate-500">{description}</span></span>
          <ArrowRight className="mt-1 shrink-0 text-teal" size={18}/>
        </button>)}
      </div>
    </section>
  </PageShell>;
}
