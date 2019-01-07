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
    location: {x:0, y:0},
    show: true,
    arbitraryVariableName: 'Välj din burgare',
    burgers: food,
    orderNum: 0,
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
      getNextDisp: function () {
        this.orderNum = this.orderNum + 1
        return this.orderNum;
      },
      addOrder: function (event) {
        var locx = this.location.x;
        var locy = this.location.y;
        var customerInfo = "Name: " + this.name+ ", Email: "+ this.email + ", Payment method: "+ this.payment + ", Gender: "+ this.gender;
        socket.emit("addOrder", { orderId: this.getNextDisp(),
                                  details: { x: locx, y: locy},
                                  orderItems: [this.burgerOrders, customerInfo]
                                });
      },
      setLocation: function (ev) {
        var offset = {x: ev.currentTarget.getBoundingClientRect().left,
                      y: ev.currentTarget.getBoundingClientRect().top};
                    this.location.x = ev.clientX - 10 - offset.x;
                    this.location.y = ev.clientY - 10 - offset.y;

      }


}
})
