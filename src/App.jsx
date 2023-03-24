import Acces from './components/Acces';
import Clipboard from './components/Clipboard';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Keep from './components/Keep';
import Partners from './components/Partners';
import Supercharge from './components/Supercharge';

function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Keep />
      <Acces />
      <Supercharge />
      <Partners />
      <Clipboard />
      <Footer />
    </main>
  );
}

export default App;
