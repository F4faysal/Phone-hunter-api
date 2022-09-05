// const lodePhone = () => {
//   const url = " https://openapi.programming-hero.com/api/phones?search=iphone";
//   fetch(url)
//     .then((rest) => rest.json())
//     .then((data) => console.log(data.data));
// };

// lodePhone();

const lodePhone = async () => {
  const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data);
  console.log(data.data)
};
const displayPhone = (phones) => {
  const phoneContner = document.getElementById("display-phone");
  phoneContner.textContent = "";
  //   only 18 phone shoiw
  phones = phones.slice(0, 18);


  // //phone scearch not fund
  // const nophone = document.getElementById("no-phone");
  // if (phones.length === 0) {
  //   nophone.classList.remove("d-none");
  // }
  // //all phone
  // else {
  //   nophone.classList.add("d-none");
  // }

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

  //stop loder
  // toggoleSpring(false);
};

// const toggoleSpring = (loding) => {
//   const loder = document.getElementByI("loder");
//   if (loding) {
//     loder.classList.remove("d-none");
//   } else {
//     loder.classList.add("d-none");
//   }
// };

document.getElementById("Phone-Search-btn").addEventListener("click", () => {
  //start loder
  // toggoleSpring(true);
  const searchValue = document.getElementById("phone-search-input");
  const searchRasult = searchValue.value;
  console.log(searchRasult);
  
});

lodePhone();

