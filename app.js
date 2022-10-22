setInterval =setInterval(setBg,3000);
let flag=1;
// setBg();
function setBg(){
    if(flag==1)
    {
        document.body.style.backgroundImage="url('img1.jpeg')";
        flag=2;
        // alert(flag)
    }
    else if(flag==2)
    {
        document.body.style.backgroundImage="url('img2.jpeg')";
        flag=3;
    }
    else if(flag==3)
    {
        document.body.style.backgroundImage="url('img3.jpeg')";
        flag=4;
    }
    else if(flag==4)
    {
        document.body.style.backgroundImage="url('img4.jpeg')";
        flag=5;
    }
    else if(flag==5)
    {
        document.body.style.backgroundImage="url('img5.jpeg')";
        flag=6;
    }
    else if(flag==6)
    {
        document.body.style.backgroundImage="url('img6.jpeg')";
        flag=7;
    }
    else if(flag==7)
    {
        document.body.style.backgroundImage="url('img7.jpeg')";
        flag=8;
    }
    else if(flag==8)
    {
        document.body.style.backgroundImage="url('img8.jpeg')";
        flag=9;
    }
    else if(flag==9)
    {
        document.body.style.backgroundImage="url('img9.jpeg')";
        flag=1;
    }
}





let output = document.getElementById('output');
let quotes = [
    "May your Diwali be filled with joy and light.",
    "I hope the light of Deepawali brightens your day this Diwali.",
    "I wish you a prosperous, healthy, and happy Diwali.",
    "Let us celebrate the Diwali festival with smiles on our faces and joy in our hearts.” “Diwali greetings to everyone.",
    "May the allure of Diwali never wane. “Let’s celebrate this great holiday with the best foods and company.” Happy Diwali!",
    "'May the Diwali festive season be filled with celebrations, festivities, and great zeal.'I wish everyone a happy Diwali.'",
    "Happy birthday! Hope you have a warm day, I'm thinking of you always, and I'll see you soon!",
    "May Diwali bring you enough light to chase away all the darkness in your life.",
    "Let's add another lovely memory to our life by celebrating Diwali with our families and friends. A lovely Diwali to you",
    "May the beauty of the Deepawali season fill your home with joy, and may the coming year bring you everything that makes you happy.",
    "Shoot a rocket of prosperity, light a flowerpot of happiness, and wish you and your family a glittering Diwali!",
    "May Millions of Lamps Illuminate Your Life Forever With Endless Prosperity, Health, And Wealth. Diwali greetings to you and your family.",
    "Life with you is like Diwali, so let us promise to stay together forever."
];

let btn = document.getElementById('open');
let mdc = document.getElementById('mdcon');

btn.onclick = function () {
    let uname = document.getElementById('uname').value;
    let h3 = document.getElementById('heading');
    h3.innerHTML = "HAPPY DIWALI " + uname;
    var newquote = Math.floor(Math.random() * quotes.length)
    output.innerHTML = quotes[newquote];
    mdc.classList.toggle("active");
}

function getquote() {
    var newquote = Math.floor(Math.random() * quotes.length)
    output.innerHTML = quotes[newquote];
}
function copyquote1() {
    let uname = document.getElementById('uname').value;
    let copytext = output.innerHTML;
    let dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = copytext + " *- FROM" + uname + "*";
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("copied Successful")
}
function exit() {
    mdc.classList.toggle("active");
}
