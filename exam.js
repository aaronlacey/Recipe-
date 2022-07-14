function addLike(id){
    document.getElementById(id).innerText++
}

function hide(element) {
    element.remove();
}

var message = document.getElementById("message");
document.getElementById("myButton").addEventListener("click", function() {
    console.log( message.value );
});