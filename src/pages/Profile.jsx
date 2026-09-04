import React from 'react';
import {PageShell} from '../components/Common';
export default function Profile(){return <PageShell kicker="Account" title="My profile"><div className="mt-8 max-w-3xl rounded-2xl border bg-white p-6"><div className="grid gap-4 sm:grid-cols-2"><input className="field" value="Customer Name" readOnly/><input className="field" value="customer@example.com" readOnly/><input className="field" value="+91 98765 43210" readOnly/></div><button className="btn-primary mt-6">Save changes</button></div></PageShell>}
