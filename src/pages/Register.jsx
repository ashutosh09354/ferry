import React from 'react';
import {useNavigate} from 'react-router-dom';
import {PageShell} from '../components/Common';
export default function Register(){const nav=useNavigate();return <PageShell kicker="Get started" title="Create your Ferry account"><div className="mx-auto mt-8 max-w-md rounded-2xl border bg-white p-6"><input className="field" placeholder="Full name"/><input className="field mt-3" placeholder="Email address"/><input className="field mt-3" placeholder="Mobile number"/><input className="field mt-3" type="password" placeholder="Create password"/><button onClick={()=>nav('/bookings')} className="btn-primary mt-5 w-full">Create account</button></div></PageShell>}
