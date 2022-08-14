"use strict";

const vm = Vue.createApp({
    data() {
        return {
            firstName: "Thanh",
            lastName: "Nguyen",
            url: "https://www.udemy.com/course/complete-vue-js-developer-zero-to-mastery-vuex/",
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`;
        }
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
