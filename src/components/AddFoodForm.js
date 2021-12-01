import { useState } from 'react/cjs/react.development';
import { Input, Col, Divider, Button } from 'antd';

function AddFoodForm({ addNewFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(1);
  const [servings, setServings] = useState(1);

  const handleName = (event) => setName(event.target.value);
  const handleImage = (event) => setImage(event.target.value);
  const handleCalories = (event) => setCalories(event.target.value);
  const handleServings = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    console.log('newFood :>> ', newFood);
    addNewFood(newFood);

    setName('');
    setImage('');
    setCalories(1);
    setServings(1);
  };
  return (
    <div className="AddFood">
      <Divider>Add Food Entry</Divider>

      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>Name:</label>
        <Input type="text" name="name" value={name} onChange={handleName} />

        <label>Image:</label>
        <Input type="text" name="image" value={image} onChange={handleImage} />

        <label>Calories:</label>
        <Input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCalories}
        />

        <label>Serving:</label>
        <Input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServings}
        />

        <Button onClick={handleSubmit} type="submit">
          Create
        </Button>
      </form>
    </div>
  );
}

export default AddFoodForm;
