import React from 'react';
import {PolicyPage} from '../components/PolicyPage';

const privacyPolicy = `2. Privacy Policy
Effective Date: [20-10-2026]
1. Introduction
This Privacy Policy explains how our ferry booking platform collects, uses, stores, and
shares personal information when you access our website or make a booking.
We aim to handle personal information responsibly and in accordance with applicable Indian
data protection and privacy laws.
2. Information We May Collect
Depending on the booking and services used, we may collect:
Personal information
● Passenger name
● Mobile number
● Email address
● Age or other passenger details required by an operator
Booking information
● Departure and destination
● Travel date and time
● Number of passengers
● Booking reference and ticket details
● Cancellation and refund requests
Payment information
● Transaction reference
● Payment status
● Payment method and related transaction details
Payments may be processed by third-party payment providers. We do not intend to store
complete card numbers, card security codes, or other sensitive payment credentials on our
own systems unless lawfully required and appropriately protected.
Technical information
● IP address
● Browser and device information
● Website usage and diagnostic logs
● Cookies and similar technologies, where used
We collect only the information reasonably needed for the relevant purposes.
3. How We Use Information
We may use personal information to:
● Process and manage bookings.
● Send booking confirmations, tickets, and journey updates.
● Communicate cancellations, rescheduling, and refund information.
● Share necessary passenger and booking details with the relevant ferry operator.
● Facilitate payment processing and transaction reconciliation.
● Respond to support requests and complaints.
● Detect fraud, abuse, and unauthorized activity.
● Maintain website security and improve our services.
● Meet legal, accounting, and regulatory obligations.
● Send promotional communications where permitted and subject to applicable
consent requirements.
4. Sharing of Information
We may share relevant information with:
● Ferry operators to confirm and fulfil bookings.
● Payment gateways and payment service providers to process transactions.
● Technology, hosting, communication, and customer support providers.
● Professional advisers and service providers where necessary.
● Government authorities or law enforcement where legally required.
● Other parties where you have provided valid consent or sharing is otherwise
permitted by law.
We do not sell personal information to third parties as a general business practice.
5. Data Retention
We retain information for as long as reasonably necessary to fulfil bookings, provide support,
manage disputes, maintain records, and comply with applicable legal requirements.
When information is no longer required, it will be deleted, anonymized, or securely disposed
of where appropriate, subject to legal retention obligations.
6. Security
We use reasonable technical and organizational safeguards designed to protect information
from unauthorized access, misuse, loss, alteration, or disclosure.
No website or electronic transmission can be guaranteed completely secure. Users should
protect their devices, account credentials, and booking information.
7. Cookies and Analytics
Our website may use cookies, analytics tools, or similar technologies to support website
functionality, understand usage, and improve user experience.
Users may be able to manage cookies through their browser settings. Certain website
features may not function properly if necessary cookies are disabled.
Please refer to our Cookie Policy.
8. User Rights and Requests
Subject to applicable law, users may request access to, correction of, or deletion of personal
information, withdraw consent where applicable, or raise a privacy-related complaint.
We may need to verify the identity of the requester before acting on a request. Some
information may need to be retained where legally required.
9. Children's Information
Bookings involving children should be made by a parent, guardian, or other person legally
authorized to act for the child where required. We do not knowingly collect children's
personal information for unrelated purposes.
10. Third-Party Websites
Our website may contain links to third-party operator websites or services. Their privacy
practices are governed by their own policies. Customers should review those policies before
providing information directly to those services.
11. Changes to This Policy
We may update this Privacy Policy when our services, practices, or legal requirements
change. The updated version will be published with a revised effective date.
12. Privacy Contact
For privacy-related requests or complaints:
● Email:`;

export default function Privacy(){
  return <PolicyPage title="Privacy Policy"><div className="whitespace-pre-wrap px-7 py-9 font-sans text-[15px] leading-8 text-slate-700 sm:px-12 sm:py-12 sm:text-base sm:leading-8">{privacyPolicy}</div></PolicyPage>;
}
