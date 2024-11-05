(async () => {

    const button = document.querySelector('button')
    const h3 = document.querySelector('h3')
    const h4 = document.querySelector('h4')

    button.addEventListener('click', async () => {
        const result = await fetch('/api/v1/random-joke')
        const { joke, punchline } = await result.json()
        h3.textContent = joke
        h4.textContent = punchline
    })


})()