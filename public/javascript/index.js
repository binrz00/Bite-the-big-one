const newBurger = document.getElementById("newBurger");
const makeButton = document.getElementById("makeBurger");
const whole = document.getElementById("whole");
const eaten = document.getElementById("eaten");
makeButton.addEventListener("click", function () {
    axios.post("api/burger", { burger_name: newBurger.value }).then(function (res) {
        console.log(res)
        showBurgers();
    })
})
showBurgers();
function showBurgers() {
    whole.innerHTML = "";
    eaten.innerHTML = "";
    let html = "";
    axios.get("api/burger").then(function (res) {
        const burgers = res.data;
        for (let i = 0; i < burgers.length; i++) {
            if (burgers[i].devoured === false) {
                html = `${burgers[i].id}. ${burgers[i].burger_name}`;
                const button = document.createElement("button");
                button.setAttribute("class", "devour");
                button.setAttribute("type", "button");
                button.setAttribute("id", `${i + 1}`);
                button.innerHTML = "Eat it";
                button.addEventListener("click", function () {
                    eatBurger(this.id)
                })
                whole.append(html);
                whole.append(button);
                whole.append(document.createElement("br"));
            }
            else {
                html = `${burgers[i].id}. ${burgers[i].burger_name}`;
                eaten.append(html)
                eaten.append(document.createElement("br"))
            }
        }
    })
}

function eatBurger(id) {
    axios.put(`api/burger/${id}`).then((res) => {
        showBurgers()
    })
}