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
    const adds = document.createElement("div");
    adds.innerHTML = `
         <div class="mt-3  font-medium hover:bg-[#15803D] hover:text-white rounded-md">
            <li id="${element.id}" class="list-none py-2 px-2 cursor-pointer"><a>${element.category_name}</a></li>
         </div>
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
  console.log(id);
  const url = ` https://openapi.programming-hero.com/api/category/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => cardCointener(data.plants));
};

const cardCointener = (allImg) => {
  console.log(allImg);
  const cointnarsCard = document.getElementById("cardCointener");
  cointnarsCard.innerHTML = "";
  allImg.forEach((dates) => {
    console.log(dates);
    const cardes = document.createElement("div");
    cardes.innerHTML = `
                 <div class="border-1 border-gray-300 rounded-md rounded-t-lg max-w-[650px">
                        <div class="bg-[#FFFFFF]  rounded-md rounded-t-lg shadow-md">
                            <img class="w-full h-[270px] rounded-t-lg cover" src="${dates.image}" alt="">
                           <div class="p-4">
                             <h2 class="text-xl font-bold mt-3">${dates.name}</h2>
                            <p class="">${dates.description}</p>

                             <div class="flex justify-between items-center mt-3">
                                <button class="btn">Fruit Tree</button>
                                 <h2 class="font-bold">$ ${dates.price}</h2>
                             </div>
                             <button class="btn w-full mt-4">Add To Card</button>
                        </div>
                           </div>
                   </div>
    `;
    cointnarsCard.append(cardes);
  });
};
catagori();
