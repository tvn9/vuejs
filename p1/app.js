"use strict";

const vm = Vue.createApp({
    data() {
        return {
            firstName: "Thanh",
            middleName: "",
            lastName: "Nguyen",
            url: "https://www.udemy.com/",
            raw_url: '<a href="https://www.udemy.com/" target="_blank">Udemy.com</a>',
            age: 20,
        }
    },
    methods: {
        updateFname() {
            this.firstName = event.target.value
        },
        increment() {
            this.age++
        },
        updateLname(msg, event) {
            console.log(msg)
            this.lastName = event.target.value
        },
        updateMname(event) {
            this.middleName = event.target.value
        },
    },
    computed: {
        fullName() {
            console.log("Full name computed was called!");
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`
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
