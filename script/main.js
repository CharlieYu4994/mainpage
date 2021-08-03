window.onload = function () {
    var front = document.getElementById("front");
    var back = document.getElementById("back");
    var cb = document.getElementById("toggler");

    cb.onclick = function () {
        if (cb.checked) {
            front.style.transform = "rotateY(180deg)";
            back.style.transform = "rotateY(0deg)";
        }
        else {
            back.style.transform = "rotateY(-180deg)";
            front.style.transform = "rotateY(0deg)";
        }
    }
    fetch('https://v1.hitokoto.cn?c=a').then(function (res) {
        return res.json();
    }).then(function (e) {
        box = document.getElementById('description').innerHTML = (e.hitokoto + "<br/> -「<strong>" + e.from + "</strong>」")
    })
}