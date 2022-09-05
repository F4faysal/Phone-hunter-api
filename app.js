// const lodePhone = () => {
//   const url = " https://openapi.programming-hero.com/api/phones?search=iphone";
//   fetch(url)
//     .then((rest) => rest.json())
//     .then((data) => console.log(data.data));
// };

// lodePhone();

const lodePhone = async (searchText) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data);
};
const displayPhone = (phones) => {
  const phoneContner = document.getElementById("display-phone");
  phoneContner.innerHTML = "";
  phones.forEach((phone) => {
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("col");
    phoneDiv.innerHTML = `
    <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="" />
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">
               ${phone.brand}
            </p>
        </div>
    </div>
    `;
    phoneContner.appendChild(phoneDiv);
  });
};

document.getElementById("Phone-Search-btn").addEventListener("click", () => {
  const searchValue = document.getElementById("phone-search-input");
  const searchRasult = searchValue.value;
  lodePhone(searchRasult);
  //   console.log(searchRasult);
  searchValue.value = "";
});
lodePhone("a");
