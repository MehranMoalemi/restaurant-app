import React, { useState,useEffect } from 'react'
import useFetch from '../../tools/useFetch';
import './card.scss';
interface Props {
  title: string;
  image: string;
  id: number;
}
const Card = React.memo((props: Props): JSX.Element => {
  const { title, image, id } = props;
  
  // expandable card onClick
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  function handleClick() {
    setIsExpanded(!isExpanded)
  }

  // fetching more info about the product to show onClick
  // useFetch hook For fething the data
      const url = `https://api.spoonacular.com/food/products/${id}?apiKey=1350cee7422a44c8b36190718187e824`;
      const { data } = useFetch({url,dependencies:[isExpanded]});
  
  console.log(data, 'moreInfo');


  return (
    <div className={'product-card'} onClick={handleClick}>
      <p>{title}</p>
      <img src={image} />

      {isExpanded &&
        <div>
          test
      </div> }
    </div>
  )
})

export default Card