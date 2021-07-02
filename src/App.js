import './App.css';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Tracker from './components/information/tracker/Tracker'
import Vavail from './components/information/vaccination/Vavail';
import VaccineData from './components/information/vaccination/VaccineData';
import Med from './components/meditation/Med';
import Protocols from './components/protection/Protocols'
import { useState , useEffect} from 'react';
import axios from 'axios';

function App() {
  const [Data, setData] = useState({}) 
  const [date, setdate] = useState('')

  useEffect(() =>{ 
    axios.get('https://covidapi.info/api/v1/global')
    .then(res =>{
      console.log(res.data)
       setData(res.data.result)
       setdate(res.data.date)
      })
    .catch(err => console.log(err))
  },[])


  return (
    <div className="App"> 
       <Navbar />
       <Switch>

         <Route exact path="/">
           <Home/>
         </Route>

         <Route exact path="/tracker">
           <Tracker 
             data = {Data}
             latestDate = {date}/>
         </Route>

         <Route exact path="/vaccine">
           <Vavail />
         </Route>

         <Route exact path="/vaccine_data">
           <VaccineData />
         </Route>

         <Route exact path="/protocols">
           <Protocols />
         </Route>
         <Route exact path="/meditation" >
           <Med />
         </Route>
       </Switch>
    </div>
  );
}

export default App;
