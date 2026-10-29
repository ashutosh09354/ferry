import React from 'react';
import {PolicyPage} from '../components/PolicyPage';

const terms = `1. Terms & Conditions
Effective Date: 29-10-2026
Contact Email:
1. Introduction
Welcome to our ferry booking platform. These Terms & Conditions govern your access to
and use of our website and booking services.
Our platform enables users to discover ferry services, view available journeys, and make
bookings with independent ferry operators. Unless expressly stated otherwise, we act as a
booking intermediary and do not own or operate the ferries listed on our platform.
By accessing our website or making a booking, you agree to these Terms & Conditions.
2. Our Role as a Booking Platform
● We provide an online platform for discovering and booking ferry services.
● Ferry transportation is provided by independent ferry operators.
● Ferry operators are responsible for operating their vessels, determining schedules,
managing boarding, and complying with applicable safety requirements.
● Availability, fares, routes, departure times, and onboard facilities may vary by
operator.
● We will make reasonable efforts to display accurate information received from
operators. However, changes or errors may occur.
Our role and responsibilities for bookings, payments, customer support, and refunds will
depend on the actual services we provide and applicable law.
3. Booking and Confirmation
● Users must provide accurate passenger and contact information.
● A booking request is subject to availability and confirmation.
● A payment receipt alone does not necessarily establish that a ferry booking is
confirmed.
● Customers should check their booking confirmation, journey details, and passenger
information carefully.
● If a booking cannot be confirmed after payment, the customer should contact support
for assistance with the applicable refund process.
4. Fares and Payments
● Fares are displayed before the customer completes the booking, subject to
applicable taxes and disclosed charges.
● Customers must pay through the payment methods made available on the website.
● A booking may fail or remain pending because of network, payment-provider, or
operator-system issues.
● Customers should not make repeated payments without checking the transaction and
booking status.
● Any additional charges must be disclosed before the customer commits to the
booking.
5. Cancellation and Refunds
Cancellations and refunds are governed by the applicable ferry operator's cancellation and
refund rules, together with any platform-specific conditions disclosed at booking.
Customers should review the cancellation conditions before completing a booking. Refund
eligibility, cancellation charges, and processing timelines may differ between operators and
tickets.
Where our platform handles the refund process, we will coordinate with the relevant operator
and payment provider as necessary. Refunds will be processed in accordance with the
applicable policy and law.
Please refer to our Cancellation & Refund Policy for more information.
6. Passenger Responsibilities
Customers must:
● Provide correct passenger details and valid identification where required.
● Arrive at the designated boarding point within the time stated in the booking
confirmation.
● Follow the operator's boarding, baggage, safety, and conduct requirements.
● Comply with applicable laws and lawful instructions from ferry personnel.
● Avoid carrying prohibited or dangerous items.
● Keep their booking confirmation available during the journey.
Failure to follow these requirements may result in denied boarding or other action by the
operator, subject to applicable law and the operator's terms.
7. Changes and Disruptions
Ferry schedules may change because of weather, sea conditions, technical problems, safety
concerns, regulatory directions, or operational reasons.
The relevant operator is responsible for operational decisions concerning the ferry service.
We will make reasonable efforts to communicate material changes when we receive the
relevant information.
Alternative arrangements, rescheduling, and refunds will be subject to the operator's
applicable rules and applicable law.
8. Prohibited Use
Users must not:
● Provide false or misleading information.
● Use the platform for unlawful activities.
● Attempt to interfere with website security or availability.
● Misuse another person's account or payment information.
● Use automated methods to access or misuse the platform without authorization.
● Submit fraudulent booking or refund claims.
9. Website Availability and Intellectual Property
We aim to keep the platform available and functional but cannot guarantee uninterrupted
access. Maintenance, technical failures, or third-party service interruptions may affect
availability.
Website content, branding, text, and software are protected by applicable intellectual
property laws. Users may not reproduce or commercially exploit protected material without
authorization.
10. Limitation of Liability
Nothing in these Terms excludes or limits any liability that cannot lawfully be excluded or
limited.
To the extent permitted by applicable law, we are not responsible for the independent
operator's vessel operations, onboard services, or operational decisions. However, we
remain responsible for our own contractual obligations, platform services, and any liability
imposed on us by law.
11. Privacy
Personal information is handled according to our Privacy Policy. Users should review that
policy to understand how their information may be collected, used, and shared to facilitate
bookings.
12. Changes to These Terms
We may update these Terms from time to time. Updated terms will be published on this page
with a revised effective date. Changes will apply as permitted by applicable law.
13. Governing Law and Contact
These Terms are governed by the applicable laws of India, subject to applicable consumer
rights and jurisdictional requirements.`;

export default function Terms(){
  return <PolicyPage title="Terms & Conditions"><div className="whitespace-pre-wrap px-7 py-9 font-sans text-[15px] leading-8 text-slate-700 sm:px-12 sm:py-12 sm:text-base sm:leading-8">{terms}</div></PolicyPage>;
}
