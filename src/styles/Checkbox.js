import React, {useState, useEffect} from "react";
import styled from "styled-components";

const CheckBoxComponent = props => {

    const [length, setWidth] = useState(0);

    useEffect(() => {
        props.label != null ? setWidth(props.label.length) : props.text != null ? setWidth(props.text.length) : setWidth(0)
    }, [props.label, props.text]);

    return (
        <Wrap style={{width: length * 7 + 20}}>
            <input type="checkbox" {...props} />
            <div className="checkbox" />
            <div>{props.label == null ? props.text: props.label}</div>
        </Wrap>
    );
};

export default CheckBoxComponent;

const Wrap = styled.label`
    display: flex;
    align-items: center;
    height: 40px;
    font-size: 15px;
    margin-left: 10px;
    
    input {
        display: none;
    }
    
    div.checkbox {
        display: inline-block;
        position: relative;
        width: 13px;
        height: 13px;
        border: 1px solid #409EFF;
        margin-right: 5px;
    }
  
  input[type="checkbox"]:checked ~ div.checkbox {
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background-color: #0094ff;
      transform: translate(-50%, -50%);
    }
  }
  
  input[type="checkbox"]:hover ~ div {
    cursor: pointer;
  }
  
  input[type="checkbox"]:disabled ~ div{
    color: #C0C4CC;
    cursor:not-allowed;
  }
  
  input[type="checkbox"]:disabled  ~ div.checkbox {
    
    border: 1px solid #C0C4CC;
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      background-color: #C0C4CC;
      transform: translate(-50%, -50%);
    }
  }
`;
