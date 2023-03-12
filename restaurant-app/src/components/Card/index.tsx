import React, { useState, useEffect } from 'react'
import useFetch from '../../Hooks/useFetch';
import useFetchAfterMount from '../../Hooks/useFetchAfterMount';
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
  // useFetchAfterMount hook For fething the data only with dependency changes not first render 
  //  **to decrease the number of requests**
  const url = `https://api.spoonacular.com/food/products/${id}?apiKey=311a0dd569df476588d5f886de810697`;
  const { data: moreInfo } = useFetchAfterMount({ url, dependencies: [isExpanded] });


  return (
    <div className={'product-card'} onClick={handleClick}>
      <p>{title}</p>
      <img src={image} />
      {isExpanded &&
          moreInfo?.breadcrumbs?.map((breadcrumb: any, index: number) => (
          <div key={index}>
            {breadcrumb}
          </div>
        ))
      }
    </div>
  )
})

export default Card