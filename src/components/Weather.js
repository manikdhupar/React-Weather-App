import React from 'react';

const weather = props => {
  let output = (
    <div>
      {props.city ? <p>City: {props.city} </p> : null}
      {props.country ? <p>Country: {props.country} </p> : null}
      {props.temperature ? (
        <p>Temperature: {(props.temperature - 273.15).toFixed(2)} C </p>
      ) : null}
      {props.conditions ? <p>Conditions: {props.conditions} </p> : null}
    </div>
  );
  if (props.error) {
    output = <p>Please Try Again..</p>;
  }
  return <React.Fragment>{output}</React.Fragment>;
};

export default weather;
