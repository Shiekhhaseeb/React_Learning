import { func } from "prop-types";
import React ,{useState} from "react";
function ColorPicker() { 

  const [color,setColor] = useState("#FFFFFFF");

  function handleColorChange(e){
    setColor(e.target.value);
  }
return(
<div className="color-picker-container">
<h1>Color Picker</h1>
<div className="color-display" style={{backgroundColor:color}}> 
<p>Select color :{color}</p>
</div>
<label>Select a color:</label>
<input  type="color" value={color} onChange={handleColorChange} ></input>
</div>
);
 }
 export default ColorPicker;
