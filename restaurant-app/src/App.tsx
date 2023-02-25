import './App.css';
import { FaPizzaSlice } from 'react-icons/fa';
import { FaHamburger } from 'react-icons/fa';
import { FaAppleAlt } from 'react-icons/fa';
import CategorySelector from './components/CategorySelector';
import { useRef } from 'react';
import CategoriesContainer from './components/CategorySection';
function App() {
  const pizzaRef = useRef<HTMLDivElement>(null)
  const burgerRef = useRef<HTMLDivElement>(null)
  const fruitRef = useRef<HTMLDivElement>(null)
  const handleClick = () => {
    if (pizzaRef.current) {
      pizzaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className='categories-container'>
        <button onClick={()=>pizzaRef.current?.click()}>awdwdwa</button>
        <CategorySelector onClick={()=>pizzaRef.current?.click()} Icon={FaPizzaSlice} title={'pizza'} />
        <CategorySelector onClick={()=>burgerRef.current?.click()} Icon={FaHamburger} title={'burger'} />
        <CategorySelector onClick={()=>fruitRef.current?.click()} Icon={FaAppleAlt} title={'fruit'} />
      </div>
      <div className='sections-container'>
        {/* <CategoriesContainer Icon={FaPizzaSlice} title={'pizza'} forwardedRef={pizzaRef} /> */}
        <CategoriesContainer Icon={FaHamburger} title={'burger'} forwardedRef={burgerRef} />
        <CategoriesContainer Icon={FaAppleAlt} title={'fruits'} forwardedRef={fruitRef} />
        <div ref={pizzaRef} onClick={handleClick}>aaaaaaaaaaaaaaa</div>
      </div>


    </div>
  );
}

export default App;
