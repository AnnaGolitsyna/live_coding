// input - animal's name, dish
// output - boolean

const feast = (beast, dish) =>  beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);


console.log(feast('great blue heron', 'garlic naan')); // true
console.log(feast('chickadee', 'chocolate cake')); // true
console.log(feast('brown bear', 'bear claw')); // false