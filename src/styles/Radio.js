import React, {useState, useEffect} from "react";
import styled from "styled-components";

const RadioComponent = props => {

    const [length, setWidth] = useState(0);

    useEffect(() => {
       setWidth(props.label.length);
    }, [props.label.length]);

    return (
        <Wrap style={{width: length * 10 + 10}}>
            <input type="Radio" {...props} />
            <div className="Radio" />
            <div>{props.label}</div>
        </Wrap>
    );
};

export default RadioComponent;

const Wrap = styled.label`
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 15px;
    margin-left: 10px;
    
    input {
        display: none;
    }
    
    div.Radio {
        display: inline-block;
        position: relative;
        width: 13px;
        height: 13px;
        border: 1px solid #409EFF;
        border-radius: 50%;
        
        margin-right: 5px;
    }
    
    input[type="Radio"]:checked ~ div.Radio {
        &::after {
            position: absolute;
            content: "";
            top: 50%;
            left: 50%;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #0094ff;
            transform: translate(-50%, -50%);   
        }
    }
    
    
  input[type="Radio"]:hover ~ div {
    cursor: pointer;
  }
  
  input[type="Radio"]:disabled ~ div{
    color: #C0C4CC;
    cursor:not-allowed;
  }
  
  input[type="Radio"]:disabled  ~ div.Radio {
    
    border: 1px solid #C0C4CC;
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #C0C4CC;
      transform: translate(-50%, -50%);
    }
  }
`;