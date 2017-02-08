console.log('Loaded!');
var nameInput=document.getElementById("name");
var name=nameInput.value;
var submit=document.getElementById("submit_butn");
submit.onclick=function(){
    var names=['name1','name2','name3'];
    var list="";
    for(var i=0;i<names.length;i++){
    list+= '<li>' +name[i]+ '</li>';
}
var ul = document.getElementById('namrlist');
ui.innerHTML=list;
};