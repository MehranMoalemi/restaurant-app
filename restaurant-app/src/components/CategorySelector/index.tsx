import React, { ReactNode } from 'react'
import { IconType } from 'react-icons/lib';

interface Props{
  title: string;
  Icon: IconType;
  onClick: void | undefined;
}

const CategorySelector = (props: Props) => {
  const { title, Icon, onClick } = props;

  return (
    <div onClick={()=>onClick}>
      <p>{title}</p>
      <Icon />
    </div>
  )
}

export default CategorySelector