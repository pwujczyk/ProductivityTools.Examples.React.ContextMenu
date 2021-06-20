import logo from './logo.svg';
import './App.css';

import Container from './components/Container'

const menuItems = [
  {
    text: 'Item 1',
    onclick: () => { console.log("Item 1 clicked"); }
  },
  {
    text: 'Item 2',
    onclick: () => { console.log("Item 2 clicked"); }
  }
];

function App() {
  return (
    <div className="App">
      <div className='containers'>
        <div className='containerItem'>
          <Container menuItems={menuItems}>
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
