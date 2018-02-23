const ul = document.getElementById('data');
const url = "https://data.baltimorecity.gov/resource/citations.json";

//helper function to create a node based off of an element.
function createNode(element){
  return document.createElement(element);
}

//helper function to add the node to it's parent.
function append(parent, el){
  return parent.appendChild(el);
}

//javascript machine br0ke
ul.innerHTML('content');

fetch(url).then(toSite =>{}).then(response =>{
  if(response.ok && response.status === 200){
    return response.json;
  }
}){

})
