import React from "react";
import "./App.css";

import Button from "./components/Button";
import RandomNumbersList from "./containers/RandomNumbersList";
import RandomNumberListItem from "./components/RandomNumberListItem";

export default function App() {
  const [numbers, setNumbers] = React.useState([]);

  const generateNums = () => {
    const randomArray = [];

    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * 100);

      // Generete new value if repeat
      while (randomArray.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 100);
      }

      randomArray.push(randomNumber);
    }

    setNumbers(randomArray);
  };

  const deleteNumber = (number) => {
    const numbersAfterDelete = numbers.filter(
      (numberToDelete) => number !== numberToDelete
    );
    setNumbers(numbersAfterDelete);
  };

  React.useEffect(() => {
    generateNums();
  }, []);

  return (
    <div className="App">
      <RandomNumbersList>
        {numbers.map((randomNumber) => (
          <RandomNumberListItem
            key={randomNumber}
            randomNumber={randomNumber}
            deleteNumber={() => deleteNumber(randomNumber)}
          />
        ))}
      </RandomNumbersList>
      <Button label="Generate new Set" onClick={generateNums} />
    </div>
  );
}
