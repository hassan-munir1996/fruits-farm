import Header from "./components/header";
import "./App.css";
import FruitsList from "./components/fruits-list";
import api from './api/fruits';
import { useEffect, useState } from "react";
import NutritionalStatistics from "./components/nutritional-statistics";

const App = () => {

  const [fruits, setFruits] = useState([]);
  const [statistics, setStatistics] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getAllFruits = async () => {
    return await api.get("/fruits/all");
  }

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const searchFruit = () => {
    return fruits.filter((fruit) => fruit.name.toLowerCase().includes(searchValue.toLowerCase()));
  }

  const getStatistics = (allFruits) => {
    let statistics = [];
    let caloriesStatistics = {
      name: 'calories',
      avg: 0,
      min: allFruits.data[0].nutritions.calories,
      max: allFruits.data[0].nutritions.calories
    }
    let carbsStatistics = {
      name: 'carbs',
      avg: 0,
      min: allFruits.data[0].nutritions.carbohydrates,
      max: allFruits.data[0].nutritions.carbohydrates
    }
    let fatStatistics = {
      name: 'fat',
      avg: 0,
      min: allFruits.data[0].nutritions.fat,
      max: allFruits.data[0].nutritions.fat
    }
    let proteinStatistics = {
      name: 'protein',
      avg: 0,
      min: allFruits.data[0].nutritions.protein,
      max: allFruits.data[0].nutritions.protein
    }
    let sugarStatistics = {
      name: 'sugar',
      avg: 0,
      min: allFruits.data[0].nutritions.sugar,
      max: allFruits.data[0].nutritions.sugar
    }
    allFruits.data.map((fruit) => {
      caloriesStatistics.avg = caloriesStatistics.avg + fruit.nutritions.calories;
      carbsStatistics.avg = carbsStatistics.avg + fruit.nutritions.carbohydrates;
      fatStatistics.avg = fatStatistics.avg + fruit.nutritions.fat;
      proteinStatistics.avg = proteinStatistics.avg + fruit.nutritions.protein;
      sugarStatistics.avg = sugarStatistics.avg + fruit.nutritions.sugar;
      //#region calories min/max
      if (caloriesStatistics.min > fruit.nutritions.calories) {
        caloriesStatistics.min = fruit.nutritions.calories
      }
      if (caloriesStatistics.max < fruit.nutritions.calories) {
        caloriesStatistics.max = fruit.nutritions.calories
      }
      //#endregion
      //#region carbs min/max
      if (carbsStatistics.min > fruit.nutritions.carbohydrates) {
        carbsStatistics.min = fruit.nutritions.carbohydrates
      }
      if (carbsStatistics.max < fruit.nutritions.carbohydrates) {
        carbsStatistics.max = fruit.nutritions.carbohydrates
      }
      //#endregion
      //#region fat min/max
      if (fatStatistics.min > fruit.nutritions.fat) {
        fatStatistics.min = fruit.nutritions.fat
      }
      if (fatStatistics.max < fruit.nutritions.fat) {
        fatStatistics.max = fruit.nutritions.fat
      }
      //#endregion
      //#region protein min/max
      if (proteinStatistics.min > fruit.nutritions.protein) {
        proteinStatistics.min = fruit.nutritions.protein
      }
      if (proteinStatistics.max < fruit.nutritions.protein) {
        proteinStatistics.max = fruit.nutritions.protein
      }
      //#endregion
      //#region sugar min/max
      if (sugarStatistics.min > fruit.nutritions.sugar) {
        sugarStatistics.min = fruit.nutritions.sugar
      }
      if (sugarStatistics.max < fruit.nutritions.sugar) {
        sugarStatistics.max = fruit.nutritions.sugar
      }
      //#endregion
    })
    caloriesStatistics.avg = (caloriesStatistics.avg / allFruits.data.length).toFixed(2);
    statistics.push(caloriesStatistics);
    carbsStatistics.avg = (carbsStatistics.avg / allFruits.data.length).toFixed(2);
    statistics.push(carbsStatistics);
    fatStatistics.avg = (fatStatistics.avg / allFruits.data.length).toFixed(2);
    statistics.push(fatStatistics);
    proteinStatistics.avg = (proteinStatistics.avg / allFruits.data.length).toFixed(2);
    statistics.push(proteinStatistics);
    sugarStatistics.avg = (sugarStatistics.avg / allFruits.data.length).toFixed(2);
    statistics.push(sugarStatistics);
    setFruits(allFruits.data);
    setStatistics(statistics);
  }

  useEffect(() => {
    const fetchFruits = async () => {
      const allFruits = await getAllFruits();
      if (allFruits.data) {
        getStatistics(allFruits);
      }
    }
    fetchFruits();

  }, []);

  useEffect(() => {
  }, [fruits])

  return (
    <div className="container">
      <Header />
      <NutritionalStatistics statistics={statistics} />
      <div className="table-wrapper">
        <form className="input-wrapper">
          <input className="search" type="text" name="name" placeholder="Search by name" onChange={handleChange} />
        </form>
        <FruitsList fruits={searchFruit()} />
      </div>
    </div>
  );
}

export default App;
