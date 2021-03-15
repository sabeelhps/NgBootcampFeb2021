
let menu = ["Kadhai Paneer", "Dal Makhni", "Chicken Changezi",
    "Veg Biryani", "Chhole Bhature", "Pizza", "Daal Fry",
    "Chicken Roll", "Zeera Rice", "Onion Rings",
    "Garlic Bread", "Onion Pizza", "Rajma Chawal",
    "Garlic Naan", "Egg Curry", "Egg Roll",
    "Egg Biryani"];


function isVeg(food) {
    if (food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1) {
        return false;
    }
    return true;
}


function isOnionGarlicFree(food) {
    if (food.toLowerCase().indexOf('onion') !== -1 || food.toLowerCase().indexOf('garlic') !== -1) {
        return false;
    }
    return true;
}


let vegMenu = menu.filter(isVeg);
let jainMenu = menu.filter(isVeg).filter(isOnionGarlicFree);

console.log(menu);
console.log(vegMenu);
console.log(jainMenu);