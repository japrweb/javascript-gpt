const API_KEY =
'sk-mBmvF4owvhq9KGJiEoPWT3BlbkFJQqMxVFffYw7McDOCi5'



async function getCompletion() {
    const res = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + API_KEY
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: 'Dame un ejemplo aleatorio de un lenguaje de programación',
            max_tokens: 16,
        })
    })

    const data = await res.json()
    console.log(data);
}

getCompletion()