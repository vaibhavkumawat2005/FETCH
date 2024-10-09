const button = document.getElementById("fetch");
const container = document.getElementById("user-container");

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
           
            container.innerHTML = '';

            
            data.forEach((post) => {
                const userDiv = document.createElement("div");
                userDiv.classList.add("user-card");
                
                container.innerHTML += `   
                    <p><strong>Id:</strong> ${post.id}</p>
        <p><strong>Title:</strong> ${post.title}</p>
        <p><strong>Status:</status>${
          post.completed ? " ✔️ Completed" : " ❌ Not Completed"
        }
        <hr/>`;
            });
        })
        .catch((error) => {
            console.log(error);
        });
});
