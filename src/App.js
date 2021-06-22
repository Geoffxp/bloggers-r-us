import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import ListCountries from "./ListCountries";
import DisplayCurrency from "./DisplayCurrency";
import Header from "./Header";

function App() {
  const [countries, setCountries] = useState([]);
  const abortController = new AbortController();
  const signal = abortController.signal;
  useEffect(() => {
    async function getCountries(){
      const response = await fetch("https://restcountries.eu/rest/v2/all", signal)
      setCountries(await response.json())
    }
    getCountries();

    return () => {
      abortController.abort();
    }
  }, [])
  
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <ListCountries countries={countries} />
      </Route>
      <Route path="/currency/:country">
        <DisplayCurrency countries={countries}/>
      </Route>
    </Switch>
  )
}

export default App;
