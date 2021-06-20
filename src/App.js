import logo from './logo.svg';
import './App.css';

import Container from './components/Container'

function App() {
  return (
    <div className="App">
      <div className='containers'>
        <div className='containerItem'>
          <Container>
            Container1
          </Container>
        </div>

        <div className='containerItem'>
          <Container>
            Container2
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
