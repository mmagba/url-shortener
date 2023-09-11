import Nav from '@/components/Nav';
import UrlShortener from '@/components/UrlShortener';
import Hero from '@/components/Hero'
import Features from '@/components/Features';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <UrlShortener />
      <Features />
      <CTA />
      <Footer />
    </>
  )
}
