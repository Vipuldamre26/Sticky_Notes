let text = document.querySelector("textarea");
let parent = document.querySelector(".cards");
let btn = document.querySelector("button");
let inp = document.querySelector("#inp");
let notNote = document.querySelector(".notNote");

btn.addEventListener("click", () => {
    let div = document.createElement("div");
    if (text.value === "") {
        alert("Enter some text");
    } else {
        div.classList.add("card");
        div.style.backgroundColor = inp.value;
        parent.appendChild(div);

        
        let div1 = document.createElement("div");
        div1.classList.add("div1");
        let paragraph = document.createElement("p");
        paragraph.textContent = text.value;
        let closeButton = document.createElement("button");
        closeButton.classList.add("btn2");
        closeButton.textContent = "X";

        
        div1.appendChild(paragraph);
        div.appendChild(div1);
        div.appendChild(closeButton);

        text.value = "";
        notNote.style.display = "none";
    }

    removeItem(); 
});

parent.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn2")) {
        event.target.parentElement.remove();
        if (parent.children.length === 0) {
            notNote.style.display = "block";
        }
    }
});

