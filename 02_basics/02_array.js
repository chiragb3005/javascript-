const hero1 = ['spiderman', 'thor', 'strange']
const hero2 = ['batman', 'flash', 'superman']
// hero1.push(hero2)
// console.log(hero1);
// console.log(hero1[3][2]);


hero1.concat(hero2)
// console.log(hero1);

// console.log(hero1.concat(hero2));
// concat makes a new array & doesnt change the earlier array

const allHero = [...hero1, ...hero2]
// can pass more than 2 arrays , work similar like concat
// console.log(allHero);



console.log(Array.isArray('chirag'));
console.log(Array.from('chirag'));
console.log(Array.from( {name: 'chirag'} ));
// the last one will give empty array as we havent tel abt the object case that is with whom it should make array either by value (name) or by pair(chirag)


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));



// multiple array inside 1 array
const first = [1,2,3,[4,5,6] , 7,[8,9, [10,11,12]]]
console.log(first.flat(Infinity));
// giving depth as infinity.