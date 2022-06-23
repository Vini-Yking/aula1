import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react'

function App() {

  const [drink, setDrink] = useState([])
  const [loading, setLoading] = useState(false)

  const getDrink = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      setDrink(data)
    } catch (e) {
      //
      console.log(e);
    }

  }
const ingredientLoad = (load,ingr)=>{
  if (!load && ingr){
    return true
  }
}

  useEffect(() => {
    getDrink();

  }, [])

  return (

    <div className="App">

      <h1>DRINK ME!</h1>
      <button onClick={getDrink} >Sirva esse drinque!</button>
      <p>{drink.length !== 0 && drink.length !== 0 && drink.drinks[0].strDrink}</p>
      <p>{
        drink.length !== 0 && <img src={drink.drinks[0].strDrinkThumb} onLoad={() => setLoading(false)} width="300" alt={drink.drinks[0].strAlcoholic} />} </p>
      <p> {!loading ? "ingredientes" : "carregando"}</p>
      <p>{ ingredientLoad(loading, drink.drinks[0].strIngredient1) && "1-" + drink.drinks[0].strIngredient1}</p>
      <p>{ ingredientLoad(loading, drink.drinks[0].strIngredient2) && "2-" + drink.drinks[0].strIngredient2}</p>
      <p>{ ingredientLoad(loading, drink.drinks[0].strIngredient3) && "3-" + drink.drinks[0].strIngredient3}</p>
      

    </div>

  );
}

export default App;