import React from 'react';
import {PageShell,FerryRow} from '../components/Common';
import {ferries} from '../data/siteData';
export default function SchedulePage(){return <PageShell kicker="Live timetable" title="Ferry schedule"><div className="mt-8 rounded-2xl border bg-white p-5"><div className="grid gap-3 md:grid-cols-3"><select className="field"><option>Mumbai</option><option>Goa</option><option>Kochi</option></select><select className="field"><option>Mandwa</option><option>Divar Island</option><option>Fort Kochi</option></select><input type="date" className="field"/></div></div><div className="mt-7 space-y-4">{ferries.map(f=><FerryRow f={f} key={f.name}/>)}</div></PageShell>}
