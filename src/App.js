
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Header />
      <Nav />
       <main>
        <h1> Hero Section</h1>
      </main>
      <article>
       <h1>Testimonials</h1>
      </article>
      <article>
       <h1>About section</h1>
      </article>
      <Footer />
    </>
  );
}

export default App;
