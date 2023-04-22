import React,  {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Set');
    
    const handleupclick = () =>{
        console.log("upper clicked "+text);
        let newText =text.toUpperCase();
        setText(newText);
    }
    const handleonchange =(event) =>{
         console.log("onchange");
         setText(event.target.value);
    }
    const handlelowclick =()=>{
        let newlowtext=text.toLowerCase();
        setText(newlowtext);
    }
  return (
    <div>
        <h1> </h1>
         <div className="mb-3">
             <textarea className="form-control" onChange={handleonchange} id="exampleFormControlTextarea1" value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to upper</button>
        <button className='btn btn-secondary' onClick={handlelowclick}>Convert to lower</button>
        <p>Word count- {text.split(" ").length}</p>
        <p>Character count- {text.length}</p>
        <p>Minutes reading time- {0.008 * text.split(" ").length}</p>
        <p>Preview-{text}</p>
    </div>
  )
}

 
