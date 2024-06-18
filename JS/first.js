//Findiing html tags
const findElements = document.getElementsByTagName("h2");
//console.log(findElements);

//finding html tags with text node by loop
for (let i = 0; i < findElements.length; i++) {
  //console.log(findElements[i]);
}

//finding li tag from html documents
const liTags = document.getElementsByTagName("li");
//console.log(liTags);

//finding html elemens by id
const id1 = document.getElementById("heading1");
//console.log(id1);

//Query selector
const queryClass = (document.querySelector(".list-class").innerText =
  "First List");

//console.log(queryClass);
