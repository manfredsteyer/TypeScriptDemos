/**
 * Created by steyer on 29.02.2016.
 */

class Person {

    /*
    public vorname: string;
    public name: string;

    constructor(vorname: string, name: string) {
        this.name = name;
        this.vorname = vorname;
    }
    */
    constructor(
        public vorname: string,
        public name: string) {
    }

    public vollerName(): string {
        return this.vorname + " " + this.name;
    }

}

var p = new Person("Max", "Muster");
p.name = "Mustermann";