import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Container>
        <div>Acerca de mi</div>
      </Container>
    </div>
  )
}

export default App;
