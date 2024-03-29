let myHeading = document.querySelector("h1");
//首先用 querySelector() 函数获取标题的引用，并把它储存在 myHeading 变量中;
//之后，把 myHeading 变量的属性 textContent （标题内容）修改为“Hello world!”
myHeading.textContent = "Hello world!";
/*document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼。");
});
*/

let myImage = document.querySelector("img");
//首先把 <img> 元素的引用存放在 myImage 变量里,然后将这个变量的 onclick 事件与一个匿名函数绑定。
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/teenage.jpg") {
    myImage.setAttribute("src", "images/dune.jpg");
  } else {
    myImage.setAttribute("src", "images/teenage.jpg");
  }
};

let myButton = document.querySelector("button");

/*
function setUserName() {
  let myName = prompt("请输入你的名字。");
  localStorage.setItem("name", myName);
  myHeading.textContent = "酷毙了，" + myName;
}
*/

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "酷毙了，" + myName;
  }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "酷毙了，" + storedName;
}

myButton.onclick = function () {
  setUserName();
};