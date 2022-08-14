"use strict";

Vue.createApp({
    data() {
        return {
            firstName: "Thanh",
            lastName: "Nguyen",
        }
    }
}).mount(".app-1");

Vue.createApp({
    data() {
        return {
            job: "Programmer",
            salary: "130000",
        }
    }
}).mount(".app-2");
