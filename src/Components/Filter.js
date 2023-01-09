import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';




function Filter ({ onFilter }) {
  const [title, setTitle] = useState('');
 

  return (
    <Form inline >
      <FormControl
        type="text"
        placeholder="Search by title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='form'
      />
      <Button onClick={() => onFilter({ title })} style={{color:'grey'}}>Filter</Button>
    </Form>
    
  
  
  );
}
export default Filter;


