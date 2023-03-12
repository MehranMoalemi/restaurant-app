import React, { forwardRef} from "react";
import Card from "../Card";
import {ProductTypes} from '../../Types';
import { IconType } from "react-icons";
import './categorySection.scss';
import useFetch from "../../Hooks/useFetch";

export interface CategoriesContainerProps {
  forwardedRef: React.RefObject<HTMLDivElement>;
  title: 'pizza' | 'burger' | 'fruits';
  Icon: IconType;
}

const CategoriesContainer =React.memo(forwardRef<HTMLDivElement,CategoriesContainerProps>((props,ref): JSX.Element => {
  const { title,forwardedRef,Icon } = props;

  // useFetch hook For fething the data
  const url = `https://api.spoonacular.com/food/products/search?apiKey=8c596ae6fdd943cda3da5180934627e7&query=${title}&number=5`;
  const { data: meals } = useFetch({ url, dependencies: [title] });

  return (
    <div ref={forwardedRef} className={'category-container'}>
      <h2>{title.toLocaleUpperCase()}</h2>
      <div className="products">
      {meals?.products.map((product:ProductTypes) => (
        <Card title={product.title} image={product.image} key={product.id} id={product.id} />
      ))}
      </div>
    </div>
  );
}))

export default CategoriesContainer;
