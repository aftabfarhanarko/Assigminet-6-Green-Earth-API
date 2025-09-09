 mainCointnar.addEventListener("click", (e) => {
  if (e.target.innerText === "Add To Card") {
   const idName = e.target.parentNode.children[0].innerText;

    const idPrice =
      e.target.parentNode.children[2].children[1].children[1].innerText;
     alert('Find This');
      const priceNumber = parseInt(idPrice);
    priceTotal = priceTotal + priceNumber;
    console.log(priceTotal);
    let totals = document.getElementById("totalCOunt");
    totals.innerText = `Total : ৳${priceTotal}`;
    
    const divPush = document.getElementById("newaddesDiv");
    const creatPushDiv = document.createElement("div");
    creatPushDiv.innerHTML = `
        <div id="events"  class="border-1 flex justify-between items-center py-2 px-2 rounded-md mt-3 bg-[#F5FFF6] border-gray-200">
             <div class="">
                <h2 class="text-[17px] md:text-xl font-medium">${idName}</h2>
                <p class="mt-2 font-medium"><span class="text-xl font-extrabold">৳</span class="text-[17px] md:text-xl  font-extrabold"><span>${idPrice}</span> </p>
              </div>
            <p id="clearBtn" class="text-2xl">❌</p>
        </div>
        
    `;
    divPush.appendChild(creatPushDiv);
  }

});