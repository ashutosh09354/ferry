import React from 'react';
import {PolicyPage} from '../components/PolicyPage';

const grievancePolicy = `8. Grievance Redressal Policy
Effective Date: [29-10-2026]
1. Purpose
We aim to provide a clear process for customers to raise complaints about bookings,
payments, cancellations, refunds, website functionality, and privacy concerns.
2. How to Submit a Complaint
Customers may contact us through the following channels:
● Email:
● Please include the booking reference, registered contact details, a description of the
issue, and relevant transaction details where applicable.
Customers should avoid sending passwords, OTPs, PINs, or complete payment-card details.
3. Complaint Handling
After receiving a complaint, we will:
1. Review the information provided.
2. Request additional details if reasonably necessary.
3. Investigate the issue within our control.
4. Contact the relevant ferry operator or payment provider when necessary.
5. Communicate the outcome or next steps to the customer.
Issues involving an independent operator may require additional time because information or
approval may be needed from that operator.
4. Refund and Payment Complaints
For payment failures, duplicate deductions, or refund disputes, customers should provide the
relevant transaction reference and booking information.
We will check the status and coordinate with the appropriate payment provider or operator.
Any refund will be handled under the applicable booking terms and law.
5. Escalation
If a customer is not satisfied with the initial response, the complaint may be escalated to the
designated grievance contact below.
● Email:
Complaints will be handled within the timelines prescribed by applicable law. Any additional
service-level commitment should be published only after it has been approved and
operationally implemented.
6. Privacy Complaints
Requests concerning personal information, data correction, deletion, or consent withdrawal
should be sent to the designated privacy or grievance contact.
Such requests will be handled in accordance with applicable data protection requirements.
7. External Remedies
This policy does not prevent customers from approaching an appropriate consumer dispute
redressal authority, regulator, or other competent body where permitted by law.
8. Policy Updates
We may update this policy when our complaint-handling process or applicable legal
requirements change.`;

export default function Grievance(){
  return <PolicyPage title="Grievance Redressal Policy"><div className="whitespace-pre-wrap px-7 py-9 font-sans text-[15px] leading-8 text-slate-700 sm:px-12 sm:py-12 sm:text-base sm:leading-8">{grievancePolicy}</div></PolicyPage>;
}
