import React from 'react';
import {PolicyPage} from '../components/PolicyPage';

const cancellationRefundPolicy = `3. Cancellation & Refund Policy
Effective Date: [29-10-2026]
1. Overview
Our platform facilitates ferry bookings offered by independent ferry operators. Cancellation
eligibility, cancellation charges, rescheduling, and refund conditions depend on the relevant
operator's policy and the terms disclosed when the booking is made.
Customers should review the applicable conditions before confirming a booking.
2. Customer-Initiated Cancellation
If a customer wants to cancel a booking:
1. Open the booking confirmation or contact our customer support team.
2. Provide the booking reference and registered contact details.
3. Submit the cancellation request before the applicable cancellation deadline.
4. Wait for confirmation that the cancellation has been recorded.
A cancellation request is not necessarily effective until it is accepted or processed according
to the applicable booking rules.
3. Refund Eligibility
Refund eligibility depends on the relevant ferry operator's rules and the circumstances of the
cancellation.
Depending on the applicable terms:
● A cancellation made within the permitted period may qualify for a full or partial refund.
● A cancellation made after the permitted deadline may incur charges or be
non-refundable.
● Booking fees or other disclosed charges may be refundable or non-refundable as
specified in the applicable terms and permitted by law.
● Certain special fares or promotional bookings may have additional restrictions.
The applicable policy shown during booking will govern, subject to applicable law.
4. Cancellation by a Ferry Operator
If an operator cancels a scheduled ferry service, the available options may include a refund,
rescheduling, or an alternative arrangement under the operator's rules and applicable law.
We will make reasonable efforts to communicate the cancellation and assist with the
applicable process when we receive the necessary information from the operator.
5. Weather and Safety Disruptions
Ferry services may be delayed, rescheduled, or cancelled because of severe weather, sea
conditions, technical issues, safety concerns, or directions from authorities.
Refunds and alternative arrangements will be handled under the relevant operator's policy
and applicable law. A disruption does not automatically mean that every charge is
refundable; eligibility must be assessed under the applicable terms.
6. Refund Process
Where a refund is approved:
● We will initiate or coordinate the refund process according to the applicable
arrangement.
● The refund will ordinarily be sent through the original payment method where
supported.
● The time required for the amount to appear in the customer's account may depend
on the payment provider and the customer's bank.
● If additional information is required, the customer may be contacted.
Any estimated processing time communicated for a specific booking should be treated as
applicable to that case, rather than a universal guarantee.
7. Failed or Duplicate Payments
If a payment is deducted but the booking is not confirmed, customers should contact support
with the transaction reference and available payment evidence.
We will check the booking and payment status and coordinate with the payment provider or
operator as required.
For duplicate payments, we will investigate the transactions and arrange the appropriate
correction or refund where justified.
8. No-Show and Late Arrival
If a passenger does not arrive on time or misses the ferry, refund or rescheduling eligibility
depends on the operator's applicable policy. Customers should check the required reporting
time in their booking confirmation.
9. How to Request Assistance
Please provide:
● Booking reference
● Passenger name
● Registered mobile number or email
● Travel date
● Reason for cancellation or refund request
● Payment transaction reference, if relevant
Support Email:
10. Policy Changes
The version of the cancellation policy applicable to a booking will be determined by the terms
disclosed when the booking was made, subject to applicable law. Later policy changes will
not be used to remove rights that have already accrued to customers.`;

export default function CancellationRefund(){
  return <PolicyPage title="Cancellation & Refund Policy"><div className="whitespace-pre-wrap px-7 py-9 font-sans text-[15px] leading-8 text-slate-700 sm:px-12 sm:py-12 sm:text-base sm:leading-8">{cancellationRefundPolicy}</div></PolicyPage>;
}
