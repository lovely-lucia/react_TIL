import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집'

  return (
    <div className="App">
      <div className="black-nav">
        개발 blog
      </div>
      <h4>{ posts }</h4>
    </div>
  );
}

export default App;
