import React from 'react';

const form = props => {
  return (
    <form onSubmit={props.call}>
      <input type="text" name="city" placeholder="City" />
      <input type="text" name="country" placeholder="Country" />
      <input type="submit" />
    </form>
  );
};

export default form;
