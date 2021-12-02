import { useState } from 'react';
import foodsDataJSON from './../foods.json';
import FoodBox from './../components/FoodBox';
import AddFoodForm from './../components/AddFoodForm';
import { Divider, Button, Row } from 'antd';
import SearchFood from './../components/SearchFood';

function FoodList() {
  const [allFoods, setAllFoods] = useState(foodsDataJSON);
  const [foods, setFoods] = useState(foodsDataJSON);
  const [isShowing, setIsShowing] = useState(true);

  const addNewFood = (foodObj) => {
    const updatedFoods = [foodObj, ...foods];
    const updatedAllFoods = [foodObj, ...allFoods];

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

    setFoods(filteredFoods);
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

      {!foods.length && (
        <div>
          <h1>No content!</h1>
        </div>
      )}

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((food) => {
          return <FoodBox food={food} deleteFood={deleteFood} />;
        })}
      </Row>
    </div>
  );
}
export default FoodList;
