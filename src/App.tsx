import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { AboutSection } from './components/sections/AboutSection';
import { ContactSection } from './components/sections/ContactSection';
import { FaqSection } from './components/sections/FaqSection';
import { HeroSection } from './components/sections/HeroSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { WorkSection } from './components/sections/WorkSection';
import { useI18n } from './i18n/I18nProvider';

export default function App() {
  const { messages } = useI18n();

  return (
    <div id="top" className="app-shell w-full overflow-x-hidden text-[16px] leading-[normal] text-black">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-[14px] focus:text-[rgb(16,_16,_20)]"
      >
        {messages.skipToContent}
      </a>
      <div className="text-[12px]">
        <div>
          <div className="content-center items-center relative flex min-h-[900px] flex-col justify-start gap-[0px] bg-white">
            <div className="contents">
              <div className="fixed left-0 top-0 z-[50] w-full md:absolute" style={{ order: '-1000' }}>
                <div className="contents">
                  <Header />
                </div>
              </div>
            </div>

            <div className="content-center items-center relative contents min-h-[900px] justify-start gap-[0px] bg-white">
              <div className="absolute left-[50%] top-0 z-[1]">
                <div></div>
              </div>

              <main
                id="main-content"
                aria-label={messages.aria.main}
                className="content-center items-center relative flex h-min w-full flex-col justify-center gap-[100px] md:gap-[150px]"
              >
                <HeroSection />
                <AboutSection />
                <ServicesSection />
                <WorkSection />
                <TestimonialsSection />
                <FaqSection />
                <ContactSection />
              </main>
            </div>

            <div></div>
            <div className="relative h-0 w-0 grow bg-[position:0px_0px]"></div>
            <Footer />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
