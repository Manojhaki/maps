
const storyList = document.querySelector('ul');


function myClick(){
var value = document.getElementById('search').value;

let url = "https://places.cit.api.here.com/places/v1/autosuggest?at=39.3531,76.4813&q="+value+"&app_id=FoKHzrsTs5Tluq1scBL2&app_code=yXd0cVUSlRkdRkSCpj3_jA";
fetch(url).then(r=>{
  return r.json();
})
.then(jsonData => {

  let theResult=jsonData.results;
//start
  theResult.forEach(item=>{

    let itemList =document.createElement('li');

    itemList.innerHTML='<a href="' + item.href+'">"' + item.title+'"'+"</a>";

    storyList.appendChild(itemList);

   });
document.clear();
})

.catch(e => {
    console.log(`An error occurred: ${e}`);
});
}
