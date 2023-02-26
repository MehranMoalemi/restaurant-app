import React from 'react';
import { IconType } from 'react-icons/lib';
import './categorySelector.scss'

interface Props{
  title: string;
  Icon: IconType;
  onClick?:()=> void ;
}

const CategorySelector = (props: Props) => {
  const { title, Icon, onClick } = props;

  return (
    <div className='selector' onClick={onClick}>
      <p>{title}</p>
      <Icon />
    </div>
  )
}

export default CategorySelector