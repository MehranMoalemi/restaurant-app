import React from 'react'
import './card.scss';
interface Props{
    title: string;
    image: string;
}
const Card = (props: Props) => {
    const { title, image } = props;
    
  return (
      <div className={'product-card'}>
          <p>{title}</p>
          <img src={image} />
    </div>
  )
}

export default Card