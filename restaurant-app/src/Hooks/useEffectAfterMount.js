import React, { useRef, useEffect } from "react";

const useEffectAfterMount = (callback, dependency) => {
    // at the first render our ref is true 
    const componentJustMounted = useRef(true);
    //so this useEffect will not happen at the first render
    useEffect(() => {
        if (!componentJustMounted.current) {
            return callback();
        }
    // after the first render our ref will change to false
    // and this logics only run only when the dependency changes not at the first render
    componentJustMounted.current = false;
  }, dependency);
};

export default useEffectAfterMount;