
import './App.css';
import {useState} from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Aside from './components/Aside/Aside';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';

function App() {
  const [isShow, setIsShow] = useState(false);
  const [modalData, setModal] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (pizza, quantity) => {
    setCart(prevCart => {
      const pizzaAlreadyAt = prevCart.findIndex(com => com.name === pizza.name);
      if (pizzaAlreadyAt !== -1) {
        const updateCart = [...prevCart];
        updateCart[pizzaAlreadyAt] = {
          ...updateCart[pizzaAlreadyAt],
          quantity: updateCart[pizzaAlreadyAt].quantity + quantity
        };
        return updateCart;
      } else {
        return [...prevCart, { ...pizza, quantity }];
      }
      }
    )
    
    
  };
  
  const showModal = (data) => {
    setModal(data);
    setIsShow(true);
  }
  const hideModal = () => {
    setIsShow(false);
  }
  return (
    <div className="App">
      <Header/>
      <main className="main-container">
        <List onShowModal={showModal}/>
        <Aside cart={cart}/>
      </main>
      {
       isShow && <Modal data={modalData} onAddToCart={addToCart} onHideModal={hideModal}/>
      }
      <Footer/>
    </div>
  );
}

export default App;
