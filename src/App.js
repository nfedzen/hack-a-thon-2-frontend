import Header from './components/Header'
import Shirts from './components/Shirts'
import Pants from './components/Pants'
import Shoes from './components/Shoes'
import Head from './components/Head'
import './App.css';

function App() {
  return (
    <main className="main">
      <Header />
      <section className="center">
        <Head />
        <Shirts />
        <Pants />
        <Shoes />
      </section>
    </main>
      
  )
    

}

export default App;
