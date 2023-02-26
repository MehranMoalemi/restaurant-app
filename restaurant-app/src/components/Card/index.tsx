import React, { useState, useEffect } from 'react'
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
  const url = `https://api.spoonacular.com/food/products/${id}?apiKey=4d2d56d46fd04421a0c74f139efc10b2`;
  const { data:moreInfo } = useFetch({ url, dependencies: [isExpanded] });


  return (
    <div className={'product-card'} onClick={handleClick}>
      <p>{title}</p>
      <img src={image} />

      {isExpanded &&
        moreInfo.nutrition.nutrients.map((nutrient:any, index:number) => (
          <div key={index}>
            <span>amount: {nutrient.amount}</span>
            <span>name: {nutrient.name}</span>
            <span>percentOfDailyNeeds: {nutrient.percentOfDailyNeeds}</span>
          </div>
        ))
      }
    </div>
  )
})

export default Card