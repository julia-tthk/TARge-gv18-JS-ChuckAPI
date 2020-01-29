//select a button waiting for click
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(event){
    const numberOfJokes = document.querySelector('input[type="number"]').value;
    fetch(`http://api.icndb.com/jokes/random/${numberOfJokes}`)
    .then(response => {
        console.log(response);
        return response.json();        
    })


    event.preventDefault();
}