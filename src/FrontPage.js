
import './Common.css'
import {useState} from 'react'



function Title(){

    const [color,setColor] = useState("HeadingBlack")




    return(
        <div> 
<h1 className={color}> I love Pizza</h1>
<button className='Button Blue' onClick={() => setColor("HeadingBlue")} >Turn Blue</button>
<button className='Button Black' onClick={() => setColor("HeadingBlack")} >Turn Black</button>
<button className='Button Yellow' onClick={() => setColor("HeadingYellow")} >Turn Yellow</button>
<button className='Button Red' onClick={() => setColor("HeadingRed")} >Turn Red</button>



        </div>

    );
}

export default Title;