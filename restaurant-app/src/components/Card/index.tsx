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
  const url = `https://api.spoonacular.com/food/products/${id}?apiKey=a8acb2c92ae541819bf2b367de8f8576`;
  const { data: moreInfo } = useFetch({ url, dependencies: [isExpanded, url] });


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