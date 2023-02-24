import './App.css';
import { FaPizzaSlice } from 'react-icons/fa';
import { FaHamburger } from 'react-icons/fa';
import { FaAppleAlt } from 'react-icons/fa';
import CategorySelector from './components/CategorySelector';
import { useRef } from 'react';
function App() {
  const pizzaRef = useRef<HTMLDivElement>()
  const burgerRef = useRef<HTMLDivElement>()
  const fruitRef = useRef<HTMLDivElement>()

  return (
    <div>
      <div className='categories'>
        <CategorySelector onClick={pizzaRef.current?.click()} Icon={FaPizzaSlice} title={'pizza'} />
        <CategorySelector onClick={burgerRef.current?.click()} Icon={FaHamburger} title={'burger'} />
        <CategorySelector onClick={fruitRef.current?.click()} Icon={FaAppleAlt} title={'fruit'} />
      </div>
    </div>
  );
}

export default App;
