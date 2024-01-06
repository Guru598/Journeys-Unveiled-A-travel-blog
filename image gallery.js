var imgfullbox = document.getElementById("imgfullbox");
var imgfull = document.getElementById("imgfull");

function openFullImg(pic) {
    console.log("Opening full image");
    imgfullbox.style.display = "flex";
    imgfull.src = pic;
}

function closeFullImg() {
    console.log("Closing full image");
    imgfullbox.style.display = "none";
}
