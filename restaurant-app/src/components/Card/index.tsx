import React, { useState,useEffect } from 'react'
import useFetch from '../../tools/useFetch';
import './card.scss';
interface Props {
  title: string;
  image: string;
  id: number;
}
const Card = (props: Props): JSX.Element => {
  const { title, image, id } = props;
  
  // expandable card onClick
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  function handleClick() {
    setIsExpanded(!isExpanded)
  }

  // fetching more info about the product to show onClick
  // useFetch hook For fething the data
      const url = `https://api.spoonacular.com/food/products/${id}?apiKey=7bf8049ff8ab464e9f5d8e0435399458`;
      const { data } = useFetch({url,dependencies:[isExpanded]});
  
  console.log(data, 'moreInfo');


  return (
    <div className={'product-card'} onClick={handleClick}>
      <p>{title}</p>
      <img src={image} />
    </div>
  )
}

export default Card