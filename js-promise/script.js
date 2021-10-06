let promise = fetch('https://raw.githubusercontent.com/mdn/learning-area/master/javascript/asynchronous/promises/coffee.jpg')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP errot! status: ${response.status}`);
        } else {
            return response.blob();
        }
    })
    .then(myBob => {
        let objectURL = URL.createObjectURL(myBob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    })
    .catch(e => {
        console.log('There has been a problem with your fetch operation:' + e.message);
    });