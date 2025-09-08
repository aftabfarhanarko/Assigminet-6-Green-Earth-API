let priceTotal = 0;
const catagori = () => {
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => addCarrigoy(data.categories));
};

const spiners  = (str) => {
  if(str == true){
    document.getElementById("spinerLoding").classList.remove("hidden");
    document.getElementById("mainCointner").classList.add("hidden");
  }else{
    document.getElementById("mainCointner").classList.remove("hidden");
    document.getElementById("spinerLoding").classList.add("hidden");
  }
}

const addCarrigoy = (cata) => {
  const cointnars = document.getElementById("titleCointnar");
  cointnars.innerHTML = "";
  cata.forEach((element) => {
    const adds = document.createElement("ul");
    adds.innerHTML = `
         <ul class="mt-3 font-medium hover:bg-[#15803D] hover:text-white rounded-md  ">
            <li id="${element.id}" class="list-none py-2 px-5 cursor-pointer
            "><a>${element.category_name}</a></li>
         </ul>
        `;
    cointnars.append(adds);
  });
  cointnars.addEventListener("click", (e) => {
    const alls = document.querySelectorAll("li");
    alls.forEach((puts) => {
      puts.classList.remove("bg-[#15803D]");
      puts.classList.remove("rounded-md");
      puts.classList.remove("text-white");
    });

    if (e.target.localName === "li") {
      e.target.classList.add("bg-[#15803D]");
      e.target.classList.add("text-white");
      e.target.classList.add("rounded-md");
      e.target.classList.add("w-full");
      cardsApi(e.target.id);
    }
  });
};

const cardsApi = (id) => {
  spiners(true);
  const url = ` https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => cardCointener(data.plants));
};

const cardCointener = (allImg) => {
  const cointnarsCard = document.getElementById("cardCointener");
  cointnarsCard.innerHTML = "";
  allImg.forEach((dates) => {
    const cardes = document.createElement("div");
    cardes.innerHTML = `
                 <div class="border border-gray-300 rounded-md rounded-t-lg flex flex-col h-full ">
                        <div class="bg-white  rounded-md rounded-t-lg shadow-md flex flex-col flex-grow ">
                            <img class="w-full h-[420px] rounded-t-lg object-cover" src="${dates.image}" alt="">
                            <div class="p-4 flex flex-col flex-grow">
                                 <h2 onclick="myModalApi('${dates.id}')" id="${dates.id}" class="text-xl  font-bold  cursor-pointer text-gray-700">${dates.name}</h2>
                                 <p class="font-medium  flex-grow">${dates.description}</p>
                             <div class="flex justify-between items-center ">
                                  <button class="btn rounded-full text-green-600 bg-[#DCFCE7] text-[19px">Fruit Tree</button>
                                   <h2 class="font-bold"><span class="text-1xl font-extrabold">৳</span> <span>${dates.price}</span></h2>
                             </div>
                                 <button id="addNow" class="mt-2 btn w-full  bg-[#15803d] rounded-full text-white text-xl font-medium addCardBtns">Add To Card</button>
                           </div>
                        </div>
                   </div>
    `;
    cointnarsCard.append(cardes);
    spiners(false);
  });
};

const myModalApi = (id) => {
  my_modal_3.showModal();
  const myUrl = `https://openapi.programming-hero.com/api/plant/${id}`;
  fetch(myUrl)
    .then((res) => res.json())
    .then((ubdate) => modal(ubdate.plants));
};

const modal = (data) => {
  const modalCointadd = document.getElementById("addDetlise");
  modalCointadd.innerHTML = "";
  const creats = document.createElement("div");
  creats.innerHTML = `
  <div class="space-y-5 flex flex-col h-full">
   <form method="dialog">
       <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
   <h2 class="text-xl font-semibold">${data.name}</h2>
    <img class="h-[400px] w-full object-cover rounded-lg" src="${data.image}">
     <div>
        <h2> <span class="text-xl font-semibold"> Category :</span>${data.category}</h2>
        <h4><span class="text-xl font-semibold"> Price : ৳</span>${data.price}</h4>
        <p><span class="text-xl font-semibold"> Description :</span>${data.description}</p>
     </div>
  </div>
     
  `;
  modalCointadd.appendChild(creats);
};

const mainCointnar = document.getElementById("cardCointener");

mainCointnar.addEventListener("click", (e) => {
  if (e.target.innerText === "Add To Card") {
    const idName = e.target.parentNode.children[0].innerText;

    const idPrice =
      e.target.parentNode.children[2].children[1].children[1].innerText;
    const priceNumber = parseInt(idPrice);
    priceTotal = priceTotal + priceNumber;
    console.log(priceTotal);
    let totals = document.getElementById("totalCOunt");
    totals.innerText = `Total : ৳${priceTotal}`;

    // const clear = document.getElementById("clearBtn");
    // clear.addEventListener("click", (e) => {
    //   let pria =
    //     e.target.parentNode.parentNode.children[0].children[1].children[1]
    //       .innerText;
    //   let priceConvart = parseInt(pria);
    //   console.log(priceConvart);
    // });

    const divPush = document.getElementById("newaddesDiv");
    const creatPushDiv = document.createElement("div");
    creatPushDiv.innerHTML = `
        <div  class="border-1 flex justify-between items-center py-2 px-2 rounded-md mt-3 bg-[#F5FFF6] border-gray-200">
             <div class="">
                <h2 class="text-xl font-medium">${idName}</h2>
                <p class="mt-2 font-medium"><span class="text-xl font-extrabold">৳</span class="text-xl font-extrabold"><span>${idPrice}</span> </p>
              </div>
            <div id="clearBtn" class="text-2xl"><i class="ri-close-line"></i></div>
        </div>
        
    `;
    divPush.appendChild(creatPushDiv);
  }
});

catagori();
