import React from 'react';

export default (props) => {
  return (
    <div>
      <h1>布局</h1>
      <div>
        { props.children }
      </div>
    </div>
  );
};
