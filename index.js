// Add your code here
function submitData (name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            "Accept" : "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    })
    .then(r => r.json())
    .then(data => {
        const body = document.querySelector('body');
        body.append(data.id);
    })
    .catch(function (error){
        const body = document.querySelector('body');
        body.append(error);
    })
}
