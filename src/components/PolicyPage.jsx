import React from 'react';
import {ArrowLeft,CheckCircle2,FileText,LockKeyhole,ShieldCheck,Sparkles} from 'lucide-react';
import {useNavigate} from 'react-router-dom';
import {Layout} from './Layout';

export function PolicyPage({title,children}){
  const nav=useNavigate();
  return <Layout><main className="pb-16">
    <section className="relative overflow-hidden bg-ocean text-white">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]"/>
      <div className="absolute -right-14 -top-20 h-64 w-64 rounded-full bg-teal/30 blur-3xl"/><div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl"/>
      <div className="container-page relative py-14 sm:py-20">
        <div className="relative max-w-3xl">
          <button type="button" onClick={()=>nav('/privacy-center')} className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white"><ArrowLeft size={16}/>Privacy Center</button>
          <div className="mt-8 flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10 text-teal-100 shadow-lg"><ShieldCheck size={23}/></span><span className="rounded-full border border-teal-100/20 bg-teal-100/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-teal-100">Legal document</span></div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">Please review this policy carefully. You can return to the Privacy Center to explore all policy documents.</p>
        </div>
      </div>
    </section>
    <section className="container-page py-10 sm:py-16">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_300px]">
        <article className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_-24px_rgba(8,47,61,.35)]">
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-teal via-sky-400 to-ocean"/>
          <div className="border-b border-slate-100 bg-gradient-to-r from-[#f4fbfb] to-white px-7 py-6 sm:px-12 sm:py-8"><div className="flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-teal/10 text-teal"><FileText size={19}/></span><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Policy document</p><p className="mt-1 font-bold text-ocean">{title}</p></div></div><span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-500 shadow-sm ring-1 ring-slate-100">Please read carefully</span></div></div>
          {children}
        </article>
        <aside className="h-fit space-y-4 xl:sticky xl:top-28">
          <div className="rounded-3xl border border-teal/15 bg-[#eefafa] p-6 shadow-sm"><span className="grid h-10 w-10 place-items-center rounded-xl bg-teal text-white"><FileText size={19}/></span>
            <h2 className="mt-4 font-black text-ocean">Need another policy?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">All our legal, privacy, travel, and booking documents are available in one place.</p>
            <button type="button" onClick={()=>nav('/privacy-center')} className="btn-primary mt-5 w-full">Open Privacy Center</button>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex items-center gap-2 text-ocean"><Sparkles size={17} className="text-teal"/><h2 className="font-bold">Helpful reminder</h2></div><div className="mt-4 space-y-3 text-sm leading-6 text-slate-600"><p className="flex gap-2"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-teal"/>Review policy updates before making a booking.</p><p className="flex gap-2"><LockKeyhole size={17} className="mt-0.5 shrink-0 text-teal"/>Never share passwords, PINs, or OTPs with support.</p></div></div>
        </aside>
      </div>
    </section>
  </main></Layout>;
}
