import React from 'react';
import {PageShell,RouteCard} from '../components/Common';
import {routes} from '../data/siteData';
export default function RoutesPage(){return <PageShell kicker="Destinations" title="Explore ferry routes"><p className="mt-3 max-w-2xl text-slate-500">Discover ferry connections by state and city across India.</p><div className="mt-9 grid gap-6 md:grid-cols-3">{routes.map(r=><RouteCard key={r.id} route={r}/>)}</div></PageShell>}
