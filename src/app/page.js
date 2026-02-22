import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import AboutMe from '@/components/AboutMe/AboutMe';
import Experience from '@/components/Experience/Experience';
import Skills from '@/components/Skills/Skills';
import Projects from '@/components/Projects/Projects';
import Certifications from '@/components/Certifications/Certifications';
import ContactUs from '@/components/ContactUs/ContactUs';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <ContactUs />
    </main>
  );
}
