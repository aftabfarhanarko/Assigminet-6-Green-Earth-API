

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
         <div class="mt-3  font-medium">
            <p class="">${element.category_name}</p>
         </div>
        `;
        cointnars.append(adds);
  });
};
catagori();
