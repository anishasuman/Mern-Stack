// import {useState} from "react"; //hooks are made up for functional components 
// const Main = () => {    //we cannot call hook inside the block we need to directly call it no where it can be called 
//   const [count, setCount] = useState(0);
//     return (
//     <main>
//       <h1>Main</h1>
//       <p>Welcome to the app</p>
//     </main>
//   );
// };


//export default count;
import { useState } from "react"; //hooks are made up for functional components 
const Main = () => {    //we cannot call hook inside the block we need to directly call it no where it can be called 
  const [count, setCount] = useState();
  const [value, setValue] = useState();
  const increment = (c) => {
    //setCount (Count + c);
    setCount((prev) => prev + c);    //updating count state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    increment(value);
    //setValue(" "); //prevent default behaviour of your form during submission website will not overload
  }
  return (
    
    <div className="bg-amber-300 text-red-500">

      count: {count}
      <form onSubmit={handleSubmit}>
        <label htmlFor="incrementer">Incrementer:</label>
        <input
          id="incrementer"
          type="number"
          required
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <button>Increment</button>
        {/* <button onClick={()  =>increment(value)}>Increment</button>  */}
      </form>
    </div>
  );
};

export default Main;

