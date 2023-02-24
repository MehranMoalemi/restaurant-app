import React, { forwardRef, ReactNode, useEffect, useState } from "react";
import withScroll from "../../HOC/withScroll";
import Card from "../Card";

interface Props {
  forwardedRef: React.RefObject<HTMLDivElement>;
  title: 'pizza' | 'burger' | 'fruits';
  Icon: ReactNode;
}

const CategoriesContainer = forwardRef<HTMLDivElement,Props>((props,ref): JSX.Element => {
  const { title,forwardedRef,Icon } = props;

  const [meals, setMeals] = useState<any>();

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/food/products/search?apiKey=b66cb1bcb91a4fee8907e6277107fc2a&query=${title}&number=100`
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
      {meals?.products.map((product) => (
        <Card title={product.title} image={product.image} key={product.id} />
      ))}
    </div>
  );
})

export default CategoriesContainer;
