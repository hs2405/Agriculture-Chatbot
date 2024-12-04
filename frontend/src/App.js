const root = document.getElementById('root');
root.innerHTML = "<h1>Hello from the Frontend!</h1>";
fetch('http://localhost:5000/api')
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('root').innerHTML = `<h1>${data.message}</h1>`;
    });
