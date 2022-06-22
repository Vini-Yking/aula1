import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {

  const [drink, setDrink] = useState([])
  // const [loading, setLoading] = useState(false)

  const getDrink = async () => {
    // setLoading(true)
    try {
      const { data } = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      setDrink(data)
    } catch (e) {
      //
      console.log(e);
    }

  }


  useEffect(() => {
    getDrink();

  }, [])

  return (

    <div className="App">

      <h1>DRINK ME!</h1>
      <button onClick={getDrink} >Sirva esse drinque!</button>
      <p>{drink.strDrink}</p>
      <p>
        {drink.length !== 0 && <img src={drink.drinks[0].strDrinkThumb} width="300" alt={drink.drinks[0].strAlcoholic} />}
      </p>
      <p>ingredientes</p>
      {drink.drinks[0].strIngredient1 && <p>1- {drink.drinks[0].strIngredient1}</p>}
      {drink.drinks[0].strIngredient2 && <p>2-{drink.drinks[0].strIngredient2}</p>}
      {drink.drinks[0].strIngredient3 && <p>3-{drink.drinks[0].strIngredient3}</p>}

    </div>

  );
}

export default App;