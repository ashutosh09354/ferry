import React,{useState} from 'react';
import {ArrowRight,BookOpen,CalendarCheck,ChevronDown,CreditCard,MessageCircle,Ticket,X} from 'lucide-react';
import {PageShell} from '../components/Common';

const topics=[
  [BookOpen,'Booking help','Search routes, choose a sailing and complete your ferry booking.'],
  [CreditCard,'Payments','Learn about payment methods, confirmations and receipts.'],
  [Ticket,'Tickets','Find your digital ticket, QR code and boarding information.'],
  [CalendarCheck,'Changes & refunds','Understand cancellations, rescheduling and refund rules.']
];

const faqs=[
  ['How do I book a ferry?','Choose your state, boarding city, destination, date and passengers in the booking form. Select a sailing, enter passenger details and complete payment to receive your digital ticket.'],
  ['Can I cancel or change my ticket?','Cancellation and change rules depend on the route and ferry operator. Contact support as soon as possible for eligible changes or refunds.'],
  ['Do I need a printed ticket?','No. Show your digital ticket and QR code on your phone at boarding, along with a valid photo ID.'],
  ['What should I carry for boarding?','Carry your ticket, booking ID and a valid government-issued photo ID matching the passenger name.']
];

export default function Help(){
  const [isOpen,setIsOpen]=useState(false);
  const [submitted,setSubmitted]=useState(false);
  const submitQuery=event=>{event.preventDefault();setSubmitted(true)};
  return <PageShell kicker="Support center" title="How can we help?">
    <section className="relative mt-8 overflow-hidden rounded-3xl min-h-[280px]">
      <img src="/assets/images/helpbanner.png" alt="Ferry support and travel assistance" className="absolute inset-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-r from-[#063b4c]/90 via-[#063b4c]/55 to-transparent"/>
      <div className="relative z-10 flex min-h-[280px] max-w-xl flex-col justify-center p-7 text-white sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-100">Ferry support</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Your journey, supported.</h2>
        <p className="mt-4 max-w-md text-sm leading-6 text-white/80 sm:text-base">Find quick answers about booking, tickets, payments and everything you need before you sail.</p>
        <button type="button" onClick={()=>{setIsOpen(true);setSubmitted(false)}} className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-ocean">Contact support <ArrowRight size={16}/></button>
      </div>
    </section>
    <section className="mt-10">
      <div className="flex items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-widest text-teal">Browse help</p><h2 className="mt-2 text-2xl font-black text-ocean sm:text-3xl">What do you need help with?</h2></div><MessageCircle className="hidden text-teal sm:block" size={30}/></div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{topics.map(([Icon,title,description])=><button type="button" className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-teal hover:shadow-md" key={title}><span className="grid h-11 w-11 place-items-center rounded-xl bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white"><Icon size={21}/></span><h3 className="mt-4 font-bold text-ocean">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{description}</p></button>)}</div>
    </section>
    <section className="mt-12 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
      <div><p className="text-sm font-bold uppercase tracking-widest text-teal">Frequently asked</p><h2 className="mt-2 text-3xl font-black tracking-tight text-ocean">Answers before you sail.</h2><p className="mt-4 max-w-md leading-7 text-slate-500">Everything you need to make your ferry journey simple, comfortable and stress-free.</p><button type="button" onClick={()=>{setIsOpen(true);setSubmitted(false)}} className="btn-primary mt-6">Talk to our team <ArrowRight size={16}/></button></div>
      <div className="space-y-3">{faqs.map(([question,answer])=><details className="group rounded-2xl border border-slate-200 bg-white p-5" key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-ocean">{question}<ChevronDown size={18} className="shrink-0 text-teal transition group-open:rotate-180"/></summary><p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">{answer}</p></details>)}</div>
    </section>
    {isOpen&&<div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4" role="presentation" onMouseDown={event=>event.target===event.currentTarget&&setIsOpen(false)}><div role="dialog" aria-modal="true" aria-labelledby="support-title" className="w-full max-w-lg rounded-2xl bg-white p-6 text-slate-900 shadow-2xl"><div className="flex items-center justify-between"><h2 id="support-title" className="text-2xl font-bold">Contact support</h2><button type="button" aria-label="Close support form" onClick={()=>setIsOpen(false)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"><X size={20}/></button></div>{submitted?<div className="py-8 text-center"><p className="text-lg font-bold text-teal">Query submitted successfully.</p><p className="mt-2 text-sm text-slate-500">Our support team will get back to you shortly.</p><button type="button" onClick={()=>setIsOpen(false)} className="btn-primary mt-6">Close</button></div>:<form onSubmit={submitQuery} className="mt-6 space-y-4"><input className="field" name="name" placeholder="Full name" aria-label="Full name" required/><input className="field" name="email" type="email" placeholder="Email address" aria-label="Email address" required/><input className="field" name="bookingId" placeholder="Booking ID (optional)" aria-label="Booking ID (optional)"/><textarea className="field min-h-32 resize-y" name="query" placeholder="How can we help?" aria-label="Your query" required></textarea><button type="submit" className="btn-primary w-full">Submit query</button></form>}</div></div>}
  </PageShell>;
}
