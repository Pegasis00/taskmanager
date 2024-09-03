const title = document.getElementById("title");
const description = document.getElementById("description");
const form = document.querySelector("form");
const taskContainer = document.getElementById("task-container");

const tasks = [];

function showalltasks() {
    taskContainer.innerHTML = '';

    tasks.forEach((value, index) => {
        const div = document.createElement("div");
        div.setAttribute("class", "task");

        const innerdiv = document.createElement("div");
        div.append(innerdiv);

        const p = document.createElement("p");
        p.innerText = value.title;
        innerdiv.append(p);

        const span = document.createElement("span");
        span.innerText = value.description;
        innerdiv.append(span);

        const btn = document.createElement("button");
        btn.setAttribute("class", "deletebtn");
        btn.innerText = "×";

        btn.addEventListener("click", () => {
            deleteTask(index);
        });

        div.append(btn);
        taskContainer.append(div);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    showalltasks();
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    tasks.push({
        title: title.value,
        description: description.value,
    });

    title.value = '';
    description.value = '';

    showalltasks();
});
