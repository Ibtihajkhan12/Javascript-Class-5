
// var arr = ["abc" ,"123", "xyz"]

// arr.splice(0,1,"Urdu" ,"Bio")
// console.log("I" , arr)
// alert( arr);




// var arr =["English" , "Urdu" ,"Math" , "Physics" , "Science" , "PST"]
// arr.slice(3,4 )
// console.log(arr)







var arr =[ " Salam " ,"Hello" , "Bhai" , "Hi" ];
alert(arr + " (Indexing is " +`${0+ 'to' + (arr.length -1)})`);
var userwill = prompt("What you want to do ? , either Slice or Splice");

 if(userwill == "Slice"){
    var startIndex = Number(prompt(" Enter the starting Index."));
    var endIndex = Number(prompt("Enter the End Index"));
    var slicemethod = arr.slice(startIndex,endIndex)
    alert(slicemethod);
 }
 else if(userwill == "Splice"){
    var startIndex = Number(prompt("Enter the Starting Index"));
    var deleteIndex = Number(prompt("Enter the Deleted Index."));
    var  value = prompt("Enter the value you wannna add");
    arr.splice(startIndex,deleteIndex,value)
    alert(arr);
 }








