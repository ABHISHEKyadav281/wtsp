










/* open status */

var growth = document.querySelector(".growth");
var grow = 0;
var fuls = document.querySelector(".full-scr");
document.querySelector(".recent").addEventListener("click", function (dets) {
    if (arr[dets.target.id] != undefined) {

        fuls.style.display = "block";
        fuls.style.backgroundImage = `url(${arr[dets.target.id].photo})`
        document.querySelector(".wtsp").style.display = "none";
        if (grow <= 100) {
            setInterval(function () {
                growth.style.width = `${grow++}%`;
            }, 30);
        }
        else {
            grow = 0;
        }
        setTimeout(function () {
            document.querySelector(".wtsp").style.display = "block";
            fuls.style.display = "none";
        }, 3000);
    }
})



var growth = document.querySelector(".growth");
var grow = 0;
var fuls = document.querySelector(".full-scr");
document.querySelector(".recent1").addEventListener("click", function (dets) {
    if (arr[dets.target.id] != undefined) {
        fuls.style.display = "block";
        fuls.style.backgroundImage = `url(${arr1[dets.target.id].photo})`
        document.querySelector(".wtsp").style.display = "none";
        if (grow <= 100) {
            setInterval(function () {
                growth.style.width = `${grow++}%`;
            }, 30);
        }
        else {
            grow = 0;
        }
        setTimeout(function () {
            document.querySelector(".wtsp").style.display = "block";
            fuls.style.display = "none";
        }, 3000);
    }
})

/* open status */



// wtsp features


document.querySelector("#chat").addEventListener("click", function () {
    document.querySelector("#chat").style.borderBottom = `3px solid white`
    document.querySelector("#status").style.borderBottom = "none"
    document.querySelector("#call").style.borderBottom = "none"
    document.querySelector(".chatfeature").style.display = "block"
    document.querySelector(".statusfeature").style.display = "none"
    document.querySelector(".callingfeature").style.display = "none"
})
document.querySelector("#status").addEventListener("click", function () {
    document.querySelector("#chat").style.borderBottom = "none"
    document.querySelector("#status").style.borderBottom = `3px solid white`
    document.querySelector("#call").style.borderBottom = "none"
    document.querySelector(".chatfeature").style.display = "none"
    document.querySelector(".statusfeature").style.display = "block"
    document.querySelector(".callingfeature").style.display = "none"
})
document.querySelector("#call").addEventListener("click", function () {
    document.querySelector("#chat").style.borderBottom = "none"
    document.querySelector("#status").style.borderBottom = "none"
    document.querySelector("#call").style.borderBottom = `3px solid white`
    document.querySelector(".chatfeature").style.display = "none"
    document.querySelector(".statusfeature").style.display = "none"
    document.querySelector(".callingfeature").style.display = "block"
})






// chat feature

