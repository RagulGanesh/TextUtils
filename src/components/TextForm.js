import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUp = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!!!','success')
    }
    const handleLow = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!!!','success')
    }
    const handleCap = ()=>{
        let newText=text.charAt(0).toUpperCase()+text.slice(1);
        setText(newText);
        props.showAlert('Capitalized!!!','success')
    }
    const handleOnChange = (event)=>{
        if(event.target.value.length===0){
            setVowels(0);
            setConsonants(0);
        }
        for(let i=0;i<event.target.value.length;i++){
            if(event.target.value[i]==='a'||event.target.value[i]==='e'||event.target.value[i]==='i'||
            event.target.value[i]==='o'||event.target.value[i]==='u'||event.target.value[i]==='A'||
            event.target.value[i]==='E'||event.target.value[i]==='I'||event.target.value[i]==='O'||event.target.value[i]==='U'){
                vow++;
                setVowels(vow);
            }else{
                con++;
                setConsonants(con);
            }
        }
        setText(event.target.value)
    }
    const handleClear = ()=>{
        setText("")
        setVowels(0);
        setConsonants(0);
        props.showAlert('Cleared!!!','success')
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard!!!','success')
    }
const [text,setText]=useState('');
const [vowels,setVowels]=useState(0);
let vow=0,con=0;
const [consonants,setConsonants]=useState(0);
  return (
    <>
    <div className="container">        
        <h1 style={{color:props.modeType==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="container mb-3">
        <textarea style={{backgroundColor:props.modeType==='dark'?'#bebebe':'white',color:props.modeType==='dark'?'white':'black',fontSize:'15px'}} className="form-control area" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>        
        <button className="btn btn-primary mx-1" onClick={handleUp}>Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLow}>Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleCap}>Capitalize</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button type="button" className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container" style={{color:props.modeType==='dark'?'white':'black'}}>
        <h1>Your text summary </h1>
        <p>{text.split(" ").length-1} and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length - 0.008} read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter text to preview here'}</p>
        <p>{vowels} number of vowels and {consonants} number of consonants</p>
    </div>
    </>
  )
}
