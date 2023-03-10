import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
    id?:number,
    name?:string,
    age?:number
};

const rootUrl = "http://localhost:3000/users";

export class User {
    //Only accept properties into constructor.
    //Hard code dependencies as class properties
    public events:Eventing = new Eventing();   
    public sync:Sync<UserProps> = new Sync<UserProps>(rootUrl);
    public attributes:Attributes<UserProps>;

    constructor(attrs:UserProps){
        this.attributes = new Attributes<UserProps>(attrs);
    }
};