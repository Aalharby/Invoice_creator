let servBtnEl = document.querySelector(".services-btn")
let ulEl = document.querySelector(".services")
let washEl = document.getElementById("wash-btn")
let mowEl = document.getElementById("mow-btn")
let pullEl = document.getElementById("pull-btn")
let totalEl = document.getElementById("price")

let services = [
     {
        name: "Wash Car",
        price: 0
        },
     {
        name: "Mow Lawn",
        price: 0
        },
     {
    name: "Pull Weeds",
    price: 0
    },
];



let btnTxt = ""
let servTxt = ""
let total = 0

let remove = `<button id="rmBtn" type="text">remove</button>`

function start(){
for(let i = 0; i< services.length; i++){   
    
    total += services[i].price
    servTxt += `<li class= "allList"> ${services[i].name}    $${services[i].price} ${remove}</li>`   
}
     ulEl.innerHTML = servTxt 
     totalEl.textContent = "$ " + total
}
start()
 
 

function emptypage(){
    servTxt = ""
    ulEl.innerHTML = servTxt 
}


washEl.addEventListener("click", function (){
     emptypage()
     services[0].price += 10
     start()     
})

mowEl.addEventListener("click", function (){
     emptypage()
     services[1].price += 20
     start()  
     
})

pullEl.addEventListener("click", function (){
     emptypage()
     services[2].price += 30
     start()  
     
})

function reset(){
    emptypage()
    for(let i = 0; i < services.length; i++){
        services[i].price = 0
    }
    total = 0
    start()
}

let allSubjectName = document.querySelectorAll(".allList");
   for (let i = 0; i <allSubjectName.length; i++){
      allSubjectName[i].addEventListener("click", function(){
         this.classList.toggle("active");
      });
      allSubjectName[i].querySelector("button").addEventListener("click",
      function(){
         this.closest(".allList").remove();
      });
   }