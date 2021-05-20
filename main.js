document.body.style.height = "10000px";
document.body.style.margin = 0;

let colorChangeDiv = document.createElement("div");
colorChangeDiv.style.width = "100%";
colorChangeDiv.style.position = "fixed";
document.body.appendChild(colorChangeDiv);

let colorChangeDiv2 = document.createElement("div");
colorChangeDiv2.style.width = "100%";
colorChangeDiv2.style.position = "fixed";
colorChangeDiv2.style.top = "50%";
document.body.appendChild(colorChangeDiv2);

let size = 1;
let size2 = 1;
let flag = true;

const changeSizeAndColor = () => {
  if (size >= window.innerHeight / 2) {
    flag = !flag;
  } else if (size <= 0) {
    flag = !flag;
  }

  if (flag) {
    colorChangeDiv.style.height = size + "px";
    colorChangeDiv.style.backgroundColor = "blue";
    size += 10;

    size2 = 0;
    colorChangeDiv2.style.backgroundColor = "red";
  } else {
    colorChangeDiv.style.height = size + "px";
    colorChangeDiv.style.backgroundColor = "red";
    size -= 10;

    colorChangeDiv2.style.height = size2 + "px";
    colorChangeDiv2.style.backgroundColor = "blue";
    size2 += 10;
  }
};

window.addEventListener("scroll", changeSizeAndColor);
