
new Vue({
  el: '#root',
  data: {
    colore3:'c-grey',
    colore2:'red1',
    colore:'red',
    colore1:'color-grey',
    // smile:[{smile1:'<class=\"fas fa-smile\"></i>',smile2:'<i class=\"fas fa-grin-squint-tears\"></i>',smile3:'<i class="fas fa-grin-hearts"></i>'}],
    object: [{
      img: 'img/avatar_2.jpg',
      text: 'Luigi',



      messge:[ {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di dargli da mangiare',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'cane mangia cane!',
                status: 'received'
            },
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
        },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
            }]
    },
    {
      img: 'img/avatar_3.jpg',
        text: 'Franco',
        messge:[ {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di dargli da mangiare',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
              },
              {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
          },
              {
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received'
              },
              {
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'received'
              }]

       },
       {
         img: 'img/avatar_4.jpg',
        text: 'Davide',
        messge:[ {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di dargli da mangiare',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
              },
              {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
          },
              {
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received'
              },
              {
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'received'
              }]
     },
     {
       img: 'img/avatar_5.jpg',
       text: 'Don.pippo',
       messge:[ {
                 date: '10/01/2020 15:50:00',
                 message: 'Ricordati di dargli da mangiare',
                 status: 'sent'
             },
             {
                 date: '10/01/2020 16:15:22',
                 message: 'Tutto fatto!',
                 status: 'received'
             },
             {
             date: '20/03/2020 16:30:00',
             message: 'Ciao come stai?',
             status: 'sent'
         },
             {
                 date: '20/03/2020 16:30:55',
                 message: 'Bene grazie! Stasera ci vediamo?',
                 status: 'received'
             },
             {
                 date: '20/03/2020 16:35:00',
                 message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                 status: 'received'
             }]   },
     {
       img: 'img/avatar_7.jpg',
         text: 'Pallina',
         messge:[ {
                   date: '10/01/2020 15:50:00',
                   message: 'Ricordati di dargli da mangiare',
                   status: 'sent'
               },
               {
                   date: '10/01/2020 16:15:22',
                   message: 'Tutto fatto!',
                   status: 'received'
               },
               {
               date: '20/03/2020 16:30:00',
               message: 'Ciao come stai?',
               status: 'sent'
           },
               {
                   date: '20/03/2020 16:30:55',
                   message: 'Bene grazie! Stasera ci vediamo?',
                   status: 'received'
               },
               {
                   date: '20/03/2020 16:35:00',
                   message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                   status: 'received'
               }]
        },
        {
          img: 'img/avatar_6.jpg',
         text: 'Robin',
         messge:[ {
                   date: '10/01/2020 15:50:00',
                   message: 'Ricordati di dargli da mangiare',
                   status: 'sent'
               },
               {
                   date: '10/01/2020 16:15:22',
                   message: 'Tutto fatto!',
                   status: 'received'
               },
               {
               date: '20/03/2020 16:30:00',
               message: 'Ciao come stai?',
               status: 'sent'
           },
               {
                   date: '20/03/2020 16:30:55',
                   message: 'Bene grazie! Stasera ci vediamo?',
                   status: 'received'
               },
               {
                   date: '20/03/2020 16:35:00',
                   message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                   status: 'received'
               }]


      },
      {
        img: 'img/avatar_2.jpg',
        text: 'Luigi',
        messge:[ {
                  date: '10/01/2020 15:50:00',
                  message: 'Ricordati di dargli da mangiare',
                  status: 'sent'
              },
              {
                  date: '10/01/2020 16:15:22',
                  message: 'Tutto fatto!',
                  status: 'received'
              },
              {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
          },
              {
                  date: '20/03/2020 16:30:55',
                  message: 'Bene grazie! Stasera ci vediamo?',
                  status: 'received'
              },
              {
                  date: '20/03/2020 16:35:00',
                  message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                  status: 'received'
              }]    },
      {
        img: 'img/avatar_3.jpg',
          text: 'Franco',
          messge:[ {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                },
                {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }]       },
         {
           img: 'img/avatar_4.jpg',
          text: 'Davide',
          messge:[ {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di dargli da mangiare',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                },
                {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'received'
                }]
       },
       {
         img: 'img/avatar_5.jpg',
         text: 'Don.pippo',
         messge:[ {
                   date: '10/01/2020 15:50:00',
                   message: 'Ricordati di dargli da mangiare',
                   status: 'sent'
               },
               {
                   date: '10/01/2020 16:15:22',
                   message: 'Tutto fatto!',
                   status: 'received'
               },
               {
               date: '20/03/2020 16:30:00',
               message: 'Ciao come stai?',
               status: 'sent'
           },
               {
                   date: '20/03/2020 16:30:55',
                   message: 'Bene grazie! Stasera ci vediamo?',
                   status: 'received'
               },
               {
                   date: '20/03/2020 16:35:00',
                   message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                   status: 'received'
               }]   },
       {
         img: 'img/avatar_7.jpg',
           text: 'Pallina',
           messge:[ {
                     date: '10/01/2020 15:50:00',
                     message: 'Ricordati di dargli da mangiare',
                     status: 'sent'
                 },
                 {
                     date: '10/01/2020 16:15:22',
                     message: 'Tutto fatto!',
                     status: 'received'
                 },
                 {
                 date: '20/03/2020 16:30:00',
                 message: 'Ciao come stai?',
                 status: 'sent'
             },
                 {
                     date: '20/03/2020 16:30:55',
                     message: 'Bene grazie! Stasera ci vediamo?',
                     status: 'received'
                 },
                 {
                     date: '20/03/2020 16:35:00',
                     message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                     status: 'received'
                 }]  },
          {
            img: 'img/avatar_6.jpg',
           text: 'Robin',
           messge:[ {
                     date: '10/01/2020 15:50:00',
                     message: 'Ricordati di dargli da mangiare',
                     status: 'sent'
                 },
                 {
                     date: '10/01/2020 16:15:22',
                     message: 'Tutto fatto!',
                     status: 'received'
                 },
                 {
                 date: '20/03/2020 16:30:00',
                 message: 'Ciao come stai?',
                 status: 'sent'
             },
                 {
                     date: '20/03/2020 16:30:55',
                     message: 'Bene grazie! Stasera ci vediamo?',
                     status: 'received'
                 },
                 {
                     date: '20/03/2020 16:35:00',
                     message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                     status: 'received'
                 }]
        }
   ],
   currentUser:0,
    // search: '',
   newItem:''
 },
 // computed: {
 //   filteredAndSorted(){
 //    // function to compare names
 //    function compare(a, b) {
 //      if (a.name < b.name) return -1;
 //      if (a.name > b.name) return 1;
 //      return 0;
 //    }
 //
 //    return this.userList.filter(user => {
 //       return user.name.toLowerCase().includes(this.search.toLowerCase())
 //    }).sort(compare)
 //   }
 // },
 methods:{
   prova:function(index){
     this.currentUser=index;
   },
   addItem: function(){
     if (this.newItem !== ''){
        this.object[this.currentUser].messge. push({
            date: dayjs().format('DD/MM/YY HH.MM'),
            message: this.newItem,
            status: 'sent'
            });
         this.newItem = '';

    }
},
cambiaColore:function(event){
  if (this.colore=='red') {
     this.colore='blue';
  }else{
    this.colore='red';
  }

},
cambiaColore2:function(event){
  if (this.colore2=='red1') {
     this.colore2='blue1';
  }else{
    this.colore2='red1';
  }

},
// inserisciSm:function(){
// icone.smile1.push(newItem);
//
// },
cambiaColore1:function(event){
  if (this.colore1=='color-grey') {
     this.colore1='color-black';
  }else{
    this.colore1='color-grey';
  }

},
cambiaColore3:function(event){
  if (this.colore3=='c-grey') {
     this.colore3='c-black';
  }else{
    this.colore3='c-grey';
  }

}


 }


});
