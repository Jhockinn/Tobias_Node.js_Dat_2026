const express = require('express');
const app = express();

console.log(new Date());
// 2026-09-18T08:06:56.989Z UTC

console.log(Date())
// Fri Sep 18 2026 10:07:18 GMT+0200 (Central European Summer Time) Local Time (CEST)

console.log(Date.now())
// 1789719014228 Unix Epoch Time Seconds since Jan. 1st 1970

const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December" 
];

app.get('/months/v1', (req, res) => {
    const currentMonth = months[new Date().getMonth()];

    res.send({ data: currentMonth });
})

app.get('/months/v2', (req, res) => {
    const currentMonth = new Date().toLocaleDateString("en-uk", { month: "long" });

    res.send({ data: currentMonth });
});

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

app.get('/days/v1', (req, res) => {
    const currentDay = days[new Date().getDay()];

    res.send({ data: currentDay });
})

app.get('/days/v2', (req, res) => {
    const currentDay = new Date().toLocaleDateString('en-uk', { weekday: 'long' });
    
    res.send({ data: currentDay });
});




const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
        return;
    }
    console.log(`this server is running on port: ${PORT}`);
})