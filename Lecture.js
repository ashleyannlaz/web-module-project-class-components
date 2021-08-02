import React, {useState} from 'react';
import { createRenderer } from 'react-dom/test-utils';

// extends React.Component
const App = () => {
  const [name, setName] = useState("Ashley");
  const [age, setAge] = useState(34);

  const handleClick = () => {
    console.log('clicked in method')
    setName('Allison');
    setAge(12);
  }

  const Person = () => {
    return (<>
      <h2>Hello, {name}!</h2>
      <p>Wow. That is a great name, {name}. Never change your name.</p>
      <h2>Are you {age}?</h2></>
    )
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
    return (
      <div>
        <Person name={name} age={age}/>
        <button onClick={handleClick}>Change the name</button>
      </div>
    );
}

export default App;

// 2013 React was created to make pieces of the website work together
// 2015 Classes are introduced
// 2017 components were introduced 15.4 smaller components
// 2019 16.8 Hooks were added that allow lifecycle methods

// Why learn 2015?
// - Technology has a long tail, it takes a lot of time to implement new technology
// - Its expensive to convert everything and you
// -- already have an app that is running
// BACKWARD COMPATIBLE -> you may need to work on older tech

