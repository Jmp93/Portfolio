import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import BackgroundBlobs from './components/BackgroundBlobs';

function App() {
  return (
    <>
      <BackgroundBlobs />
      <Navbar />
      <Header />
      <main>
        <About />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
