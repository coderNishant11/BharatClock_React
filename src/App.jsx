
import './App.css'
import Heading from './components/Heading'
import CurrentTime from './components/CurrentTime'
import ClockSlogan from './components/ClockSlogan'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Heading />
      <ClockSlogan/>
      <CurrentTime/>
    </div>
  )
}

export default App
