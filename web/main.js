function addition(){
    var n1 = document.getElementById("num1").value
    eel.add(n1)(callBack)

}

function callBack(result){
    document.getElementById("num1").value = result
}