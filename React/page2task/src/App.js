
import './App.css';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <Buttons/>
      <div className="d-flex">
      <Cards img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWHMI0-logJMhfsJCRcn1wYD8oO9AKRx6_YvMY7w8Cw&s"} title={"D Sudhanva"} subtitle={"Chief Executive Officer"}/>
      <Cards img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdrT3jvGbDf5RLYcbS5BSZX6NzrjqCHZG8sjjeIT8wsuDK23L0LBYnUL91m5xJVtdvOs&usqp=CAU"} title={"Venkatesh Dayananda"} subtitle={"Company Secretary"}/>
      <Cards img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4-jgi1wmqmyzrwzg-nQXe3CcEK92IAnYSVGs8IkB-w&s"} title={"ManjulaMukund"} subtitle={"Head HR-Operation "}/>
    </div>

    </div>
  );
}

export default App;
