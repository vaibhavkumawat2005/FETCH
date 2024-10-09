const button = document.getElementById("fetch");
const container = document.getElementById("user-container");

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
           
            container.innerHTML = '';

            
            data.forEach((post) => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("user-card");
                container.innerHTML += `   
                   <h3>${post.name}</h3>
            <p><strong>Username:</strong> ${post.username}</p>
            <p><strong>Email:</strong> ${post.email}</p>
            <p><strong>Phone:</strong> ${post.phone}</p>
            <p><strong>Website:</strong> <a href="http://${post.website}" target="_blank">${post.website}</a></p>
            <p><strong>Company:</strong> ${post.company.name}</p>
            <hr/>`;
            });
        })
        .catch((error) => {
            console.log(error);
        });
});
