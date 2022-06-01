import './App.css';
import Countries from './components/Countries/Countries';


function App() {
  return (
    <div className="App">
      <Countries></Countries>
    </div>
  );
}
/* function LoadCountries(){
  const [countries,setCountries]=useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response=>response.json())
    .then(data=>setCountries(data));
  },[])
  return (
    <div>       
      <h1>visiting every country of the world</h1>
      <h3>Avaiable Countries: {countries.length}</h3>
      {
        countries.map(country=> <Country name={country.name.common} population={country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Poplulation: {props.population}</h4>
    </div>
  )
} */

export default App;
