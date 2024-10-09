const button = document.getElementById("fetch");
const container = document.getElementById("user-container");

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
           
            container.innerHTML = '';

            
            data.forEach((post) => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("user-card");
                container.innerHTML += `   
             <img src = ${post.url} onerror = ${post.thumbnailUrl}></img>
        <p><strong>UserId:</strong> ${post.id}</p>
        <p><strong>Title:</strong> ${post.title}</p>
        <hr/>`
            });
        })
        .catch((error) => {
            console.log(error);
        });
});
