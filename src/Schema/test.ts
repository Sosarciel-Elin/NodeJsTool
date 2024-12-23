import { ReflectionClass,cast,validate,integer, reflect  } from '@deepkit/type';




type User = {
    uid: number;
    uusername: string;
};
class UserClass<T> {

    constructor(private data: T) {}
}

class TU extends UserClass<User>{}
const userSchema = ReflectionClass.from(TU);
console.log(userSchema.type.types[1]);
