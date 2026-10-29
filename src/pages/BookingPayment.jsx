import React from 'react';
import {PolicyPage} from '../components/PolicyPage';

const bookingPaymentPolicy = `4. Booking & Payment Policy
Effective Date: [Insert Date]
1. Booking Process
Customers can use the website to search for available ferry journeys, review available
details, and submit booking requests.
Before payment, customers should check:
● Departure and arrival locations
● Travel date and departure time
● Passenger count and passenger details
● Total fare and applicable charges
● Operator-specific conditions
● Cancellation and refund terms
2. Booking Confirmation
A booking is considered confirmed only when confirmation is issued through the applicable
booking process.
Customers should keep the confirmation message, booking reference, and ticket available
until the journey is completed.
If payment is successful but confirmation is not received, customers should contact support
instead of immediately paying again.
3. Fare and Availability
Fares and availability may change before a booking is completed. The final applicable fare
and conditions will be those disclosed at the relevant confirmation stage, subject to
applicable law.
We will make reasonable efforts to display accurate operator information, but final
operational availability is controlled by the relevant operator.
4. Payment Methods
The website may support payment methods made available through its payment providers,
including eligible digital payment options.
Customers must use authorized payment channels and should never share their PIN,
password, OTP, or card security code with anyone claiming to provide customer support.
5. Payment Failure
A payment may fail or remain pending because of bank, payment gateway, network, or
technical issues.
Where a payment is deducted but the booking remains unconfirmed, customers should
contact support with their transaction reference. The payment status will be checked before
a refund or further action is initiated.
6. Incorrect Booking Details
Customers are responsible for reviewing the information entered before confirming the
booking.
Changes to passenger names, travel dates, destinations, or other booking details are
subject to the operator's rules, availability, and any applicable charges. Corrections will be
handled where permitted.
7. Fraud Prevention
We may review suspicious transactions, request reasonable verification, or take steps
permitted by law to prevent fraud and protect customers and operators.
8. Contact
Email:`;

export default function BookingPayment(){
  return <PolicyPage title="Booking & Payment Policy"><div className="whitespace-pre-wrap px-7 py-9 font-sans text-[15px] leading-8 text-slate-700 sm:px-12 sm:py-12 sm:text-base sm:leading-8">{bookingPaymentPolicy}</div></PolicyPage>;
}
