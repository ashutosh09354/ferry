import React from 'react';
import {Layout} from '../components/Layout';
import BookingBox from '../components/BookingBox';
import Hero from '../components/home/Hero';
import PopularRoutes from '../components/home/PopularRoutes';
import WhyFerry from '../components/home/WhyFerry';
import Testimonials from '../components/home/Testimonials';
import {Stats,FAQ} from '../components/Common';
export default function Home(){return <Layout><main className="page bg-[#f6fbfc]"><Hero/><BookingBox/><PopularRoutes/><WhyFerry/><Stats/><Testimonials/><FAQ/></main></Layout>}
