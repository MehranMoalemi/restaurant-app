import React, { forwardRef, ReactNode, RefAttributes, useEffect, useState } from "react";
import withScroll from "../../HOC/withScroll";
import Card from "../Card";
import {ProductTypes} from '../../Types';
import { IconType } from "react-icons";
import './categorySection.scss';
import useFetch from "../../tools/useFetch";

export interface CategoriesContainerProps {
  forwardedRef: React.RefObject<HTMLDivElement>;
  title: 'pizza' | 'burger' | 'fruits';
  Icon: IconType;
}

const CategoriesContainer =React.memo(forwardRef<HTMLDivElement,CategoriesContainerProps>((props,ref): JSX.Element => {
  const { title,forwardedRef,Icon } = props;

  // const [meals, setMeals] = useState<any>();

  // useEffect(() => {
  //   const fetchMeals = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://api.spoonacular.com/food/products/search?apiKey=f396c52f152f441fb36189fdd82434d6&query=${title}&number=10`
  //       );
  //       const data = await response.json();
  //       setMeals(data);
  //       if (data) {
  //         console.log(meals);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchMeals();
  // }, []);

    // fetching more info about the product to show onClick
  // useFetch hook For fething the data
  const url = `https://api.spoonacular.com/food/products/search?apiKey=a8acb2c92ae541819bf2b367de8f8576&query=${title}&number=5`;
  const { data: meals } = useFetch({ url, dependencies: [] });

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
