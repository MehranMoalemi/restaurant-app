import React, { forwardRef, ReactNode, RefAttributes, useEffect, useState } from "react";
import withScroll from "../../HOC/withScroll";
import Card from "../Card";
import {ProductTypes} from '../../Types';
import { IconType } from "react-icons";

export interface CategoriesContainerProps {
  forwardedRef: React.RefObject<HTMLDivElement>;
  title: 'pizza' | 'burger' | 'fruits';
  Icon: IconType;
}

const CategoriesContainer = forwardRef<HTMLDivElement,CategoriesContainerProps>((props): JSX.Element => {
  const { title,forwardedRef,Icon } = props;

  const [meals, setMeals] = useState<any>();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/products/search?apiKey=a30b98844ead43f4a801a1dee26d1e05&query=${title}&number=10`
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
    <div ref={forwardedRef} className={'category-container'}>
      <h2>{title.toLocaleUpperCase()}</h2>
      {meals?.products.map((product:ProductTypes) => (
        <Card title={product.title} image={product.image} key={product.id} />
      ))}
    </div>
  );
})

export default CategoriesContainer;
