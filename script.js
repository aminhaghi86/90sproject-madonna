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
  let valueInput = document.getElementById("valueInput").value;
  let textElement = document.getElementById("textAreaBox").value;
  if (valueInput != "" && textElement != "") {
    let ds = document.getElementById("displayTag");
    let finalText = document.createTextNode(textElement);
    let createElementValue = document.createElement(valueInput);
    createElementValue.classList.add("hello");
    createElementValue.appendChild(finalText);

    if (valueInput === "div" || valueInput==="section") {
      let widthSD = prompt("Please Enter Width in Pixel");
      let heightSD = prompt("Please Enter Height in Pixel");
      let backGrundColor = prompt("Please Enter BackgroundColor");
      console.log(widthSD);
      console.log(heightSD);
      console.log(backGrundColor);
      // createElementValue.classList.toggle("hello-section");
      
      createElementValue.style.width = `${widthSD}px`;
      createElementValue.style.height = `${heightSD}px`;
      createElementValue.style.backgroundColor = `${backGrundColor}`;
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
