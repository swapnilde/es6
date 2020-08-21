
// arrow functions with explicit return
// arrow functions with implicit return
// template strings
const nums = [1,2,3,4,5,6,7,8,9];

const twoDigitNum = nums.map((num)=>{
    return `1${num}`;
});

const twoDigitNum2 = nums.map(num=>{
    return `1${num}`;
});

const twoDigitNum3 = nums.map(num => `1${num}`);

console.log(twoDigitNum);
console.log(twoDigitNum2);
console.log(twoDigitNum3);


// nested template strings
const stringNums = [
    { name: 'Eleven', digit: 11 },
    { name: 'Twelve', digit: 12 },
    { name: 'Thirteen', digit: 13 }
  ];

  const markup = `
    <ul>
      ${stringNums.map(num => `
        <li>
          ${num.name}
          is
          ${num.digit}
        </li>`).join('')}
    </ul>
  `;
  document.body.innerHTML=markup;
  console.log(markup);

  // string methods
  const string1 = 'Pablo escobar';
  console.log(string1.startsWith('pab'));
  console.log(string1.startsWith('Pab'));
  console.log(string1.endsWith('pab'));
  console.log(string1.endsWith('bar'));
  console.log(string1.repeat(5));

  // destructurig object and \
  // with renaming variables and \
  // with defult values.
  const person = {
    first: 'Pablo',
    last: 'Escobar  ',
    country: 'Dubai',
    city: 'Burj',
    twitter: '@pablo'
  };

  const { first:f, last:l, twitter:t, fb='@pabloes'} = person;

  console.log(`f:${f} l:${l}t:${t} fb:${fb}`);

  const social2 = {
    first: 'Pablo',
    last: 'Escobar  ',
    social:{
        twitter: '@pablo'
    }
  };
  
  const { twitter:t2 } = social2.social;

  console.log(`t2:${t2}`);


  // swapping variables

  let city1 = 'Pune';
  let city2 = 'Bombay';
  console.log(`city1:${city1}, city2:${city2}`);
  [city1,city2]=[city2,city1]
  console.log(`city1:${city1}, city2:${city2}`);

  // destructing array
  const details = ['Swapnil',27,'swapnil.com'];
  const [name, id, website] = details;
  console.log(`name:${name}, id:${id}, website:${website}`);

  // finding array
  const posts = [
    {
       "code":"BAcyDyQwcXX",
       "caption":"Lunch #hamont",
       "likes":56,
       "id":"1161022966406956503",
       "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12552326_495932673919321_1443393332_n.jpg"
    },
    {
       "code":"BAcJeJrQca9",
       "caption":"Snow! ⛄️🌨❄️ #lifewithsnickers",
       "likes":59,
       "id":"1160844458347054781",
       "display_src":"https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/e35/12407344_1283694208323785_735653395_n.jpg"
    },
    {
       "code":"BAF_KY4wcRY",
       "caption":"Cleaned my office and mounted my recording gear overhead. Stoked for 2016!",
       "likes":79,
       "id":"1154606670337393752",
       "display_src":"https://scontent.cdninstagram.com/hphotos-xpf1/t51.2885-15/e35/923995_1704188643150533_1383710275_n.jpg"
    },
    {
       "code":"BAPIPRjQce9",
       "caption":"Making baby pancakes for one early rising baby. ☕️🍴",
       "likes":47,
       "id":"1157179863266871229",
       "display_src":"https://scontent.cdninstagram.com/hphotos-xap1/t51.2885-15/e35/12407480_1654828594805097_152207166_n.jpg"
    }
  ];
  const code = 'BAF_KY4wcRY';
  const post = posts.find(post => post.code === code);
  console.log(post);

  const postIndex = posts.findIndex(post => post.code === code);
  console.log(`index:${postIndex}`);


  // array from, of
  function sumAll() {
    const nums = Array.from(arguments);
    return nums.reduce((prev, next) => prev + next, 0);
  }
  sumAll(2, 34, 23, 234, 234, 234234, 234234, 2342);
  const age = Array.of(12,4,23,62,34);
  console.log(age);


  // array some, every
  const ages = [32, 15, 19, 12];

  const adultPresent = ages.some(age => age >= 18);
  console.log(`adult present:${adultPresent}`);

  const allOldEnough = ages.every(age => age >= 19);
  console.log(`are all old enough:${allOldEnough}`);

  // promises
  const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts');

  postsPromise
    .then(data => data.json)
    .then(data => { console.log(data) })
    .catch((err) => {
      console.error(err);
    })

  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(Error('Err swap isn\'t cool'));
    }, 5000);
  });

  p
    .then(data => {
      console.log(data);
    })
    .catch(err => {
      console.error(err);
    });


  //
  