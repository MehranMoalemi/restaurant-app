import React, {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useRef,
} from "react";

function withScroll(WrappedComponent) {
  return function WrappedWithScroll(props) {
    const ref = useRef(null);
    const handleClick = () => {
      console.log('worked')
      if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    };
    console.log(WrappedComponent)
    return (
      <WrappedComponent {...props} forwardedRef={ref} onClick={handleClick}/>
    );
  };
}
export default withScroll;
