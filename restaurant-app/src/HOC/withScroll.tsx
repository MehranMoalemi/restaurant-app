import React, { forwardRef, useRef } from 'react'

interface SectionProps {
  forwardRef: React.RefObject<HTMLDivElement>;
  
}

function withScroll<T extends SectionProps>(
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

export default withScroll