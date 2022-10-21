import React from "react";

function Pizza({ pizza, setCurrentPizza }) {
  //console.log(pizza)
  const isVegetarian = pizza.vegetarian ? "yes" : "no"
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{isVegetarian}</td>
      <td>
        <button onClick={() => setCurrentPizza(pizza)} type="button" className="btn btn-primary">
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
