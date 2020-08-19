let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  //moving user input into the search query
var input=document.getElementById('inputid');
  //add filter otptions here then append to end of query with "+"
//looking for way to add filter through checkbox
//gives all filters an undefined value
var stringsum=undefined;
var final="";
var stringsum1=undefined;
var stringsum2=undefined;
var stringsum3=undefined;
var stringsum4=undefined;
var stringsum5=undefined;
var stringsum6=undefined;
var stringsum7=undefined;
var stringsum8=undefined;
var stringsum9=undefined;
var stringsum10=undefined;
//these will change the value if the corresponding checkbox is checked
//if not they remain undefined
var filtert=document.getElementById('filter1')
if (filtert.checked) {
   stringsum1 = document.getElementById('filter1');
   stringsum=1;
}
var filtert=document.getElementById('filter2')
if (filtert.checked) {
  stringsum2= document.getElementById('filter2');
  stringsum=1;
}
var filtert=document.getElementById('filter3')
if (filtert.checked) {
  stringsum3= document.getElementById('filter3');
  stringsum=1;
}
var filtert=document.getElementById('filter4')
if (filtert.checked) {
  stringsum4 = document.getElementById('filter4');
  stringsum=1;
}
var filtert=document.getElementById('filter5')
if (filtert.checked) {
  stringsum5 = document.getElementById('filter5');
  stringsum=1;
}
var filtert=document.getElementById('filter6')
if (filtert.checked) {
  stringsum6= document.getElementById('filter6');
  stringsum=1;
}
var filtert=document.getElementById('filter7')
if (filtert.checked) {
  stringsum7= document.getElementById('filter7');
  stringsum=1;
}
var filtert=document.getElementById('filter8')
if (filtert.checked) {
  stringsum8= document.getElementById('filter8');
  stringsum=1;
}
var filtert=document.getElementById('filter9')
if (filtert.checked) {
  stringsum9= document.getElementById('filter9');
  stringsum=1;
}
var filtert=document.getElementById('filter10')
if (filtert.checked) {
  stringsum10= document.getElementById('filter10');
  stringsum=1;
}
//stringsum=[stringsum1.value,stringsum2.value,stringsum3.value,stringsum4.value,stringsum5.value,stringsum6.value,stringsum7.value,stringsum8.value,stringsum9.value,stringsum10.value].join('');
//var stringsum2='';
//adds all vars to an array
var data = [stringsum1, stringsum2, stringsum3, stringsum4, stringsum5, stringsum6, stringsum7, stringsum8, stringsum9, stringsum10];
//this function will remove any element in the array that has an undefined value
data = data.filter(function( element ) {
   return element !== undefined;
});
//this loop adds all the filters in the array into one string ready to be inserted into the query
for(var i=0; i<data.length;i++){
   final+=data[i].value;
}
console.log(final);
console.log(stringsum);


  let APP_ID="2afa29fc";
  let API_KEY="3063fe6d505174b0306c307e4268fe78";
  //if the string sum has elements in it then the first block
  //else you just search for a recipe with no filters
if(stringsum!==undefined){
  let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=`+input.value+final);
    let data=await response.json()
    console.log(response)
    useApiData(data)
  }else{
    let response = await fetch(`https://api.edamam.com/search?app_id=${APP_ID}&app_key=${API_KEY}&q=`+input.value);
    let data=await response.json()
    console.log(response)
    useApiData(data)}

}




//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){

  for (var i = 0; i < data.hits.length; i++) {

document.querySelector("#content").innerHTML+=`


<div class="w3-card-4">
    <div class="card-group">
    <div class="w3-container w3-center">
      <img class="card-img-top" src="${data.hits[i].recipe.image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${data.hits[i].recipe.label}</h5>
        <p class="card-text">${data.hits[i].recipe.healthLabels}</p>
        <br> Calories:
    ${data.hits[i].recipe.calories}
        </p>
        <a href="${data.hits[i].recipe.url}" class="w3-button w3-green">Source</a>
      </div>
    </div>
    </div>
    </div>

    <pre class="tab"></pre>

`
document.querySelector("#resultnum").innerHTML=`<p>Number of Results: </p>${data.hits.length}`

}

}
