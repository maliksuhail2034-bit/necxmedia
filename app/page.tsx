import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProblemSection from '@/components/ProblemSection';
import HowItWorks from '@/components/HowItWorks';
import SystemSection from '@/components/SystemSection';
import FunnelSection from '@/components/FunnelSection';
import WhoWeHelp from '@/components/WhoWeHelp';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <SystemSection />
      <FunnelSection />
      <WhoWeHelp />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
