import React, {useState} from "react";
import styled from "styled-components";
import {Checkbox, Radio, SelectGroup} from "../styles";

const ThemeView = () => {

    const initData = [{
            'name': 'Sports',
            'value': ['Soccer','Baseball','basketball', 'another'],
    }];

    const [data] = useState(initData);

    return (
        <Wrap>
                <h3>CheckBox</h3>
                <Checkbox />
                <Checkbox text="text1" />
                <Checkbox label="text2"/>
                <Checkbox label="disabled" disabled />

                <hr/>


                <h3>Radio</h3>
                <Radio label="Single Radio"/>
                <Radio name="radio2" label="Radio2" />
                <Radio name="radio2" label="Radio2" />
                <Radio label="disabled Radio" disabled />

                <hr/>

                <h3>Select</h3>
                <SelectGroup data={data}/>

                <h4>multiple Select</h4>
                <SelectGroup data={data} multiple={true}/>

                <hr/>


        </Wrap>
    );
};

export default ThemeView;

const Wrap = styled.div`
`;