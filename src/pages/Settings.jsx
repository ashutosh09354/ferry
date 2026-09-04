import React from 'react';
import {PageShell} from '../components/Common';
export default function Settings(){return <PageShell kicker="Account" title="Settings"><div className="mt-8 max-w-3xl space-y-3">{['Email notifications','Booking reminders','Promotional offers'].map((x,i)=><label className="flex items-center justify-between rounded-2xl border bg-white p-5" key={x}><span className="font-semibold">{x}</span><input type="checkbox" defaultChecked={i<2}/></label>)}</div></PageShell>}
