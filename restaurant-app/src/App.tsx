import './App.css';
import { FaPizzaSlice } from 'react-icons/fa';
import { FaHamburger } from 'react-icons/fa';
import { FaAppleAlt } from 'react-icons/fa';
import CategorySelector from './components/CategorySelector';
import { RefObject, useRef } from 'react';
import CategoriesContainer from './components/CategorySection';

function App() {
  const pizzaRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLDivElement>(null)
  const fruitRef = useRef<HTMLDivElement>(null)

  const handleClick = (ref: RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className='categories-container'>
        <CategorySelector onClick={()=>handleClick(pizzaRef)} Icon={FaPizzaSlice} title={'pizza'} />
        <CategorySelector onClick={()=>handleClick(burgerRef)} Icon={FaHamburger} title={'burger'} />
        <CategorySelector onClick={()=>handleClick(fruitRef)} Icon={FaAppleAlt} title={'fruit'} />
      </div>
      <div className='sections-container'>
        <CategoriesContainer Icon={FaPizzaSlice} title={'pizza'} forwardedRef={pizzaRef} />
        <CategoriesContainer Icon={FaHamburger} title={'burger'} forwardedRef={burgerRef} />
        <CategoriesContainer Icon={FaAppleAlt} title={'fruits'} forwardedRef={fruitRef} />
      </div>
    </div>
  );
}

export default App;
