
new Vue({
  el: '#root',
  data: {
    object: [{
      img: 'img/avatar_2.jpg',
      text: 'Luigi',
      message: 'Ciao Franco come va? ' + new Date().toLocaleString()
    },
    {
      img: 'img/avatar_3.jpg',
        text: 'Franco',
       message: 'Domani Calcietto, 19? ' + new Date().toLocaleString()

       },
       {
         img: 'img/avatar_4.jpg',
        text: 'Davide',
       message: 'Senza casa, ne tetto ! ' + new Date().toLocaleString()


     },
     {
       img: 'img/avatar_5.jpg',
       text: 'Don.pippo',
       message: 'Ciao Franco come va? ' + new Date().toLocaleString()
     },
     {
       img: 'img/avatar_7.jpg',
         text: 'Pallina',
        message: 'Domani Calcietto, 19? ' + new Date().toLocaleString()

        },
        {
          img: 'img/avatar_6.jpg',
         text: 'Robin',
        message: 'Senza casa, ne tetto ! ' + new Date().toLocaleString()


      },
      {
        img: 'img/avatar_2.jpg',
        text: 'Luigi',
        message: 'Ciao Franco come va? ' + new Date().toLocaleString()
      },
      {
        img: 'img/avatar_3.jpg',
          text: 'Franco',
         message: 'Domani Calcietto, 19? ' + new Date().toLocaleString()

         },
         {
           img: 'img/avatar_4.jpg',
          text: 'Davide',
         message: 'Senza casa, ne tetto ! ' + new Date().toLocaleString()


       },
       {
         img: 'img/avatar_5.jpg',
         text: 'Don.pippo',
         message: 'Ciao Franco come va? ' + new Date().toLocaleString()
       },
       {
         img: 'img/avatar_7.jpg',
           text: 'Pallina',
          message: 'Domani Calcietto, 19? ' + new Date().toLocaleString()

          },
          {
            img: 'img/avatar_6.jpg',
           text: 'Robin',
          message: 'Senza casa, ne tetto ! ' + new Date().toLocaleString()


        }
   ],
   currentUser:0
 },
 methods:{
   prova:function(index){
     this.currentUser=index;
   }
 }
})
