const newBurger = document.getElementById("newBurger");
const makeButton = document.getElementById("makeBurger");
const whole = document.getElementById("whole");
const eaten = document.getElementById("eaten");
const devourButton = document.getElementById("devour");
makeButton.addEventListener("click",function(){
    console.log(newBurger.value);
})
showBurgers();
function showBurgers(){
// axios.get("api/burgers").then(function(res){
//     console.log(res)
// })
//test sample
const burgers = [{id:1 ,burger_name:"BigBoy",devoured:false},{id:2 ,burger_name:"BigBoy2",devoured:false},{id:3 ,burger_name:"BigBoy3",devoured:true}]
for(let i = 0; i<burgers.length;i++){
if (burgers[i].devoured === false){
    let html = `${burgers[i].id}. ${burgers[i].burger_name}`;
const button = document.createElement("button");
button.setAttribute("id","devour");
button.setAttribute("type","button");
button.innerHTML = "Eat it";
    whole.append(html);
    whole.append(button);
   whole.append(document.createElement("br"));
}
else{
    let html = `${burgers[i].id}. ${burgers[i].burger_name}`;
    eaten.append(html)
 eaten.append(document.createElement("br"))   
}}
}

