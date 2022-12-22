import { User } from "./models/User";

let user = new User({name:"semih",age:20})

user.on("change",() => {
    console.log("change event triggered!")
});
user.on("getElement",() => {
    console.log("change getElement triggered!")
});

user.trigger("change");
user.trigger("getElement");
