import Header from './components/Header'
import Shirts from './components/Shirts'
import Pants from './components/Pants'
import Shoes from './components/Shoes'
import Socks from './components/Socks'
import './App.css';

function App() {
  return (
    <main className="main">
      <Header />
      <section className="center">
        <Shirts />
        <Pants />
        <Socks />
        <Shoes />
      </section>
      <audio controls>
        <source src="./prince.mp3" type="audio/mp3"/>
        Your browser does not support the audio tag.
      </audio>
    </main>
      
  )
    

}

export default App;
