import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import LoadingScreen from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { BackgroundSection } from './components/sections/BackgroundSection';
import { StorySequence } from './components/sections/StorySequence';
import { CasesTimeline } from './components/sections/CasesTimeline';
import { ImpactSection } from './components/sections/ImpactSection';
import { TodaySection } from './components/sections/TodaySection';
import { SourcesSection } from './components/sections/SourcesSection';

const App: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);
  // Presentation Mode: Keyboard Navigation
  useEffect(() => {
    const sections = ['hero', 'background', 'story', 'cases', 'impact', 'today', 'sources'];
    let currentSectionIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentSectionIndex < sections.length - 1) {
          currentSectionIndex++;
          scroller.scrollTo(sections[currentSectionIndex], {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentSectionIndex > 0) {
          currentSectionIndex--;
          scroller.scrollTo(sections[currentSectionIndex], {
            duration: 1000,
            delay: 0,
            smooth: 'easeInOutQuart',
          });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!loadingComplete) {
    return <LoadingScreen onComplete={() => setLoadingComplete(true)} />;
  }

  return (
    <div className="min-h-screen bg-night-900 text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <BackgroundSection />
        <StorySequence />
        <CasesTimeline />
        <ImpactSection />
        <TodaySection />
        <SourcesSection />
      </main>
      
      {/* Footer */}
      <footer className="relative py-12 border-t border-white/5 bg-night-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">Research & Content By</p>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Manroop D., Chelsea T., Amelia F., Jasleen S., Erika B. P., Parleen N., Muhammad Z.,{' '}
                <a
                  href="https://portfolio.ahmxd.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 relative inline-block transition-all duration-300 hover:text-starlight-300 group"
                >
                  <span className="relative z-10">Salman A.</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-starlight-300 transition-all duration-300 group-hover:w-full z-10" />
                  <span className="absolute inset-0 -inset-x-2 blur-lg bg-starlight-400/0 transition-all duration-300 group-hover:bg-starlight-400/40 -z-10" />
                </a>
                {' '}& Yahya S.
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/5">
              <p className="text-neutral-400 text-sm">
                Website Designed & Developed by{' '}
                <a
                  href="https://portfolio.ahmxd.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium relative inline-block transition-all duration-300 hover:text-starlight-300 group"
                >
                  <span className="relative z-10">Salman Ahmad</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-starlight-300 transition-all duration-300 group-hover:w-full z-10" />
                  <span className="absolute inset-0 -inset-x-2 blur-lg bg-starlight-400/0 transition-all duration-300 group-hover:bg-starlight-400/40 -z-10" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Presentation Controls Hint */}
      <div className="fixed bottom-4 right-4 z-50 text-gray-500 text-xs opacity-50 pointer-events-none hidden md:block">
        Use Arrow Keys to Navigate
      </div>
    </div>
  );
};

export default App;

