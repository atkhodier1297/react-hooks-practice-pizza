import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

const [pizzaData, setPizzaData] = useState([])

const [currentPizza, setCurrentPizza] = useState([])

// const [formData, setFormData] = useState({

//  id: '',
//  topping: '',
//  size: '',
//  vegetarian: null

// })

function handleChange(name, value){
  setCurrentPizza({...currentPizza, [name]:value })
  
}

console.log(currentPizza)


useEffect(() => {
  fetch('http://localhost:3001/pizzas')
  .then(r => r.json())
  .then(data => {setPizzaData(data)})
}, [currentPizza])

//console.log(pizzaData)


  return (
    <>
      <Header />
      <PizzaForm currentPizza={currentPizza} handleChange={handleChange} setCurrentPizza={setCurrentPizza} />
      <PizzaList pizzaData={pizzaData} setCurrentPizza={setCurrentPizza}/>
    </>
  );
}

export default App;
