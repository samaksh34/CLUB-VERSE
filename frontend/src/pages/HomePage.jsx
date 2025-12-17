import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import ImpactSection from '../components/home/ImpactSection';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <StatsSection />
            <FeaturesSection />
            <HowItWorksSection />
            <ImpactSection />
            <CTASection />
        </Layout>
    );
};

export default HomePage;
