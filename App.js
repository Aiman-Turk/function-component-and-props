import logo from './logo.svg';
import './App.css';

function App(prop) {
  return (
    <div>
     <h3> My Title is {prop.title}</h3>
     <p> {prop.Body}</p>
     <img src={prop.imageurl} alt="" className="My"/>

    </div>
  );
}

export default App;
