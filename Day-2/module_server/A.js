const pi = 3.14;

function add(a,b){
    console.log(a + b);
}

class A{
    id
    name

    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    display(){
        console.log(this.id + " " + this.name);
    }
}

module.exports = {pi, add, A};