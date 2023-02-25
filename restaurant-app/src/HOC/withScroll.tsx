import React, { forwardRef, useRef } from 'react'
import { CategoriesContainerProps } from '../components/CategorySection';

interface SectionProps {
  forwardRef: React.RefObject<HTMLDivElement>;
}

function withScroll<T extends SectionProps|CategoriesContainerProps>(
  WrappedComponent:React.ComponentType<T>
) {
  return function WrappedWithScroll(props: T) {
    const ref = useRef<HTMLDivElement>(null);
    const handleClick = () => {
      if (ref.current) {
        ref.current.scrollIntoView({behavior:'smooth'})
      }
    }
    return <WrappedComponent {...props} forwardRef={ref} onClick={handleClick} />
  }
}
// Type 'T & { forwardRef: RefObject<HTMLDivElement>; onClick: () => void; }' is not assignable to type 'IntrinsicAttributes & T'.
//   Type 'T & { forwardRef: RefObject<HTMLDivElement>; onClick: () => void; }' is not assignable to type 'IntrinsicAttributes'.ts(2322)
export default withScroll