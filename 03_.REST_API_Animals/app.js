const express = require("express");
const app = express();

app.use(express.json());

// post-fix
// value++

// pre-fix
// ++value

const animals = [
    { id: 1, name: "Parrot", age: 34 },
    { id: 2, name: "Pelican", age: 8 }
];

// let currentId = 2;

let nextId = 3;

app.get('/animals', (req, res) => {
    res.send({ data: animals });
});

app.get('/animals/:id', (req, res) => {
    const providedId = Number(req.params.id);
    const foundAnimal = animals.find((animal) => animal.id === providedId);
    
    if (!foundAnimal){
        return res.status(404).send({ data: `No Animal found by id ${providedId}`});            
    }
    res.send({ data: foundAnimal});
});


app.post('/animals', (req, res) => {
    /*if (!req.body.name || req.body.age === undefined) {
        return res.status(400).send({ data: 'name and age are required' });
    }

    const newAnimal = {
        id: nextId++,
        name: req.body.name,
        age: req.body.age
    };

    animals.push(newAnimal)

    res.status(201).send({ data: newAnimal });
    */

   const providedAnimal = req.body;
   
   providedAnimal.id = nextId++;

   animals.push(providedAnimal);

   res.send({ data: providedAnimal });
});
/*
const labrador = {
    color : "brown",
    energyLevel: 9.4
};

const chihuahua = {
    energyLevel: 10.0,
    isScaredOfAnything: false
};

console.log({ ...labrador, ...chihuahua });
*/
app.put('/animals/:id', (req, res) => {
    const providedId = Number(req.params.id);
    const foundAnimal = animals.find((animal) => animal.id === providedId);

    if (!foundAnimal) {
        return res.status(404).send ({ data: `No animal found by id ${providedId}` });
    }
    
    if (!req.body.name || req.body.age === undefined) {
        return res.status(400).send({ data: 'name and age are required' });
    }

    foundAnimal.name = req.body.name;
    foundAnimal.age = req.body.age;

    res.send({ data: foundAnimal });
})

app.patch('/animals/:id', (req, res) => {
    /*
    const providedId = Number(req.params.id);
    const foundAnimal = animals.find((animal) => animal.id === providedId);

    if (!foundAnimal) {
        return res.status(404).send ({ data: `No Animal found by id ${providedId}`});
    }

    if (req.body.name !== undefined) foundAnimal.name = req.body.name;
    if (req.body.age !== undefined) foundAnimal.age = req.body.age;

    res.send({ data: foundAnimal });
    */
    const providedId = Number(req.params.id);
    const foundAnimalIndex = animals.findIndex((animal) => animal.id === providedId);

    if (foundAnimalIndex === -1) {
        return res.status(404).send({ errorMessage: `No animal found by id ${providedId} `})
    };

    const providedAnimal = req.body;
    const foundAnimal = animals[foundAnimalIndex];

    const animalToCreate = {...foundAnimal, ...req.body, id: foundAnimal.id /* id: providedId */ };

    animals[foundAnimalIndex] = animalToCreate;

    res.send({ data: animalToCreate });
});

app.delete('/animals/:id', (req, res) => {
    /*
    const providedId = Number(req.params.id);
    const foundIndex = animals.findIndex((animal) => animal.id === providedId);

    if (foundIndex === -1) {
        return res.status(404).send({ data: `No Animal found by id ${providedId}` });
    }

    const deletedAnimal = animals.splice(foundIndex, 1);

    res.send({ data: deletedAnimal[0] });
    */
    const providedId = Number(req.params.id);
    const foundAnimalIndex = animals.findIndex((animal) => animal.id === providedId)

    if (foundAnimalIndex === -1) {
        return res.status(404).send({ errorMessage: `No animal found by id ${providedId} `})
    }

    animals.splice(foundAnimalIndex, 1);

    res.status(204).send();
});

// 2xx OK
// 3xx Redirect
// 4xx Client-side error
// 5xx Server-side error


const PORT = 8080;
app.listen(PORT, (error) =>{
    if (error){
        console.log("Error running the server", error);
        return;
    }

    console.log(`server is running on port ${PORT}`);
});