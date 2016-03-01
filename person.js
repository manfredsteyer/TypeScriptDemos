/**
 * Created by steyer on 29.02.2016.
 */
var Person = (function () {
    /*
    public vorname: string;
    public name: string;

    constructor(vorname: string, name: string) {
        this.name = name;
        this.vorname = vorname;
    }
    */
    function Person(vorname, name) {
        this.vorname = vorname;
        this.name = name;
    }
    Person.prototype.vollerName = function () {
        return this.vorname + " " + this.name;
    };
    return Person;
})();
var p = new Person("Max", "Muster");
p.name = "Mustermann";
//# sourceMappingURL=person.js.map