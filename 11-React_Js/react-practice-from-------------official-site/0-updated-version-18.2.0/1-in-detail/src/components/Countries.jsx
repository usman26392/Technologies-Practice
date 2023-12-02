import { useState } from "react";



// example: updating array's element in state.
const initialCountries = [
  {
    id: 1,
    name: "Pakistan",
  },
  {
    id: 2,
    name: "India",
  },
  {
    id: 3,
    name: "Saudia Arab",
  },
];



export default function Countries() {
  const [countries, setCountries] = useState(initialCountries);
    // console.log(countries);

    function updateCountry() {
        setCountries(countries.map((country)=> {
            if(country.id == 2) {
                return {
                    ...country,
                    name: "Uk"
                }
            }
            else {
                return country
            }
        }))
    }

  return (
    <div>
      <h2>Countries</h2>
      <button onClick={updateCountry}>update state / data</button>
      <ul>
        {countries.map((Country, idx) => {
          return (
            <li key={Country.id}>
              <p>
                <strong>id: {Country.id } </strong>
              </p>
              <p>Country: {Country.name} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
  
}