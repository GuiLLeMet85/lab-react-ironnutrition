import React from "react";
import { Divider, Input } from 'antd';

export default function Search (props) {
    const {onSearch} = props;

    return (
        <div className="search-bar">
        <Divider>Search Food</Divider>
        <Input type="text" placeholder="Search Food" onChange={(e) => onSearch(e.target.value)} /> 
        </div>
    )
}