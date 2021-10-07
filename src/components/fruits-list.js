import React from "react";

const FruitsList = ({ fruits }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Family</th>
                        <th>Genus</th>
                        <th>Order</th>
                        <th>Calories</th>
                        <th>Carbohydrates</th>
                        <th>Fat</th>
                        <th>Protein</th>
                        <th>Sugar</th>
                    </tr>
                </thead>
                <tbody>
                    {fruits.map((fruit) => (
                        <tr key={fruit.name} >
                            <td>{fruit.name}</td>
                            <td>{fruit.family}</td>
                            <td>{fruit.genus}</td>
                            <td>{fruit.order}</td>
                            <td>{fruit.nutritions.calories}</td>
                            <td>{fruit.nutritions.carbohydrates}</td>
                            <td>{fruit.nutritions.fat}</td>
                            <td>{fruit.nutritions.protein}</td>
                            <td>{fruit.nutritions.sugar}</td>
                        </tr>
                    )
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default FruitsList;