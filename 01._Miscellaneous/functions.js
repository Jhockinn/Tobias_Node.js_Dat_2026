
// hoisting
getRandomInt(5, 10);

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomIntAnonymousFunction(2, 4));

// Arrow function
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//                              String, function
function genericActionPerformer(name, action){
    return action(name);
}

// Elias, playing guitar
// using the genericACtionPerfomer, can you make it say: Elias likes to play guitar.

function playingGuitarAction(name){
    return `${name} likes to play playGuitar`;
}

console.log(genericActionPerformer("Elias", playingGuitarAction));

// Magnus, watch movies
// create an arrow function this time called watchingMoviesACtion

const watchingMoviesAction = (name) => {
    return `${name} likes to watch movies`;
};

console.log(genericActionPerformer("Magnus", watchingMoviesAction));

// callback function

// Jacob, sail
// create sailingaction as a one-liner below

console.log(genericActionPerformer("Jacob", (name) => `${name} likes sailing`));
