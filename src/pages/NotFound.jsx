import React from 'react';
import {useNavigate} from 'react-router-dom';
import {PageShell} from '../components/Common';
export default function NotFound(){const nav=useNavigate();return <PageShell kicker="404" title="Page not found"><p className="mt-3 text-slate-500">The page you're looking for doesn't exist.</p><button onClick={()=>nav('/')} className="btn-primary mt-6">Back to Ferry</button></PageShell>}
