import { User } from './models/User';

const user = new User({name:"ahmetb",age:32});

user.events.on("change",() => {
    console.log("change");
})

user.events.trigger("change");