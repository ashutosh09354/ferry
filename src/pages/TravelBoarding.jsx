import React from 'react';
import {PolicyPage} from '../components/PolicyPage';

const travelBoardingPolicy = `5. Travel & Boarding Policy
Effective Date: [29-10-2026]
1. Before Your Journey
Passengers should carefully review their booking confirmation and check the departure
location, reporting time, travel date, and any operator instructions.
Customers should plan to arrive with sufficient time for verification and boarding.
2. Identification Requirements
Passengers must carry valid identification and any permits or documents required by the
relevant operator or authorities.
Additional documentation may be required for children, certain routes, or restricted
destinations.
3. Boarding
Boarding is controlled by the ferry operator and its authorized personnel.
Passengers must follow the operator's boarding instructions and comply with safety
procedures. The operator may refuse boarding where permitted by law and its applicable
conditions, including for safety reasons or failure to meet required travel conditions.
4. Baggage
Baggage allowances, size restrictions, additional charges, and prohibited items depend on
the operator and route.
Passengers should confirm the applicable rules before departure. Dangerous, unlawful, or
prohibited items must not be carried.
5. Passenger Conduct and Safety
Passengers must:
● Follow instructions issued by authorized crew members.
● Use designated boarding and passenger areas.
● Avoid interfering with vessel equipment or safety systems.
● Refrain from conduct that endangers others.
● Comply with applicable safety and emergency procedures.
6. Delays and Changes
Passengers should monitor communications from the operator and our platform where
available.
Operational decisions concerning vessel departure, route changes, and safety are made by
the operator and relevant authorities.
7. Missed Ferry
Passengers who miss the scheduled departure should contact the operator or platform
support for assistance. Refunds or rescheduling are subject to the applicable cancellation
and no-show rules.
8. Accessibility and Special Assistance
Passengers who require special assistance should contact the operator before travel to
confirm the facilities available for the relevant route and vessel.
9. Contact
For booking assistance:
Email:`;

export default function TravelBoarding(){
  return <PolicyPage title="Travel & Boarding Policy"><div className="whitespace-pre-wrap px-7 py-9 font-sans text-[15px] leading-8 text-slate-700 sm:px-12 sm:py-12 sm:text-base sm:leading-8">{travelBoardingPolicy}</div></PolicyPage>;
}
