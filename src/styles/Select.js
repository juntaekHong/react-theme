import React, {useState, useEffect} from 'react';
import styled from 'styled-components';



const SelectComponent = ({data}) => {

    const [hidden, setHidden] = useState(true);
    const [value, setValue] = useState('');

    useEffect(() => {
    }, [setValue, hidden]);

    const SelectItem = props => {

        return (
            <Wrap style={{display: hidden === true ? 'none' : 'block'}} onClick={ () => {setHidden(true)}}>
                {
                    props.value.map((data, i) => {
                        return (
                            <Item className="item" key={i} onClick={() => {setValue(data)}}>
                                {/*<select {...props} />*/}
                                {/*<div value={data} onClick={() => {hidden === true ? setHidden(false) : setHidden(true)}}>{data}</div>*/}
                                <div>{data}</div>
                            </Item>
                        )
                    })
                }
            </Wrap>
        )
    };

    return (
        <SelectGroup>
            <FirstSelect onClick={() => {hidden === true ? setHidden(false) : setHidden(true)}}>{value === '' ? `Select` : value}</FirstSelect>
            <div name={data.name}  style={{display: hidden === true ? 'none' : 'block'}}>
                {
                    data.map((data, i) => {
                        return (
                          <SelectItem key={i} value={data.value} />
                        );
                    })
                }
            </div>
        </SelectGroup>
    )
};

export default SelectComponent;

const SelectGroup = styled.div``;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;    
    align-items: center;
    font-size: 15px;
    margin-top: 10px;
    margin-left: 10px;
       
    border: 2px solid #909399;
    border-radius: 10%;

`;

const FirstSelect = styled.div`
    display: flex;
    width: 90px;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
    padding-left: 10px;
    border: 2px solid #909399;
    border-radius: 10%;
    
    :hover {
        cursor: pointer;   
    }
`;

const Item = styled.label`
    select {
        // position: absolute;
        // width: 90px;
        // height: 20px;
        // border-radius: 
        display: none;
    }

    display: flex;
    width: 100%;

    align-items: center;
    font-size: 15px;

    overflow: hidden;
    
    :active {
        background-color: yellow;
        
        &nth-child(n+2) {
            // display: block;  
        }
    }    
    
    
    :hover {

        background-color: yellow;
        
        cursor: pointer;
    }
`;