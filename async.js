// Callback
asyncFunc1((err, result1) => {
    if (err) {
        console.log(err);
    }
    asyncFunc2((err, result2) => {
        if (err) {
            console.log(err);
        }
        asyncFunc3((err, result3) => {
            if (err) {
                console.log(err);
            }
        }, result2)
    }, result3)
})

// Promise
asyncFunc1()
    .then(result => {
        return asyncFunc2(result)
    })
    .then(result => {
        return asyncFunc3(result)
    })
    .catch(err => {
        console.log(err);
    })

// async/await
async function asyncMain() {
    try {
        const result = await asyncFunc1()
        result = await asyncFunc2(result)
        result = await asyncFunc3(result)
    } catch (e) {
        console.error(err);
    }
}