import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [finishCount, setFinishCount] = useState(21);


  let countEvent = () => {
    setCount(count + 1)
  }
  let resetEvent = () => {
    setCount(0)
    setFinishCount(21)
  }
  if (count === finishCount) {
    setFinishCount(90)
  }

  return (
    <div className="App">
      {/*  */}
      <div className='title'>21 days to lose the effects of the habit and 90 days to forget it</div>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-indigo-800">
        <div className="relative font-mono font-extrabold text-9xl grid grid-cols-2 text-right text-white shadow-2xl gap-x-px border-8 border-yellow-100 rounded">
          <div className="absolute inset-x-0 -bottom-5 mx-auto flex justify-center">
            <div className="w-3/4 h-5 bg-yellow-100 rounded" />
          </div>
          <div className="relative py-8 px-5">
            <div className="absolute inset-0 w-full h-full grid grid-rows-2">

              <div className="bg-gradient-to-br from-gray-800 to-gray-900" />
              <div className="bg-gradient-to-br from-gray-700 to-gray-900" />
            </div>
            <div className="relative"> {count} </div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <div className="h-px w-full bg-gray-800" />
            </div>
          </div>
          <div className="relative py-8 px-5">
            <div className="absolute inset-0 w-full h-full grid grid-rows-2">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900" />
              <div className="bg-gradient-to-br from-gray-700 to-gray-900" />
            </div>
            <div className="relative"> {finishCount} </div>
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <div className="h-px w-full bg-gray-800" />

            </div>
          </div>
        </div>
        <div className='btns'>
          <button onClick={countEvent}>Start</button>
          <button onClick={resetEvent} >Reset</button>
        </div>
      </div>



    </div>
  );
}

export default App;
