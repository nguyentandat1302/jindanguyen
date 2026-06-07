import { useEffect, useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Loader from './sections/Loader';
import Hero from './sections/Hero';
import Greeting from './sections/Greeting';
import Journey from './sections/Journey';
import EventInfo from './sections/EventInfo';
import Gallery from './sections/Gallery';
import RSVP from './sections/RSVP';
import ThankYou from './sections/ThankYou';
import Footer from './sections/Footer';

export default function GraduationInvite() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ready) {
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [ready]);

  return (
    <>
      {!ready && <Loader onDone={() => setReady(true)} />}

      <CustomCursor />

      <SmoothScroll>
        <main className="noise relative">
          <Hero />
          <Greeting />
          <Journey />
          <EventInfo />
          <Gallery />
          <RSVP />
          <ThankYou />
          <Footer />
        </main>
      </SmoothScroll>
    </>
  );
}
