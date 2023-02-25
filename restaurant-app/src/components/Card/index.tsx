import React from 'react'
import  useFetch  from '../../tools/fetcher';
import './card.scss';
interface Props{
    title: string;
  image: string;
  id: number;
}
const Card = (props: Props):JSX.Element => {
  const { title, image,id } = props;
  const url = `https://api.spoonacular.com/food/products/${id}?apiKey=9b42d03f21504bd29ac8ffa205dfd2e4`;

  const { data } = useFetch(url);

  console.log(data);


  return (
      <div className={'product-card'}>
          <p>{title}</p>
          <img src={image} />
    </div>
  )
}

export default Card