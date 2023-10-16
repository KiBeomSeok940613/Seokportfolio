import logo from './logo.svg';
import './App.css';

function App() {
  const name = "hamber";
  const naver = {
    name : "네이버",
    url : "https://naver.com"
  }
  return (
   <>
    <h1 style={{
      color : "pink",
      backgroundColor : "blue"

    }}>{name}.<p>{2 + 3}</p></h1>
    <a href={naver.url}>{naver.name}</a>
   
   </>
  );
}

export default App;
