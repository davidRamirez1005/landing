import RomanticHeader from './components/RomanticHeader';
import LoveQuote from './components/LoveQuote';
import CatGallery from './components/CatGallery';
import SongLinks from './components/SongLinks';
import RomanticFooter from './components/RomanticFooter';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-white">
      <RomanticHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        <LoveQuote />
        <CatGallery />
        <SongLinks />
      </main>
      <RomanticFooter />
    </div>
  );
};

export default App;

// DONE