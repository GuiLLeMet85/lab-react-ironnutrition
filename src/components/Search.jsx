import React from "react";
import { Input } from 'antd';

export default function Search (props) {
    const {onSearch} = props;

    return (
        <div className="search-bar">
        <label>Food</label>
        <Input type="text" placeholder="Search Food" onChange={(e) => onSearch(e.target.value)} /> 
        </div>
    )
}