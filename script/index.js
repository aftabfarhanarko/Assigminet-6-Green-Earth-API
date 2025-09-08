const catagori = () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  fetch(url)
    .then((res) => res.json())
    .then((data) => addCarrigoy(data.categories));
};

const addCarrigoy = (cata) => {
  const cointnars = document.getElementById("titleCointnar");
  cointnars.innerHTML = "";
  cata.forEach((element) => {
    const adds = document.createElement("ul");
    adds.innerHTML = `
         <ul class="mt-3 font-medium hover:bg-[#15803D] hover:text-white rounded-md  flex">
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
      cardsApi(e.target.id);
    }
  });
};

const cardsApi = (id) => {
  // console.log(id);
  const url = ` https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => cardCointener(data.plants));
};

const cardCointener = (allImg) => {
  // console.log(allImg);
  const cointnarsCard = document.getElementById("cardCointener");
  cointnarsCard.innerHTML = "";
  allImg.forEach((dates) => {
    modalCointnar(dates.id);
    const cardes = document.createElement("div");
    cardes.innerHTML = `
                 <div class="border-1 border-gray-300 rounded-md rounded-t-lg ">
                        <div class="bg-[#FFFFFF]  rounded-md rounded-t-lg shadow-md">
                            <img class="w-full h-[270px] rounded-t-lg cover" src="${dates.image}" alt="">
                           <div class="p-4">
                             <h2 id="modalClick" class="text-xl font-bold py-4">${dates.name}</h2>
                            <p class="font-medium">${dates.description}</p>

                             <div class="flex justify-between items-center mt-3">
                                <button class="btn rounded-full text-green-600 bg-[#DCFCE7] text-[19px">Fruit Tree</button>
                                 <h2 class="font-bold"><span class="text-1xl font-extrabold">৳</span> <span>${dates.price}</span></h2>
                             </div>
                             <button id="addNow" class="btn w-full mt-6 bg-[#15803d] rounded-full text-white text-xl font-medium addCardBtns">Add To Card</button>
                        </div>
                           </div>
                   </div>
    `;
    cointnarsCard.append(cardes);
  });
  // modalCointnar(allImg.id);
  sideBar(allImg);
};

const mainCointnar = document.getElementById("cardCointener");
mainCointnar.addEventListener("click", (e) => {
  if (e.target.innerText === "Add To Card") {
    const idName = e.target.parentNode.children[0].innerText;
    const idPrice = e.target.parentNode.children[2].children[1].children[1].innerText;
   
    const total = document.getElementById("clearBtn");
    console.log(total);


    const divPush = document.getElementById("newaddesDiv");
    const creatPushDiv = document.createElement("div");
    creatPushDiv.innerHTML = `
        <div  class="border-1 flex justify-between items-center py-5 px-3 rounded-md mt-3 bg-[#F5FFF6] border-gray-200">
             <div class="">
                <h2 class="text-xl font-medium">${idName}</h2>
                <p class="mt-2 font-medium"><span class="text-1xl font-extrabold">৳${idPrice}</span>
              </div>
            <p id="clearBtn" class="">❌ </p>
        </div>
    `;
    divPush.appendChild(creatPushDiv);
  }
});


const modalCointnar = (modal) => {
  const cointModalText = document.getElementById("modalClick");

  const modalUrl = `https://openapi.programming-hero.com/api/plant/${modal}`;
  fetch(modalUrl).then((res) => res.json());
  // .then(data => console.log(data));
};

catagori();
