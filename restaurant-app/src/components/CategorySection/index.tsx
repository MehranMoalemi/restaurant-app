import React, { forwardRef, ReactNode, useEffect, useState } from "react";
import withScroll from "../../HOC/withScroll";
import Card from "../Card";
import {ProductTypes} from '../../Types';
import { IconType } from "react-icons";

export interface CategoriesContainerProps {
  forwardedRef: React.RefObject<HTMLDivElement>;
  title: 'pizza' | 'burger' | 'fruits';
  Icon: IconType;
}

const CategoriesContainer = forwardRef<HTMLDivElement,CategoriesContainerProps>((props,ref): JSX.Element => {
  const { title,forwardedRef,Icon } = props;

  const [meals, setMeals] = useState<any>();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/products/search?apiKey=751506d96b794b19972956f72cc8187d&query=${title}&number=100`
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
    <div ref={forwardedRef}>
      {meals?.products.map((product:ProductTypes) => (
        <Card title={product.title} image={product.image} key={product.id} />
      ))}
    </div>
  );
})

export default withScroll(CategoriesContainer);
