const button = document.getElementById("fetch");
const container = document.getElementById("user-container");

button.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
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
                        <p><strong>NAme:</strong> ${post.name}</p>
                        <p><strong>Email:</strong> ${post.email}</p>
                        <p><strong>Password:</strong> ${post.body}</p>
                        <hr/>
                    </div>`;
            });
        })
        .catch((error) => {
            console.log(error);
        });
});
