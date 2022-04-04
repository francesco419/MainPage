import {useEffect, useState} from "react";

export const useOnScreen=(target)=>{
    const [state, setState]=useState(false);
    const options={
        root:null,
        rootMargin:'0px',
        threshold:0.5
    };
    useEffect(()=>{
        const observer = new IntersectionObserver(entries=>{
            const [entry]=entries;
            setState(entry.isIntersecting);
        },options);

        if(target.current){
            observer.observe(target.current);
        }

        return()=>{
            if(target.current){
                observer.unobserve(target.current);
            }
        }
    },[target,options]);

    return state;
};
