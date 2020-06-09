import React from 'react';

import exampleGridImage from 'images/platypus-logo.png';

const Game = ({
  entered,
  entryValue,
  submit,
  submitting,
  submitError,
  wrapperElement,
}) => {
  console.log(
    'Game props',
    entered,
    entryValue,
    submit,
    submitting,
    submitError,
    wrapperElement
  );

  // return <canvas style={{ backgroundColor: 'blue' }} />;

  // example grid of images
  return (
    <div className="grid-container">
      <div>
        <img src={exampleGridImage} />
      </div>
      <div>
        <img src={exampleGridImage} />
      </div>
      <div>
        <img src={exampleGridImage} />
      </div>
      <div>
        <img src={exampleGridImage} />
      </div>
      <div>
        <img src={exampleGridImage} />
      </div>
      <div>
        <img src={exampleGridImage} />
      </div>
      <div>
        <img src={exampleGridImage} />
      </div>
      <div>
        <img src={exampleGridImage} />
      </div>
      <div>
        <img src={exampleGridImage} />
      </div>
      <div>
        <img src={exampleGridImage} />
      </div>
      <div>
        <img src={exampleGridImage} />
      </div>
      <div>
        <img src={exampleGridImage} />
      </div>
    </div>
  );
};

export default Game;
