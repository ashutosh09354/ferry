import React from 'react';
import {PageShell,BookingCard} from '../components/Common';
export default function Bookings(){return <PageShell kicker="Account" title="My bookings"><div className="mt-8 grid gap-5 md:grid-cols-2"><BookingCard status="Upcoming" route="Mumbai → Mandwa" date="12 Sep 2026" time="09:30 AM" id="FRY-928374"/><BookingCard status="Completed" route="Kochi → Fort Kochi" date="22 Aug 2026" time="04:00 PM" id="FRY-817263"/></div></PageShell>}
