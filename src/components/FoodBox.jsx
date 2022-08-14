import React from "react";
import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    const {food, onDelete} = props

  return (
    <div className='list-3col'>
    {food.map(food => {
        return (
            <Col key={food.name}>
                <Card
                    title={food.name}
                    style={{ width: 230, height: 320, margin: 10, paddingBottom: 100 }}
                    >
                    <img src={food.image} height={60} alt="food" />
                    <p>Calories: {food.calories}</p>
                    <p>Servings: {food.servings}</p>
                    <p>
                    <b>Total Calories: {food.calories * food.servings}</b> kcal
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
