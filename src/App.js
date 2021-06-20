import logo from './logo.svg';
import './App.css';

import Container from './components/Container'

const menuItems = [
  {
    text: 'Item 1',
    onclick: (id) => { console.log(`Item one from container  ${id} clicked`); }
  },
  {
    text: 'Item 2',
    onclick: (id) => { console.log(`Item two from container ${id} clicked`); }
  }
];

function App() {
  return (
    <div className="App">
      <div className='containers'>
        <div className='containerItem'>
          <Container menuItems={menuItems} containerId='1'>
            Container1
          </Container>
        </div>

        <div className='containerItem'>
          <Container  menuItems={menuItems}  containerId='2'>
            Container2
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