var arrc = [
    { photo: "dp1.jpg", name: "Sheryiansh | B19", mssg: "Harshit Bhaiya : Hey people ❤️ As we...", time: " just now" },
    { photo: "dp2.jpg", name: "person 2", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " 10:01 pm" },
    { photo: "dp3.jpg", name: "person 3", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " 9:25 pm " },
    { photo: "dp4.jpg", name: "person 4", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " 8:25 pm" },
    { photo: "dp5.jpg", name: "person 5", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " 8:25 pm" },
    { photo: "dp6.jpg", name: "person 6", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " 3:55 pm" },
    { photo: "dp7.jpg", name: "person 7", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " 12:01 pm" },
    { photo: "dp4.jpg", name: "person 8", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "11:49 am " },
    { photo: "dp5.jpg", name: "person 9", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " 8:25 am" },
    { photo: "dp6.jpg", name: "person 10", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " 3:55 am" },
    { photo: "dp7.jpg", name: "person 11", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " 12:01 am" },
    { photo: "dp8.jpg", name: "person 12", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " yesterday" },
    { photo: "dp3.jpg", name: "person 13", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp4.jpg", name: "person 14", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp5.jpg", name: "person 15", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday" },
    { photo: "dp8.jpg", name: "person 12", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " yesterday" },
    { photo: "dp3.jpg", name: "person 13", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp4.jpg", name: "person 14", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp5.jpg", name: "person 15", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday" },
    { photo: "dp8.jpg", name: "person 12", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " yesterday" },
    { photo: "dp3.jpg", name: "person 13", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp4.jpg", name: "person 14", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp5.jpg", name: "person 15", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday" },
    { photo: "dp8.jpg", name: "person 12", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " yesterday" },
    { photo: "dp3.jpg", name: "person 13", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp4.jpg", name: "person 14", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp5.jpg", name: "person 15", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday" },
    { photo: "dp8.jpg", name: "person 12", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " yesterday" },
    { photo: "dp3.jpg", name: "person 13", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp4.jpg", name: "person 14", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp5.jpg", name: "person 15", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday" },
    { photo: "dp8.jpg", name: "person 12", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " yesterday" },
    { photo: "dp3.jpg", name: "person 13", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp4.jpg", name: "person 14", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp5.jpg", name: "person 15", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday" },
    { photo: "dp8.jpg", name: "person 12", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " yesterday" },
    { photo: "dp3.jpg", name: "person 13", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp4.jpg", name: "person 14", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp5.jpg", name: "person 15", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday" },
    { photo: "dp8.jpg", name: "person 12", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " yesterday" },
    { photo: "dp3.jpg", name: "person 13", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp4.jpg", name: "person 14", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp5.jpg", name: "person 15", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday" },
    { photo: "dp8.jpg", name: "person 12", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " yesterday" },
    { photo: "dp3.jpg", name: "person 13", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp4.jpg", name: "person 14", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp5.jpg", name: "person 15", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday" },
    { photo: "dp8.jpg", name: "person 12", mssg: "Lorem ipsum dolor sit amet consectetur.", time: " yesterday" },
    { photo: "dp3.jpg", name: "person 13", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp4.jpg", name: "person 14", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday " },
    { photo: "dp5.jpg", name: "person 15", mssg: "Lorem ipsum dolor sit amet consectetur.", time: "yesterday" }
]
var clutter = "";
arrc.forEach(function (data) {

    clutter += `<div class="chat">
    <div class="dp"><img src="${data.photo}" alt="">
    </div>
    <div class="box">
<div class="content">
<h1>${data.name}</h1>
<h5> ${data.mssg}</h5>
</div>
<div class="time">
<p>${data.time} </p>
</div>
</div>

</div>`
});

document.querySelector(".msgs").innerHTML = clutter;






// status feature

var arr = [
    { photo: "dp1.jpg", name: "Ex 1", time: " just now" },
    { photo: "dp2.jpg", name: "Ex 2", time: "6 minutes ago" },
    { photo: "dp3.jpg", name: "Ex 3", time: "25 minutes ago" },
    { photo: "dp4.jpg", name: "Ex 4", time: "49 minutes ago" },
    { photo: "dp5.jpg", name: "Ex 5", time: "Today, 8:25 pm" },
    { photo: "dp6.jpg", name: "Ex 6", time: "Today, 3:55 pm" },
    { photo: "dp7.jpg", name: "Ex 7", time: "Today, 12:01 pm" },
    { photo: "dp8.jpg", name: "Ex 8", time: "Today, 9:51 am" }
]
var clutter = "";
arr.forEach(function (data, index) {

    clutter += `<div class="status" id="${index}">
<div class="dp"><img id="${index}"  src="${data.photo}" alt=""></div>
<div class="disc" >
    <h3 id="${index}">${data.name}</h3>
    <p id="${index}">${data.time}</p>
</div>
</div>`
});

document.querySelector(".recent").innerHTML = clutter;



var arr1 = [
    { photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name: "Crush 1", time: " just now" },
    { photo: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60", name: "Crush 2", time: "6 minutes ago" },
    { photo: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name: "Crush 3", time: "25 minutes ago" },
    { photo: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", name: "Crush 4", time: "49 minutes ago" },
    { photo: "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", name: "Crush 5", time: "Today, 8:25 pm" }

]
var clutter = "";
arr1.forEach(function (data, index) {

    clutter += `<div class="status">
<div class="dp"><img id="${index}" src="${data.photo}" alt=""></div>
<div class="disc" >
    <h3 id="${index}">${data.name}</h3>
    <p id="${index}">${data.time}</p>
</div>
</div>`
});

document.querySelector(".recent1").innerHTML = clutter;





// calling feature
var arrc = [
    { photo: "dp2.jpg", name: "Person 2", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp3.jpg", name: "person 3", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp4.jpg", name: "person 4", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp5.jpg", name: "person 5", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp6.jpg", name: "person 6", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp7.jpg", name: "person 7", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp4.jpg", name: "person 8", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp5.jpg", name: "person 9", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp2.jpg", name: "Person 2", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp3.jpg", name: "person 3", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp4.jpg", name: "person 4", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp5.jpg", name: "person 5", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp6.jpg", name: "person 6", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp7.jpg", name: "person 7", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp4.jpg", name: "person 8", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp5.jpg", name: "person 9", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp3.jpg", name: "person 3", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp4.jpg", name: "person 4", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp5.jpg", name: "person 5", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp6.jpg", name: "person 6", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp7.jpg", name: "person 7", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp4.jpg", name: "person 8", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp5.jpg", name: "person 9", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp6.jpg", name: "person 10", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp7.jpg", name: "person 11", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp8.jpg", name: "person 12", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp3.jpg", name: "person 3", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp4.jpg", name: "person 4", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp5.jpg", name: "person 5", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp6.jpg", name: "person 6", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp7.jpg", name: "person 7", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp4.jpg", name: "person 8", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp5.jpg", name: "person 9", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp6.jpg", name: "person 10", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp7.jpg", name: "person 11", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp8.jpg", name: "person 12", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-vidicon-fill"></i>' },
    { photo: "dp3.jpg", name: "person 13", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp4.jpg", name: "person 14", who: '<i class="ri-arrow-left-down-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' },
    { photo: "dp5.jpg", name: "person 15", who: '<i class="ri-arrow-right-up-line"></i>', info: "10 october, 9:09 am", type: '<i class="ri-phone-fill"></i>' }
]
var clutter = "";
arrc.forEach(function (data) {

    clutter += `<div class="call">
    <div class="dp"><img src="${data.photo}" alt="">
    </div>
    <div class="box">
<div class="content">
<h1>${data.name}</h1>
<h6>${data.who} ${data.info}</h6>
</div>
<div class="type">
<p>${data.type} </p>
</div>
</div>


</div>`
});

document.querySelector(".callingfeature").innerHTML = clutter;




















