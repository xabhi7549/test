
import '../styles/Common.css'
import {useState} from 'react'
import pizza from "../res/pizza.png"



function Title(){
    const [color,setColor] = useState("HeadingBlack")
    const [header,setHeader] = useState("Headder")

    const chageColor = (val) => {
        setColor(val)

        if(val == "HeadingYellow"){
            setHeader("Headder Black")
        }else{
            setHeader("Headder White")
        }


    }



    return(
        <div> 


            <div className={header}>
            <img src={pizza} className="PizzaStyle" alt="logo" />
            <h1 className={color}> I love Pizza</h1>
            </div>




<button className='Button Blue' onClick={() => chageColor("HeadingBlue")} >Turn Blue</button>
<button className='Button Black' onClick={() => chageColor("HeadingBlack")} >Turn Black</button>
<button className='Button Yellow' onClick={() => chageColor("HeadingYellow")} >Turn Yellow</button>
<button className='Button Red' onClick={() => chageColor("HeadingRed")} >Turn Red</button>
        </div>

    );
}

export default Title;