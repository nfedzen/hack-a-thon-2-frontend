import Header from './components/Header'
import Shirts from './components/Shirts'
import Pants from './components/Pants'
import Shoes from './components/Shoes'
import './App.css';

function App() {
  return (
    <main>
      <Header></Header>
      <section>
        <Shirts />
        <Pants />
        <Shoes />
      </section>
    </main>
      
  )
    

}

export default App;
