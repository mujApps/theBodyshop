window.addEventListener("load",getlocation);
    function getlocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }
    function showPosition(position){
        // x.innerHTMl="";
    }


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// <!-- Script for Personilazed for you Slider -->
    

const back = document.querySelector('.back');
    const front = document.querySelector('.front');
    const owlclass = document.querySelector('.owl-carousel2')
    back.addEventListener('click', moveBack)
    front.addEventListener('click', movefront)
    var owldata = [
        {
            atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
            imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1012282_FACE-WASH-LEMON-125ML-LH_BRNZ_INAAUPS676_-_Copy.jpg",
            titletag: "Lemon Purifying Face Wash Small Size",
            pricetag: "₹945.00"
        },
        {
            atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
            imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1012250_HAIR_BODY_WASH_LEMON_400ML_LH_BRNZ_INECMPS417.jpg",
            titletag: "Lemon Purifying Hair &amp; Body Wash",
            pricetag: "₹1,195.00"
        },
        {
            atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
            imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1012280_HAND_BODY_LOTION_LEMON_200ML_A0X_BRNZ_INECMPS424_-_Copy.jpg",
            titletag: "Lemon Protecting Hand &amp; Body Lotion",
            pricetag: "₹1,195.00"
        },
        {
            atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
            imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1010158_Himalayan_Charcoal_Sleeping_Serum_30ml_AOX_BRNZ_INECOPS038.jpg",
            titletag: "Himalayan Charcoal Skin Clarifying Night Peel",
            pricetag: "₹2,045.00"
        },
        {
            atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
            imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1098645_BODY_YOGURT_COOL_DAISY_200ML_A0X_BRNZ_INECOPS228.jpg",
            titletag: "Cool Daisy Body Care with Yogurt Lotion ",
            pricetag: "995.00"
        },
        {
            atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
            imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1010039_Lip_and_Cheek_Stain_Sunshine_orange_BRNZ_INECMPS388.jpg",
            titletag: "Cheek Stain Sunshine Orange Cream",
            pricetag: "₹995.00"
        },
        {
            atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
            imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1098462_BODY_MIST_FRESH_RASPBERRY_100ML_A0X_BRNZ_INECOPS231.jpg",

            titletag: "Fresh Raspberry Hydrating Body Mist",
            pricetag: "₹1345.00"
        },
        {
            atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
            imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1098646_BODY_MIST_COOL_DAISY_100ML_A0X_BRNZ_INECOPS227.jpg",
            titletag: "Cool Daisy Hydrating Body Mist Lotion",
            pricetag: "₹1345.00"
        }


    ]


    owldata.map((item, index) => {
        var ele = document.createElement("div")
        ele.id = "inc"
        ele.classList.add("item")
        var ele1 = document.createElement("a")
        ele1.href = item.atag
        var ele2 = document.createElement("img")
        ele.classList.add("img")
        ele2.src = item.imgtag
        ele1.appendChild(ele2)
        ele.appendChild(ele1)
        //
        var ele3 = document.createElement("h4")
        ele3.classList.add("productnm")
        ele3.innerText = item.titletag
        ele.appendChild(ele3)
    
        var ele4 = document.createElement("h3")
        ele4.innerText = item.pricetag
        ele.appendChild(ele4)

        var eleheart = document.createElement("img")
        eleheart.classList.add("clk")
        eleheart.src="img/body-shop-icons-thick_wishlist.svg"
        eleheart.addEventListener("click", function(){
            addToWish(item);
            console.log("hare")
            eleheart.src="https://staticbodyshop.gumlet.io/pub/static/version1636335624/frontend/Tenovia/bodyshop/en_US/images/icons/body-shop-icons_wishlist_filled.svg"
        })
        ele.appendChild(eleheart)


        owlclass.appendChild(ele)
    })
    function dsa(owldata) {
        owlclass.innerHTML = ""
        owldata.map((item, index) => {
            var ele = document.createElement("div")
            ele.id = "inc"
            ele.classList.add("item")
            var ele1 = document.createElement("a")
            ele1.href = item.atag
            var ele2 = document.createElement("img")
            ele.classList.add("img")
            ele2.src = item.imgtag
            ele1.appendChild(ele2)
            ele.appendChild(ele1)
            //
            var ele3 = document.createElement("h4")
        ele3.classList.add("productnm")
        ele3.innerText = item.titletag
        ele.appendChild(ele3)
    
        var ele4 = document.createElement("h3")
        ele4.innerText = item.pricetag
        ele.appendChild(ele4)

        var eleheart = document.createElement("img")
        eleheart.classList.add("clk")
        eleheart.src="img/body-shop-icons-thick_wishlist.svg"
        eleheart.addEventListener("click", function(){
            addToWish(item);
            console.log("hare")
            eleheart.src="https://staticbodyshop.gumlet.io/pub/static/version1636335624/frontend/Tenovia/bodyshop/en_US/images/icons/body-shop-icons_wishlist_filled.svg"
        })
        ele.appendChild(eleheart)

        owlclass.appendChild(ele)
        })
    }
    var wishList=JSON.parse(localStorage.getItem("wishList")) ||[];
    function addToWish(item) {
        
        console.log(wishList);
        console.log("hello")
        wishList.push(item)
        localStorage.setItem('wishList',JSON.stringify(wishList));
    }
  
  function moveBack() {
        var temp = owldata[0]
        owldata.splice(0, 1)
        owldata.push(temp)
        dsa(owldata)
        console.log(owldata)

    }
    function movefront() {
        var t = owldata.length
        var temp = owldata[t - 1]
        owldata.pop()
        owldata.unshift(temp)
        dsa(owldata)
        console.log(owldata)

    }
    // <!-- Script for personalized Slider Ends -->   


    // <!-- Script for New One Slider -->
    

