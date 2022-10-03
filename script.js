const url = "data.json";
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    data.forEach((element) => {
      document.querySelector(".section-songs").innerHTML += `        
    <div class="item item${element.id}">
    <img src="${element.imagesrc}" alt="#" />
    <h3>${element.nameofsong}</h3>
    <a href="${element.audiosrc}">Download</a>
    </div>`;
    });
  });
//

const addElements = () => {
  if (valueInput != "" && textElement != "") {
  let ds = document.getElementById("displayTag");
  let valueInput = document.getElementById("valueInput").value;
  let textElement = document.getElementById("textAreaBox").value;
  let finalText = document.createTextNode(textElement);
  let createElementValue = document.createElement(valueInput);
  createElementValue.classList.add("hello");
  createElementValue.appendChild(finalText);
  
    if (valueInput === "div" || "section") {
   
    
      createElementValue.classList.toggle("hello-section");
    }
    console.log(textElement);
    ds.append(createElementValue);
    // console.log(ds);
    document.getElementById("valueInput").value = "";
    document.getElementById("textAreaBox").value = "";
  } else {
    alert("you have to write in each input!!");
  }
};
let btnAdd = document.getElementById("addElements");
btnAdd.addEventListener("click", addElements);

//
