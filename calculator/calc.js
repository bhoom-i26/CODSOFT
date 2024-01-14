var star=document.getElementById("space");

function cancle(){
    star.value="";
}
function calculate( number){
   star.value +=number;
}

function answer(){
    var result=star.value;
    var result=eval(result);
    star.value =result;
}
