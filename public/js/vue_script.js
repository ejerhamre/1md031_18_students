'use strict';
var socket = io();

var vm = new Vue({
  el: '#myID',
  data: {
    orders: [],
    burgerOrders: [],
    customerInfo: [],
    message: "hello",
    name: "",
    email: "",
    payment: "",
    gender: "",
    details: {},
    location: {x: "", y:""},
    show: true,
    arbitraryVariableName: 'Välj din burgare',
    burgers: food,
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
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
          return "T";
      },
      addOrder: function (event) {
        socket.emit("addOrder", { orderId: this.getNext(),
                                  details: { x: event.clientX-10 - event.currentTarget.getBoundingClientRect().left,
                                             y: event.clientY-10 - event.currentTarget.getBoundingClientRect().top},
                                  orderItems: [this.burgerOrders],
                                  customerInfo: [this.name, this.email, this.payment, this.gender]
                                });
      },
      displayOrder: function (event) {
        var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
                    this.details.x = event.clientX;
                    this.details.y = event.clientY;
                    /*this.location.x = {event.clientX - 10 - offset.x};
                    this.location.y = {event.clientY - 10 - offset.y};*/
                    this.location = { x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y };
      }
   

}
})
