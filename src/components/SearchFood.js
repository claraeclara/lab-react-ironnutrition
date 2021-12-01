import { useState } from 'react/cjs/react.development';
import { Input, Col, Divider, Button } from 'antd';

function SearchFood({ searchFoodList }) {
  const [foodName, setFoodName] = useState(' ');

  const handleSearch = (event) => {
    setFoodName(event.target.value);
    searchFoodList(event.target.value);
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={undefined} type="text" onChange={handleSearch} />
    </>
  );
}

export default SearchFood;
