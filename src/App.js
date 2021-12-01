// src/App.js
import { useState } from 'react';
import './App.css';
import foodsDataJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchFood from './components/SearchFood';
import { Input, Col, Divider, Button, Row } from 'antd';

function App() {
  const [allFoods, setAllFoods] = useState(foodsDataJSON);
  const [foods, setFoods] = useState(foodsDataJSON);
  const [isShowing, setIsShowing] = useState(true);

  const addNewFood = (foodObj) => {
    const updatedFoods = [foodObj, ...foods];
    const updatedAllFoods = [foodObj, ...allFoods];
    console.log('foodObj :>> ', foodObj);
    setFoods(updatedFoods);
    setAllFoods(updatedAllFoods);
  };

  const searchFoodList = (char) => {
    let filteredFoods;
    if (char === ' ') {
      filteredFoods = allFoods;
    } else {
      filteredFoods = foods.filter((oneFood) => {
        return oneFood.name.toLowerCase().includes(char.toLowerCase());
      });
    }
    console.log('filteredFoods :>> ', filteredFoods);

    setAllFoods(filteredFoods);
  };

  const deleteFood = (foodName) => {
    const filteredFood = foods.filter((food) => {
      return food.name !== foodName;
    });

    setFoods(filteredFood);
  };

  const toggleFoodAdd = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div>
      {isShowing && <AddFoodForm addNewFood={addNewFood} />}

      <Button onClick={toggleFoodAdd}>
        {isShowing ? 'Hide Form' : 'Add New Food'}{' '}
      </Button>

      <SearchFood searchFoodList={searchFoodList} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => {
          return <FoodBox food={food} deleteFood={deleteFood} />;
        })}
      </Row>
    </div>
  );
}
export default App;
