
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';
import Fifthcomponent from './components/Fifthcomponent';
import Sixthcomponent from './components/Sixthcomponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>welcome to learning react</h1>
      <h2> React is fun</h2>
      
      </header>
       {/* render the components */}
       <Firstcomponent/>
       <Secondcomponent/>
       <Thirdcomponent/>
       <Fourthcomponent/>
       <Fifthcomponent/>
       <Sixthcomponent/>
      
    </div>
  );
}

export default App;
// jsx -
//create two other components i.e contact us and help components and style them with yourcown content.Render them

//it is our root component