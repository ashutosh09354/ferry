import React from 'react';
import {useNavigate} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import {PageShell} from '../components/Common';
export default function Login(){const nav=useNavigate();return <PageShell kicker="Welcome back" title="Login to Ferry"><div className="mx-auto mt-8 max-w-md rounded-2xl border bg-white p-6"><input className="field" placeholder="Email address"/><input className="field mt-3" type="password" placeholder="Password"/><button onClick={()=>nav('/bookings')} className="btn-primary mt-5 w-full">Login <ArrowRight size={16}/></button><button onClick={()=>nav('/register')} className="mt-4 w-full text-sm font-semibold text-teal">Create a new account</button></div></PageShell>}
