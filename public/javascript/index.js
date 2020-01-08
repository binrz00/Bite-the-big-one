const newBurger = document.getElementById("newBurger");
const makeButton = document.getElementById("makeBurger");
const whole = document.getElementById("whole");
const eaten = document.getElementById("eaten");
const devourButton = document.getElementById("devour");
makeButton.addEventListener("click",function(){
    console.log(newBurger.value);
})
axios.get("api/burgers").then(function(res){
    console.log(res)
})

