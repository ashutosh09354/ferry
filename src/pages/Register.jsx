import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ArrowRight,Clock3,Eye,EyeOff,LockKeyhole,Mail,MapPin,Phone,ShieldCheck,UserRound,Users,Waves} from 'lucide-react';

export default function Register(){
  const nav=useNavigate();
  const [showPassword,setShowPassword]=useState(false);
  const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  const [passwordError,setPasswordError]=useState('');

  const submit=event=>{
    event.preventDefault();
    const form=event.currentTarget;
    const data=new FormData(form);
    if(data.get('password')!==data.get('confirmPassword')){
      setPasswordError('Passwords do not match.');
      return;
    }
    setPasswordError('');
    const account={
      name:String(data.get('name')).trim(),
      email:String(data.get('email')).trim().toLowerCase(),
      mobile:String(data.get('mobile')).trim(),
      password:String(data.get('password'))
    };
    localStorage.setItem('ferryUser',JSON.stringify(account));
    localStorage.setItem('ferryPassengerName',account.name);
    nav('/bookings');
  };

  return <main className="relative grid h-screen max-h-screen overflow-hidden lg:grid-cols-2">
    <section className="relative hidden h-full min-h-0 overflow-hidden lg:block">
      <img src="/assets/images/loginimage.png" alt="Ferry sailing across the coast" className="absolute inset-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[#063b4c]/75 via-[#063b4c]/10 to-[#063b4c]/10"/>
      <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white xl:p-16">
        <div className="space-y-8">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/85 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{fontFamily:"'Plus Jakarta Sans', sans-serif"}}>Explore India by water</p>
          <h1 className="mt-5 max-w-xl text-5xl font-black leading-[1.02] tracking-tight text-white drop-shadow-md xl:text-6xl" style={{fontFamily:"'Plus Jakarta Sans', sans-serif"}}>
            <span className="inline-block whitespace-nowrap">More than a journey,</span>
            <span className="inline-block whitespace-nowrap text-white/90">a better way to travel.</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg font-medium leading-8 text-slate-700">Book comfortable ferry journeys across India's most beautiful coastal destinations — safe, simple and hassle-free.</p>
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-800">{[[ShieldCheck,'Safe & Secure','Verified operators'],[Clock3,'On-Time Services','Reliable schedules'],[Users,'Comfortable Travel','For everyone']].map(([Icon,title,detail])=><div className="flex items-center gap-2.5" key={title}><span className="grid h-11 w-11 place-items-center rounded-full bg-white/20 text-[#0F8F87] backdrop-blur"><Icon size={21}/></span><span><b className="block">{title}</b><small className="text-slate-600">{detail}</small></span></div>)}</div>
        </div>
        <div className="space-y-6">
          <p className="font-['cursive'] text-3xl italic leading-tight text-white" style={{transform:'rotate(-4deg)'}}>Discover<br/>More Horizons</p>
          <span className="mt-1 block h-px w-32 -rotate-2 bg-white/60"/>
          <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/85"><MapPin size={16}/><span>Sail Today, A Brighter Tomorrow</span></div>
        </div>
      </div>
    </section>
    <section className="relative flex h-full min-h-0 items-center justify-center overflow-hidden bg-[#f2fbfc] px-5 py-5 sm:px-8 sm:py-7 lg:px-12 lg:py-10">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 overflow-hidden opacity-70">
        <svg viewBox="0 0 600 200" className="absolute -bottom-6 right-0 h-full w-full text-teal/20" preserveAspectRatio="none"><path fill="currentColor" d="M0,120 C150,180 300,60 450,110 C520,132 560,150 600,140 L600,200 L0,200 Z"/></svg>
      </div>
      <div className="w-full max-w-lg rounded-3xl border border-white bg-white/90 p-6 text-ocean shadow-xl sm:p-8">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-ocean">Get started</p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-ocean">Create your account</h2>
        <p className="mt-3 text-ocean/70">Join Ferry and start planning your next journey.</p>
        <form onSubmit={submit} className="mt-6">
          <label className="block text-sm font-bold text-ocean">Full name<div className="relative mt-2"><UserRound size={18} className="absolute left-4 top-3.5 text-teal"/><input className="field pl-11" name="name" placeholder="Enter your full name" aria-label="Full name" required/></div></label>
          <label className="mt-4 block text-sm font-bold text-ocean">Email address<div className="relative mt-2"><Mail size={18} className="absolute left-4 top-3.5 text-teal"/><input className="field pl-11" name="email" type="email" placeholder="Enter your email" aria-label="Email address" required/></div></label>
          <label className="mt-4 block text-sm font-bold text-ocean">Mobile number<div className="relative mt-2"><Phone size={18} className="absolute left-4 top-3.5 text-teal"/><input className="field pl-11" name="mobile" type="tel" inputMode="numeric" pattern="[0-9+() -]{7,}" placeholder="Enter your mobile number" aria-label="Mobile number" required/></div></label>
          <label className="mt-4 block text-sm font-bold text-ocean">Password<div className="relative mt-2"><LockKeyhole size={18} className="absolute left-4 top-3.5 text-teal"/><input className="field pl-11 pr-11" name="password" type={showPassword?'text':'password'} placeholder="Create a password" aria-label="Password" minLength="8" required/><button type="button" aria-label={showPassword?'Hide password':'Show password'} onClick={()=>setShowPassword(!showPassword)} className="absolute right-3 top-3 text-teal">{showPassword?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></label>
          <label className="mt-4 block text-sm font-bold text-ocean">Confirm password<div className="relative mt-2"><LockKeyhole size={18} className="absolute left-4 top-3.5 text-teal"/><input className="field pl-11 pr-11" name="confirmPassword" type={showConfirmPassword?'text':'password'} placeholder="Confirm your password" aria-label="Confirm password" minLength="8" required/><button type="button" aria-label={showConfirmPassword?'Hide password':'Show password'} onClick={()=>setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-3 text-teal">{showConfirmPassword?<EyeOff size={18}/>:<Eye size={18}/>}</button></div></label>
          {passwordError&&<p className="mt-2 text-sm font-medium text-red-600">{passwordError}</p>}
          <button type="submit" className="btn-primary mt-5 w-full py-3.5">Create account <ArrowRight size={17}/></button>
        </form>
        <p className="mt-5 text-center text-sm text-ocean/70">Already have an account? <button type="button" onClick={()=>nav('/login')} className="font-bold text-teal">Login <ArrowRight size={14} className="inline"/></button></p>
      </div>
      <p className="pointer-events-none absolute bottom-8 right-8 hidden font-['cursive'] text-xl italic leading-tight text-teal/80 sm:block" style={{transform:'rotate(-3deg)'}}>Life is Better<br/>by the Water</p>
    </section>
    <div className="absolute right-6 top-6 z-20 hidden items-start gap-2 text-right text-sm font-semibold leading-tight text-teal lg:flex"><Waves size={20} className="mt-0.5"/><span>Smooth Journeys<br/>Happier Stories</span></div>
  </main>;
}