const back1 = document.querySelector('.back1');
const front1 = document.querySelector('.front1');
const owlclass1 = document.querySelector('.owlcarousel')
back1.addEventListener('click', backMove);
front1.addEventListener('click', frontMove);
var newdata = [
    {
        atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
        imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1012282_FACE-WASH-LEMON-125ML-LH_BRNZ_INAAUPS676_-_Copy.jpg",
        titletag: "Lemon Purifying Face Wash Small Size",
        pricetag: "₹945.00"
    },
    {
        atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
        imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1012250_HAIR_BODY_WASH_LEMON_400ML_LH_BRNZ_INECMPS417.jpg",
        titletag: "Lemon Purifying Hair &amp; Body Wash",
        pricetag: "₹1,195.00"
    },
    {
        atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
        imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1012280_HAND_BODY_LOTION_LEMON_200ML_A0X_BRNZ_INECMPS424_-_Copy.jpg",
        titletag: "Lemon Protecting Hand &amp; Body Lotion",
        pricetag: "₹1,195.00"
    },
    {
        atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
        imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1010158_Himalayan_Charcoal_Sleeping_Serum_30ml_AOX_BRNZ_INECOPS038.jpg",
        titletag: "Himalayan Charcoal Skin Clarifying Night Peel",
        pricetag: "₹2,045.00"
    },
    {
        atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
        imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1098645_BODY_YOGURT_COOL_DAISY_200ML_A0X_BRNZ_INECOPS228.jpg",
        titletag: "Cool Daisy Body Care with Yogurt Lotion ",
        pricetag: "995.00"
    },
    {
        atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
        imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1010039_Lip_and_Cheek_Stain_Sunshine_orange_BRNZ_INECMPS388.jpg",
        titletag: "Cheek Stain Sunshine Orange Cream",
        pricetag: "₹995.00"
    },
    {
        atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
        imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1098462_BODY_MIST_FRESH_RASPBERRY_100ML_A0X_BRNZ_INECOPS231.jpg",

        titletag: "Fresh Raspberry Hydrating Body Mist",
        pricetag: "₹1345.00"
    },
    {
        atag: "https://www.thebodyshop.in/lemon-purifying-face-wash.html",
        imgtag: "https://staticbodyshop.gumlet.io/pub/media/wysiwyg/Homepage/1098646_BODY_MIST_COOL_DAISY_100ML_A0X_BRNZ_INECOPS227.jpg",
        titletag: "Cool Daisy Hydrating Body Mist Lotion",
        pricetag: "₹1345.00"
    }


]


newdata.map((item, index) => {
    var ele = document.createElement("div")
    ele.id = "inc"
    ele.classList.add("item")
    var ele1 = document.createElement("a")
    ele1.href = item.atag
    var ele2 = document.createElement("img")
    ele.classList.add("img")
    ele2.src = item.imgtag
    ele1.appendChild(ele2)
    ele.appendChild(ele1)
    //
    var ele3 = document.createElement("h4")
    ele3.classList.add("productnm")
    ele3.innerText = item.titletag
    ele.appendChild(ele3)

    var ele4 = document.createElement("h3")
    ele4.innerText = item.pricetag
    ele.appendChild(ele4)

    var eleheart = document.createElement("button")
    eleheart.classList.add("view")
    eleheart.innerText = "View"
    eleheart.addEventListener("click", function(){
        view(item)
    })
    ele.appendChild(eleheart)


    owlclass1.appendChild(ele)
})
function dsa2(newdata) {
    owlclass1.innerHTML = ""
    newdata.map((item, index) => {
        var ele = document.createElement("div")
        ele.id = "inc"
        ele.classList.add("item")
        var ele1 = document.createElement("a")
        ele1.href = item.atag
        var ele2 = document.createElement("img")
        ele.classList.add("img")
        ele2.src = item.imgtag
        ele1.appendChild(ele2)
        ele.appendChild(ele1)
        //
        var ele3 = document.createElement("h4")
    ele3.classList.add("productnm")
    ele3.innerText = item.titletag
    ele.appendChild(ele3)

    var ele4 = document.createElement("h3")
    ele4.innerText = item.pricetag
    ele.appendChild(ele4)

    var eleheart = document.createElement("button")
    eleheart.classList.add("view")
    eleheart.innerText = "View"
    eleheart.addEventListener("click", function(){
        view(item)
    })
    ele.appendChild(eleheart)

    owlclass1.appendChild(ele)
    })
}
var viewBox=0;
function view(item) {
    viewBox=item;
    localStorage.setItem('viewItem',JSON.stringify(viewBox));
    window.location.href="productView.html"
}

function backMove() {
    var temp = newdata[0]
    newdata.splice(0, 1)
    newdata.push(temp)
    dsa2(newdata)
    // console.log(newdata)

}
function frontMove() {
    var t = newdata.length
    var temp = newdata[t - 1]
    newdata.pop()
    newdata.unshift(temp)
    dsa2(newdata)
    console.log(owldata)

}
// <!-- Script for Slider Ends -->