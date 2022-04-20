let cities = ["Islambad","Faisalabd","Lahore","Bhakkar","Gujranwala","Sialkot","Gujrat"];
// const number = [10, 20, 30 , 40,50,60,70,80];
for (var i = 0; i < cities.length; i++) {
    cities[i];
    
    document.getElementById("statement").innerHTML += cities[i] +"<br>";
    document.getElementById("output").innerHTML += cities[i] +"<br>";
}
// for (var j = cities.length; j > 0; j++) {
//     cities[j];
    
//     document.getElementById("statement").innerHTML += cities[j] +"<br>";
//     document.getElementById("output").innerHTML += cities[j] +"<br>";
// }
function length() {
    
    document.getElementById("output").innerHTML = `The Lenght of Array is... ${cities.length}`;
}
function first() {
    
    document.getElementById("output").innerHTML = `The First element of Array is... ${cities[0]}`;
}
function last() {
    
    document.getElementById("output").innerHTML = `The Last element of Array is.. ${cities[cities.length -1]}`;
}
function push(){
    let res = document.getElementById("data").value;
    console.log(res);
    cities.push(res);
    document.getElementById("output").innerHTML = `Add new items to the end of an array is.... ${res}`;
    document.getElementById("statement").innerHTML += cities[i] +"<br>";
}
function pop(){
    // cities.pop();
    document.getElementById("output").innerHTML = `Remove items to the end of an array is.... ${cities[cities.length -1]}`;
    console.log(cities.pop());
    document.getElementById("statement").innerHTML = "";
    for (var l = 0; l < cities.length; l++) {
        cities[l];
        document.getElementById("statement").innerHTML += cities[l] +"<br>";
    }
}




// document.getElementById("alertNumber").onclick = function() {
//     alert("12345");
//     document.getElementById("statement").innerHTML = 'alert("12345");';
//     document.getElementById("output").innerHTML = "";
// }


function filter(){
    // let data1 = parseInt(document.getElementById("data").value);
    // console.log(data1);
    // cities[1].charAt(0)==cities[1].charAt(0)
    // let newdata = cities.filter(city => city[i].charAt(0) == cities[i].charAt(0));
    cities.filter(city=>
        {if(city[i].charAt(0)==city[j].charAt(0))
        return})
    console.log(newdata);
    // document.getElementById("output").innerHTML += newdata[j] + "<br>";
}

function shift(){
    // cities.shift();
    document.getElementById("output").innerHTML = "";

    console.log(cities.shift());
    document.getElementById("output").innerHTML += `Remove the first element of the array:.... ${cities[0]}`;
    document.getElementById("statement").innerHTML = "";
    for (var m = 1; m < cities.length; m++) {
        cities[m];
        document.getElementById("statement").innerHTML += cities[m] +"<br>";
    }
}
function unshift(){
    let data2 = document.getElementById("data").value;
    // console.log(data2);
    cities.unshift(data2);
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").innerHTML +=`Add new items to the start of an array is.... ${data2}`;
    document.getElementById("statement").innerHTML = "";
    for (var m = 0; m < cities.length; m++) {
        cities[m];
        document.getElementById("statement").innerHTML += cities[m] +"<br>";
    }
}
function chara(){
    // let newArray = cities.map(function(abc) {
    //    return abc.length;
    // })
    let newArray =cities.map(abc=>abc.length)
    document.getElementById("output").innerHTML = "";

    for (var s = 0; s < newArray.length; s++) {
        newArray[s];
        console.log(newArray[s]);
        document.getElementById("output").innerHTML += "There are "+ newArray[s] +" character in "+cities[s]+"<br>" ;
    } // document.getElementById("statement").innerHTML += cities[i] +"<br>";
}
function slice(){
    let arr = cities.slice(1, 3);
    document.getElementById("output").innerHTML = "";
    for (var m = 0; m < arr.length; m++) {
        arr[m];
        document.getElementById("output").innerHTML += arr[m] +"<br>";
    }
}
function splice(){
    cities.splice(2, 0, "Toba", "Sargodha");
    document.getElementById("output").innerHTML = "";
    console.log(cities);
    for (var n = 0; n < cities.length; n++) {
        cities[n];
        document.getElementById("output").innerHTML += cities[n] +"<br>";
    }
}
function sameChar(){
   
    let newArray1 =cities.filter(function(abc){
        if(abc.startsWith('G'))

        return true;
    })

    document.getElementById("output").innerHTML = "";
    document.getElementById("output").innerHTML += "Same First Character in "+ newArray1 +"<br>" ;
    // document.getElementById("statement").innerHTML += cities[i] +"<br>";
}


document.getElementById("clear-s").onclick = function() {
    document.getElementById("statement").innerHTML = "";
    
}
document.getElementById("clear-o").onclick = function() {
   
    document.getElementById("output").innerHTML = "";
}
