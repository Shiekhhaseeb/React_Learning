import React,{useState,useEffect} from 'react';

function MyComponent(){

  const [width,setWidth] = useState(window.innerWidth);
    const [height,setheight] = useState(window.innerHeight);

    useEffect(()=>{
   window.addEventListener("resize",handleResize);
   console.log("EVENT LISTENER ADDED");

    return()=>{
    window.removeEventListener("resize",handleResize);
    console.log("EVENT LISTENER REMOVED");
   }
    
    },[]);
    //changes the title of the page
    useEffect(()=>{
      document.title =`Size: ${width} x ${height}`;
    },[width,height]); 

  
    function handleResize(){
      setWidth(window.innerWidth);
      setheight(window.innerHeight);
    }
    return(
      <>
        <h1> Window Width: {width}px</h1>
        <h1> Window Height: {height}px</h1>
      </>
    )
}
export default MyComponent;