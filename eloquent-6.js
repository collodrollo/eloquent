const finder = {
    find(array) {
        return array.some(v => {
            return v === this.value
        });
    },
    find2(array) {
        return array.some(function(v) {
            return v === this.value;
        })
    }, 
    value: 5
}

const sym = Symbol("random number");
const obj = {
    value: 5,
    testThis() {
        return {
            value: 6,
            arrow: () => {console.log(this.value)}
        }
    },
    [sym]: 100
}
console.log(obj);
console.log(obj[sym])



class Rabbit {
    #height = "5 inches";

    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }

    sayHeight() {
        console.log(`I am ${this.#height} tall`);
    }
}


// Why doesn't speak make an appearance i``n Rabbit's prototype?
const blackRabbit = new Rabbit('black');``
console.log(Object.getPrototypeOf(blackRabbit));
console.log('getPrototypeOf rabbit', Object.getPrototypeOf(Rabbit));
console.log('Rabbit prototype', Rabbit.prototype)
console.log(Rabbit.constructor.prototype)
console.log(blackRabbit.__proto__)
console.log('getOwnPropertyNames rabbit', Object.getOwnPropertyNames(Rabbit.prototype));

blackRabbit.sayHeight();
// If a class name is just a function who shares a body with its constructor and its properties are added to its prototype, why can't I see them?



function testProto() {

}

testProto.prototype.x = 10;
testProto.prototype.foo = () => console.log("HEY");
console.log(testProto.prototype);


const map = new Map();
map[3] = 5;
map.set(5, 7);

console.log(typeof Object.keys(map)[0]);
console.log(map.size);

for (let key of map.keys()) {
    console.log(key);
}



// exercises

// Vector (x, y) coord that supports addition and subtraction on other Vectors
// length property should calculate a Vector's distance from the origin

class Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    plus(v) {
        return new Vector(this.x + v.x, this.y + v.y);
    }

    minus(v) {
        return new Vector(this.x - v.x, this.y - v.y);
    }

    get length() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

const v1 = new Vector(1, 2);
const v2 = new Vector(2, 3);
const v3 = new Vector(3, 4);

console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log(v3.length);


// Group class with similar properties as Set
// empty by default, .from creates a Group from an iterable,
// .has checks whether an value exists in the Group, .add adds
// a value to the group

class Group {
    constructor() {
        this.values = []
    }

    add(val) {
        if (!this.values.includes(val)) {
            this.values.push(val);
        }
    }

    has(val) {
        return this.values.includes(val);
    }

    delete(val) {
        const i = this.values.indexOf(val);
        if (i >= 0) {
            this.values.splice(i, 1);
        }
    }
    
    static from(iterable) {
        const g = new this();
        for (let val of iterable) {
            g.add(val)
        }
        return g
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

}


const group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));

// Make Group iterable.

class GroupIterator {
    constructor(group) {
        this.group = group
        this.i = 0
    }

    next() {
        if (this.group.values.length === this.i) {
            return {"done": true}
        }
        const state =  {value: this.group.values[this.i], "done": false}
        this.i += 1
        return state
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}

// Why do iterator methods have to be named using Symbol.iterator? Why not just a designated word, such as "iterator?"
// The same way prototypes can be accessed using .prototype
