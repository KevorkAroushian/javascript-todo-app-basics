let input =
    document.getElementById("taskInput");

let button =
    document.getElementById("addBtn");

let tasks =
    document.getElementById("tasks");

button.addEventListener("click",function()
    {
        let paragraph =
            document.createElement("p");

        paragraph.textContent =
            input.value;

        let deleteButton =
            document.createElement("button")

        deleteButton.textContent=
            "Delete";

        deleteButton.addEventListener(
            "click",
            function()
            {
                paragraph.remove();
            }
        );

        paragraph.appendChild(deleteButton);

        tasks.appendChild(paragraph);

        input.value = "";
    }
);