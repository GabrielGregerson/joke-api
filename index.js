const path = require('path')
const express = require('express')
const app = express()
const port = 3000

const root = path.join(__dirname, 'public')

const jokes = [
    {
        id: 1,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field."
    },
    {
        id: 2,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired."
    },
    {
        id: 3,
        joke: "What do you call fake spaghetti?",
        punchline: "An impasta."
    },
    {
        id: 4,
        joke: "Why don't skeletons fight each other?",
        punchline: "They don't have the guts."
    },
    {
        id: 5,
        joke: "What do you call cheese that isn't yours?",
        punchline: "Nacho cheese!"
    }
];

app.use(express.json())
app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile('index.html', { root })
})

app.get('/api/v1/random-joke', (request, response) => {
    const ranNum = Math.floor(Math.random() * 9)
    response.send(jokes[ranNum]) 
})

app.listen(port, () => console.log(`http://localhost:${port}/`))