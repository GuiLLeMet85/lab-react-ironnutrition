import React from "react";

import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const {food, onDelete} = props

  return (
    <div >
    {food.map(food => {
        return (
            <Col key={food.name}>
                <Card
                    title={food.name}
                    style={{ width: 230, height: 300, margin: 10 }}
                    >
                    <img src={food.image} height={60} alt="food" />
                    <p>Calories: {food.calories}</p>
                    <p>Servings: {food.servings}</p>
                    <p>
                    <b>Total Calories: </b>{food.calories * food.servings} kcal
                    </p>
                    <Button type="primary" onClick={() => onDelete(food.name)}> Delete </Button>
                </Card>
            </Col>
               )
            })}

   </div>
 );
}

export default FoodBox;
