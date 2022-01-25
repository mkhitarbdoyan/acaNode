// // [].__proto__.myPush = function (...args) {
// //     args.forEach(e => this[this.length] = e)
// //     return this.length
// // }
// // console.log([11, 2, 3, 4].myPush(2))

// // [].__proto__.myUnshift = function (...args) {

// //     const lenThis = this.length;
// //     const lenArgs = args.length;


// //     for (let i = lenThis - 1 ; i >=0 ; i--) {
// //             this[lenArgs+i] = this[i];
// //     }

// //     for (let i = 0; i < lenArgs ; i++) {
// //         this[i] = args[i];
// // }
// //     return this
// // }
// // console.log([11, 2, 3, 4, 7].myUnshift(34,2))

// [].__proto__.myUnshift = function (...args) {
//     for (let i = 0; i < this.length; i++) {
//         args[args.length] = this[i]
//     }
//     return args
// }
// console.log([3,4].myUnshift(1,2));

// //////////////////////////
// let a = { a: { b: 1 }, e2: 'e', f: [ 2, 255 ] }

// // function chenge (obj) {
// //     for(let prop in obj){
// //         if(obj[prop].constructor.name === 'Object') return chenge(obj[prop]);
// //         obj[obj[prop]] = prop;
// //         delete obj[prop]
// //     }
// // }

// function chenge(obj){
//     let object = {};
//     Object.keys(obj).forEach(e => obj[e].constructor.name === 'Object' ? object[e] = chenge(obj[e]) : object[obj[e]] = e)
//     return object 
// }


// console.log(chenge(a));

//////////////////////////////////////////////
let heroArr = [];
let antiHeroArr = [];
let obj = {};
class Hero {
  constructor(name){
    this.name = name;
    this.halfe = Math.floor(50 + Math.random() * 50);
    this.power = Math.floor(1 + Math.random() * 9);
    this.speed = Math.floor(1 + Math.random() * 4);
  }
}

const heroes = [
  'tor',
  'd. strenge',
  'spaiderman',
  'muravey',
  'hulk',
  'kapitan amerika',
  'kapitan marvel',
  'superman',
  'betman',
  'sokoliniy glaz'
];
const antiheroes = [
  'tanos',
  'goblin',
  'locky',
  'jocker',
  'goblin2',
  'grinch',
  'electo',
  'goblin3',
  'goblin4',
  'goblin5'
];


for(let i = 0; i < 10; i++) {
  heroArr.push(new Hero(heroes[i]));
  antiHeroArr.push(new Hero(antiheroes[i]));
};

function start() {

  heroArr.forEach(function(elem) {
    atak(elem, antiHeroArr)
  })
  antiHeroArr.forEach(function(elem) {
    atak(elem, heroArr)
  })
}

function atak(hero1, hero2Arr) {
  hero1.ataka = setTimeout(function(){
    let i = Math.floor(Math.random() * (hero2Arr.length - 1));
    let hero2 = hero2Arr[i]
    if(hero2){
      hero2.halfe -= hero1.power;
     
      if(hero2.halfe <= 0){
        console.log(`hero2.name`, "myortv");
        clearTimeout(hero2.ataka)
        hero2Arr.splice(i, 1);
        console.log(`${hero1.name} ubil ${hero2.name}, heroArr.length, '-'`, antiHeroArr.length);
        if(!hero2Arr.length){
          return console.log(`${hero2Arr.length} loss`);
        } 
      }
      atak(hero1, hero2Arr)
    } 
  }, hero1.speed * 200);
}


start(heroArr, antiHeroArr);