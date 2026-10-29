import React from 'react';
import {PolicyPage} from '../components/PolicyPage';

const cookiePolicy = `7. Cookie Policy
Effective Date: [29-10-2026]
1. What Are Cookies?
Cookies are small files stored by a website on a user's device. Similar technologies may also
be used to remember preferences, maintain sessions, and understand website usage.
2. Why We May Use Cookies
Our website may use cookies or similar technologies for:
● Essential website functionality
● Session and security management
● Remembering user preferences
● Understanding website performance
● Measuring traffic and improving the booking experience
● Advertising or marketing measurement, if such tools are implemented
The actual cookies used will depend on the website's installed technologies and
configuration.
3. Essential Cookies
Some cookies may be necessary for core functions, such as maintaining a booking session
or supporting security.
Disabling these cookies may affect website functionality.
4. Analytics and Marketing Cookies
Where analytics or marketing technologies are used, they should be configured and
disclosed in accordance with applicable law and consent requirements.
Non-essential cookies should be activated only as permitted by applicable law and the user's
choices.
5. Managing Cookies
Users can manage or delete cookies through their browser settings. Where a cookie
preference or consent tool is provided, users can also use it to manage applicable
preferences.
6. Changes to This Policy
We may update this Cookie Policy when our technologies or practices change.
7. Contact
Email:`;

export default function Cookie(){
  return <PolicyPage title="Cookie Policy"><div className="whitespace-pre-wrap px-7 py-9 font-sans text-[15px] leading-8 text-slate-700 sm:px-12 sm:py-12 sm:text-base sm:leading-8">{cookiePolicy}</div></PolicyPage>;
}
