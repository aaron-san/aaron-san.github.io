import * as React from "react";

const numbersArray: number[] = [1, 4, 9, 16];

const newNumbers = numbersArray.map(function (number: number) {
  return number * 2;
});

function triple(numbers: number[]) {
  return numbers.map((number: number) => number * 3);
}

function Search() {
  return (
    <div>
      {newNumbers}
      <br></br>
      {triple(numbersArray)}
      <br />
    </div>
  );
}

export default Search;
