import React from 'react'
interface Props{
    title: string;
    image: string;
}
const Card = (props: Props) => {
    const { title, image } = props;
    
  return (
      <div>
          <p>{title}</p>
          <img src={image} />
    </div>
  )
}

export default Card