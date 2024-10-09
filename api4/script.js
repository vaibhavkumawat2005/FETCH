const button = document.getElementById("fetch");
const container = document.getElementById("user-container");

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
           
            container.innerHTML = '';

            
            data.forEach((post) => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("user-card");
                container.innerHTML += `   
                    <div>
                        <p><strong>UserId:</strong> ${post.userId}</p>
                        <p><strong>Id:</strong> ${post.id}</p>
                        <p><strong>Title:</strong> ${post.title}</p>
                        <hr/>
                    </div>`;
            });
        })
        .catch((error) => {
            console.log(error);
        });
});
