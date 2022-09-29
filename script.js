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

function upload(){
  var imgcanvas = document.getElementById("canv1");
  var fileinput = document.getElementById("finput");
  var image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas);
}
//

