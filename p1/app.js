"use strict";

const vm = Vue.createApp({
    data() {
        return {
            firstName: "Thanh",
            lastName: "Nguyen",
            url: "https://www.udemy.com/",
            raw_url: '<a href="https://www.udemy.com/" target="_blank">Udemy.com</a>',
            age: 20,
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        },
        increment() {
            this.age++
        },
        updateLname(msg, event) {

            console.log(msg)
            this.lastName = event.target.value
        },
    }
}).mount("#app-1");


// setTimeout(() => {
//     vm.firstName = "Mike";
//     vm.lastName = "McNillin";
// }, 2000);


// Vue.createApp({
//     data() {
//         return {
//             job: "Programmer",
//             salary: "130000",
//         }
//     }
// }).mount(".app-2");
