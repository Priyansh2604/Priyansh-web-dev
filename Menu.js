

let fooditems=[{
    name:"Cheese Butter Masala",
    price:2000

},
{
    name:"Kaju carry",
    price:2000

},
{
    name:"Chole Bhatura",
    price:2000

},
{
    name:"Manchurian Masala",
    price:2000

},
{
    name:"Fried rice",
    price:2000

},
{
    name:"Chilli paneer",
    price:2000

},
{
    name:"Kandvi",
    price:2000

},
{
    name:"Khaman dhokla",
    price:2000

},
{
    name:"Undhyu",
    price:2000

},


]
$("#CheeseButterMasala").click(function () {
    let quantity=prompt("Enter quantity");
    $("#cheesebuttermasala").text(fooditems[0].price*quantity);

    
})
$("#Kajucarry").click(function () {
    let quantity=prompt("Enter quantity");
    $("#kajucarry").text(fooditems[1].price*quantity);

    
})

$("#CholeBhatura").click(function () {
    let quantity=prompt("Enter quantity");
    $("#cholebhatura").text(fooditems[2].price*quantity);

    
})

$("#Manchurian").click(function () {
    let quantity=prompt("Enter quantity");
    $("#manchurian").text(fooditems[3].price*quantity);

    
})
$("#Friedrice").click(function () {
    let quantity=prompt("Enter quantity");
    $("#friedrice").text(fooditems[4].price*quantity);
    
})
$("#ChilliPanner").click(function () {
    let quantity=prompt("Enter quantity");
    $("#chilliPanner").text(fooditems[5].price*quantity);
    
})
$("#Khandvi").click(function () {
    let quantity=prompt("Enter quantity");
    $("#khandvi").text(fooditems[6].price*quantity);
    
})
$("#KhamanDhokla").click(function () {
    let quantity=prompt("Enter quantity");
    $("#khamanDhokla").text(fooditems[7].price*quantity);
    
})
$("#Undhyu").click(function () {
    let quantity=prompt("Enter quantity");
    $("#undhyu").text(fooditems[8].price*quantity);
    
})
let Totalbill =fooditems[0].price*quantity+fooditems[1].price*quantity+fooditems[2].price*quantity+fooditems[3].price*quantity+fooditems[4].price*quantity+fooditems[5].price*quantity+fooditems[6].price*quantity
$("#Total bill").text(Totalbill);