import React from 'react';
import {PolicyPage} from '../components/PolicyPage';

const disclaimerPolicy = `6. Disclaimer Policy
Effective Date: 29-20-2026
1. Independent Ferry Operators
Our website provides a booking interface for services offered by independent ferry
operators. Unless expressly stated otherwise, we do not own or operate the listed vessels.
The operator is responsible for the actual ferry service, including vessel operation, crew,
departure decisions, and onboard facilities.
This statement does not exclude any responsibility that our platform may have under
applicable law.
2. Information Accuracy
We make reasonable efforts to display accurate fares, schedules, routes, availability, and
service information supplied by operators.
However, information may change because of operational updates, technical issues, or
circumstances beyond our control. Customers should review booking confirmations and
relevant operator communications.
3. Delays, Cancellations, and Weather
Ferry operations may be affected by weather, sea conditions, mechanical issues, safety
concerns, government directions, or other disruptions.
We do not guarantee that every ferry will depart or arrive at the scheduled time. Refunds and
alternative arrangements will be determined under the applicable operator policy and
applicable law.
4. Third-Party Services
Payments, communications, and other functions may depend on third-party providers. Their
services may be subject to separate terms and availability.
We will address issues relating to our own services in accordance with our obligations and
applicable law.
5. External Links
Links to external websites are provided for convenience. We are not responsible for the
content or privacy practices of independent third-party websites, subject to applicable law.
6. Limitation
Nothing in this Disclaimer excludes or limits statutory consumer rights or liability that cannot
lawfully be excluded.
7. Contact
Email:`


export default function Disclaimer(){
  return <PolicyPage title="Disclaimer Policy"><div className="whitespace-pre-wrap px-7 py-9 font-sans text-[15px] leading-8 text-slate-700 sm:px-12 sm:py-12 sm:text-base sm:leading-8">{disclaimerPolicy}</div></PolicyPage>;
}
