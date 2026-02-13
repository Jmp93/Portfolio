import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import BackgroundBlobs from './components/BackgroundBlobs';

function App() {
  return (
    <>
      <Navbar />

      <Header />
      <BackgroundBlobs />

      <main>
        <About />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
