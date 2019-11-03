import React, {useState, useEffect} from 'react';
import styled from 'styled-components';



const SelectComponent = ({props, data, multiple}) => {

    const [hidden, setHidden] = useState(true);
    const [value, setValue] = useState([]);
    const [multi, setMulti] = useState(false);
    const [changeWidth, setChangeWidth] = useState(100);

    useEffect( () => {
        multiple === true ?
            setMulti(true)
            :
            setMulti(false)



    }, [multiple]);


    const refreshList = (data) => {
        setValue(value.filter(item => item !== data));
        setChangeWidth(changeWidth - 13 - 5 * data.length);
    };

    const changeProperty = (data) => {
        setChangeWidth(changeWidth + 13 + 5 * data.length);
        setValue([...value, data]);

    };

    const SelectItem = props => {

        return (
            <Wrap onClick={ () => {multi === false ? setHidden(true) : setHidden(false)}}>
                {
                    props.value.map((data, i) => {
                        return (
                            <Item className="item" key={i} onClick={() => {multi === false ? setValue(data) : value.indexOf(data) !== -1 ? refreshList(data)  : changeProperty(data)}}>
                                <div  style={{color: value.indexOf(data) !== -1 ? 'red' : ''}}>{data}</div>
                            </Item>
                        )
                    })
                }
            </Wrap>
        )
    };

    return (

        <SelectGroup>
            <WaitSelect style={{width: changeWidth + "px"}} onClick={() => {hidden === true ? setHidden(false) : setHidden(true)}}>
                <div>
                    {
                        value.length === 0 ?
                            `Select`
                            :
                            multi === false ?
                                <div style={{display: 'inline', paddingLeft: '5px', paddingRight: '5px', marginRight: '3px', backgroundColor: '#7FF2FF', border: '1px solid #409EFF', borderRadius: '10px'}}>{value}</div>
                                :
                                value.map((data, i) => {
                                    return(

                                        <div key={i} style={{display: 'inline', paddingLeft: '5px', paddingRight: '5px', marginRight: '3px', backgroundColor: '#7FF2FF', border: '1px solid #409EFF', borderRadius: '10px'}}>{data}</div>
                                    )
                                })
                    }
                </div>
                <div style={{position: 'relative', right: 5}}>
                    {
                        hidden === false ?
                            '▲'
                            :
                            '▼'
                    }
                </div>
            </WaitSelect>
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

const SelectGroup = styled.div`
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100px;    
    align-items: center;
    font-size: 15px;
    margin-top: 10px;
    margin-left: 10px;
       
    border: 1px solid #409EFF;
    border-radius: 10px;

`;

const WaitSelect = styled.div`
    display: flex;
    justify-content: space-between;
    // width: 90px;
    height: 30px;
    align-items: center;
    font-size: 15px;
    margin-left: 10px;
    padding-left: 10px;
    border: 1px solid #409EFF;
    border-radius: 999px;
    
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
        background-color: #C0C4CC;
        
        &nth-child(n+2) {
            // display: block;  
        }
    }    
    
    
    :hover {

        background-color: #C0C4CC;
        
        cursor: pointer;
    }
`;