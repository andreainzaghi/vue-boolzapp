// var root = new Vue({
// el: '#root',
// data: {
//      img: 'img/avatar_2.jpg',
//      text: 'Luigi',
//      message: 'Ciao Franco come va? ' + new Date().toLocaleString(),
//      list: [
//        'Seguire la lezione',
//        'Leggere la documentazione VueJs',
//        'Fare prove'
//          ]
//
//     },
//    methods: {
//
//    }
//
// });
//Funzione per stampare le icone in pagina con due parametri
function printIcons(place, icons) {
  place.html('');
  icons.forEach(( icon ) => {
    const {img,text,message,} = icon;
    const page = `

    <div id="root">
      <div class="logo-chat">
        <img src=${img} alt="" >
      </div>
      <div class="nome">
         <p >${ text }</p>
         <p >${ message }</p>
      </div>
    </div>

    `;
    document. getElementById(“root”).innerText +=  “page” ;
  });
}

const Icons = [
  {
      img: 'img/avatar_2.jpg',
      text: 'Luigi',
      message: 'Ciao Franco come va? ' + new Date().toLocaleString(),


     },
 {
     img: 'img/avatar_3.jpg',
     text: 'Don.Pippo',
     message: 'Ciao Franco come va? ' + new Date().toLocaleString(),


    },
{
     img: 'img/avatar_4.jpg',
     text: 'Davide',
     message: 'Ciao Franco come va? ' + new Date().toLocaleString(),


    },
{
     img: 'img/avatar_5.jpg',
     text: 'Inza',
     message: 'Ciao Franco come va? ' + new Date().toLocaleString(),


    },
{
     img: 'img/avatar_6.jpg',
     text: 'Carlo',
     message: 'Ciao Franco come va? ' + new Date().toLocaleString(),


    },
{
     img: 'img/avatar_7.jpg',
     text: 'Franco',
     message: 'Ciao Franco come va? ' + new Date().toLocaleString(),


    },
];
