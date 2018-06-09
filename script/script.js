//Calculate age
window.addEventListener("load", function(event) {
    var today = new Date();
    var birthday = new Date(1997, 2-1, 7);
    
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();
    
    var year_age = Math.floor(differenceInMilisecond / 31536000000);
    
    document.getElementById("age").innerHTML = year_age;
});