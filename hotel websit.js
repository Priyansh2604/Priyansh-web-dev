let GujaratiMenu={
    name:"Dal Bati, Sev usar and Daldhokdi",
    ingridients:"Dal with baked food and Chutneys",
    price:2000
}

$(".Gujarati").click(
    function () {
        $("#Gujarati").text(GujaratiMenu.name)
    }
)
let MarathiMenu={
    name:"Misal",
    ingridients:"DMisal pav and sev",
    price:5000
}

$(".Marathi").click(
    function () {
        $("#Marathi").text(MarathiMenu.name)
    }
)
let ChineseMenu={
    name:"Noodels,Manchurian,Chilli Paneer",
    ingridients:"Masala noodels",
    price:5000
}

$(".Chinese").click(
    function () {
        $("#Chinese").text(ChineseMenu.name)
    }
)
let PunjabiMenu={
    name:"Paneer ,Paratha",
    ingridients:"Atta",
    price:5000
}

$(".food-style").click(
    function () {
        $("#Punjabi").text(PunjabiMenu.name)
    }
)
$("#bill").click(
    function () {
        bill=MarathiMenu.price+ChineseMenu.price+GujaratiMenu.price;
    }
)
