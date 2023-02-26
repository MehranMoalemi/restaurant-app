import React, { forwardRef, ReactNode, RefAttributes, useEffect, useState } from "react";
import withScroll from "../../HOC/withScroll";
import Card from "../Card";
import {ProductTypes} from '../../Types';
import { IconType } from "react-icons";
import './categorySection.scss';

export interface CategoriesContainerProps {
  forwardedRef: React.RefObject<HTMLDivElement>;
  title: 'pizza' | 'burger' | 'fruits';
  Icon: IconType;
}

const CategoriesContainer =React.memo(forwardRef<HTMLDivElement,CategoriesContainerProps>((props,ref): JSX.Element => {
  const { title,forwardedRef,Icon } = props;

  const [meals, setMeals] = useState<any>();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/products/search?apiKey=4d2d56d46fd04421a0c74f139efc10b2&query=${title}&number=10`
        );
        const data = await response.json();
        setMeals(data);
        if (data) {
          console.log(meals);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMeals();
  }, []);

  return (
    <div ref={ref} className={'category-container'}>
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
