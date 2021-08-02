import { useState } from "react"
import styled from "styled-components" ;
import './App.css';
import { evaluate } from "mathjs";

const buttons = [
  { value: "clear", displayValue: "AC", style: "clear" },
  { value: "/", displayValue: "÷", style: "operator" },
  { value: "7", displayValue: "7", style: "number" },
  { value: "8", displayValue: "8", style: "number" },
  { value: "9", displayValue: "9", style: "number" },
  { value: "*", displayValue: "x", style: "operator" },
  { value: "4", displayValue: "4", style: "number" },
  { value: "5", displayValue: "5", style: "number" },
  { value: "6", displayValue: "6", style: "number" },
  { value: "-", displayValue: "-", style: "operator" },
  { value: "1", displayValue: "1", style: "number" },
  { value: "2", displayValue: "2", style: "number" },
  { value: "3", displayValue: "3", style: "number" },
  { value: "+", displayValue: "+", style: "operator" },
  { value: "0", displayValue: "0", style: "number zero" },
  { value: ".", displayValue: ".", style: "number" },
  { value: "=", displayValue: "=", style: "eoperator" }
]

const App= () => {
  const [ screen,setScreen] = useState([]);
  
  const handleClick = (val) => {
    if (val === "clear") {
      setScreen([0])
    } else if (val === "=") {
      let currentStr = screen.join("")
      let total = evaluate(currentStr)
      setScreen([total])
    } else {
      let newArr = [...screen, val]
      if (newArr[0] === 0) {
        newArr.shift()
      }
      setScreen(newArr)
    }
  }

  return (
    <div>
        <Background>
        <h1>I ❤️ Math</h1>
        <Screenshow>
      <div className="screen-wrapper"><h1>{screen}</h1></div>
      </Screenshow>
      <ButtonWrapper>
      {buttons.map((item, index) => (
          <StyledButton
            key={index}
            className={item.style}
            onClick={() => handleClick(item.value)}
          >
            {item.displayValue}
         </StyledButton>
      ))}
      </ButtonWrapper>
      </Background>
    </div>
  );
}
const ButtonWrapper = styled.div` 

margin: 100px,150px
height:350 px;
width: 350 px;
padding:100px;
display:grid;
grid-template-areas:
"clear clear clear ."
". . . ."
". . . ."
". . . ."
"zero zero . .";

.clear{
  grid-area: clear;  
  background-color:#f4cae0;
  color: #120d31;
  border-radius:20px;
  border-color:#b298dc;
  margin:2px
  border:3px;
  border-radius:10px
}

.zero{
  background-color:#f4cae0;
  color: #120d31;
grid-area: zero;
border-radius:20px;
  }

  .number{
    background-color:#a1b5d8;
    color: #f7edf0;
  border-radius:30px;
  border:double;
  border-color:#284b63;
  margin:5px;

  }
.operator{
  background-color:#f5eb7f;
  border:solid;
  border-color:#b298dc;
  margin:2px
  border:2px;
  border-radius:10px
}
.eoperator{
  background-color:#f4cae0;
  color: #120d31;
  border:solid;
  border-color:#b298dc;
  margin:2px
  border:2px;
  border-radius:10px
}
.eoperator:hover{
  filter: blur(1px)
}
.clear:hover{
  filter: blur(1px)
 
}
.number:hover{
  transform: scale(1.1)
}
.operator:hover{
  
  opacity: 0.8;
  background-color: rgba(255, 255, 255, 0.5);
  

}
`
const StyledButton = styled.button`
display:flex;
justify-content:centre;
height:60 vh;
width: 60 vw;
padding:35px;
`

const Background = styled.button`
display:flex;
row-direction:row;
justify-content:centre;
flex-flow: column wrap;
background-color:#ada7c9;
color: #120d31;
margin-left:30%;
margin-top:15px;

height:100 px;
width: 100 px;
border-color:#ffb3c6;
border:solid;
border-radius:15px;
`
const Screenshow = styled.h1`
  background-color:#f4cae0;
  margin:20px;
padding:20 px;
width:90%;
hight:10%;
border-color:#ffb3c6;
border:solid;
border-radius:15px;
`
export default App;
