import React, { useState,useEffect } from 'react'
import useFetch from '../../tools/fetcher';
import './card.scss';
interface Props {
  title: string;
  image: string;
  id: number;
}
const Card = (props: Props): JSX.Element => {
  const { title, image, id } = props;
  const [moreInfo, setMoreInfo] = useState();
  
  // expandable card onClick
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  function handleClick() {
    setIsExpanded(!isExpanded)
  }

  // fetching more info about the product to show onClick
  // useFetch hook For fething the data
  useEffect(() => {
    if (isExpanded) {
      const url = `https://api.spoonacular.com/food/products/${id}?apiKey=482f52273f3744a18f0355fabf33f759`;
      const { data } = useFetch(url);
      setMoreInfo(data)
    }
  }, [isExpanded])
  

  console.log(data, 'data');


  return (
    <div className={'product-card'} onClick={handleClick}>
      <p>{title}</p>
      <img src={image} />
    </div>
  )
}

export default Card