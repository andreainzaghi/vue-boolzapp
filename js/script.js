var root = new Vue({
el: '#root',
data: {
     img: 'img/avatar_2.jpg',
     text: 'Luigi',
     message: 'Ciao Franco come va? ' + new Date().toLocaleString(),
     list: [
       'Seguire la lezione',
       'Leggere la documentazione VueJs',
       'Fare prove'
         ]

    },
   methods: {

   }

});
const Icons = [
  {
    name: 'apple-alt',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'ice-cream',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'fish',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'lemon',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'hamburger',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
  {
    name: 'pizza-slice',
    family: 'fas',
    prefix: 'fa-',
    category: "food"
  },
];
