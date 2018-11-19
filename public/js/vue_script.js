'use strict';
var socket = io();

var vm = new Vue({
  el: '#myID',
  data: {
    orders: [],
    burgerOrders: [],
    message: "hello",
    name: "",
    email: "",
    payment: "",
    gender: "",
    arbitraryVariableName: 'Välj din burgare',
    burgers: food,
  },
    methods: {
      markDone: function() {
        this.response="yay!"
        console.log("yay!")
      },
        getNext: function () {
          var lastOrder = Object.keys(this.orders).reduce( function (last, next) {
            return Math.max(last, next);
          }, 0);
          return lastOrder + 1;
      }
    },
   created: function () {
     socket.on('initialize', function (data) {
       this.orders = data.orders;
     }.bind(this));

     socket.on('currentQueue', function (data) {
       this.orders = data.orders;
     }.bind(this));
   },
     addOrder: function (event) {
       socket.emit("addOrder", { orderId: this.getNext(),
                                 details: { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
                                            y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top},
                                 orderItems: ["Beans", "Curry"]
                               });
     }


})
