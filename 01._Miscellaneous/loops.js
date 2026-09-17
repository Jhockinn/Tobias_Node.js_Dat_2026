// .forEach  &  .filter  &  .filter  &  .reduce  &  .find  &  .findIndex  &  .indexOf

// filter filtere kun ting fra hvis det er false

// Map returns a new list of the same size: 1:1

// Side effect computer science: 

// Rule 1: Use loop methods in Javascript

// Rule 2: Don't use for loops unless if you are finger counting

// Rule 3: Use .map if you need the data afterwards

const numbers = [1, 2, 3, 4, 5];

// double the numbers

const doubledNumbers = numbers.map((number) => number * 2);

console.log(numbers);

console.log(doubledNumbers);

const numbersIterated = numbers.map((value, index, array) => console.log(value, index, array));


const countries = [
    {
        name: "Lesotho", gdp: 530
    },
    {
        name: "Papua New Guinea", gdp: 1025
    },
    {
        name: "Saint Vincent and the Grenadines", gdp: 1200
    }
];

// if the country is lesotho, boost the GDP with 500
/*const countriesWithGDPUpdated = countries.map((country) => {
    if (country.name === "Lesotho") {
        country.gdp += 500;
    }
    return country;
});
*/
const countriesWithGDPUpdated = countries.map((country) => ({ 
    name: country.name, 
    gdp: country.name === "Lesotho" ? country.gdp + 500 : country.gdp  
}));


console.log(countriesWithGDPUpdated);


const countriesFilteredOutIfGDPIsLessThanThousand = countries.filter((count) =>{
    if(count.gdp > 1000) return count
});

console.log(countriesFilteredOutIfGDPIsLessThanThousand);
