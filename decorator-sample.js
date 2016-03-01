var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Docu(target, key, descriptor) {
    console.debug(target);
    console.debug(key);
    console.debug(descriptor);
    console.debug("---");
}
function DocuWithLabel(label) {
    return function (target, key, descriptor) {
        console.debug(label);
        console.debug(target);
        console.debug(key);
        console.debug(descriptor);
        console.debug("---");
    };
}
function Log(target, key, descriptor) {
    if (!key) {
        console.error("Mit @Log dürfen nur Member dekoriert werden!");
        return;
    }
    var property = descriptor.value; // function
    if (!property || typeof property !== "function") {
        console.error("Mit @Log dürfen nur Member dekoriert werden!");
        return;
    }
    descriptor.value = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i - 0] = arguments[_i];
        }
        console.debug('Calling ' + target.constructor.name + '.' + key);
        return property.apply(this, params);
    };
}
var Hotel = (function () {
    function Hotel(name, ranking, price) {
        this.name = name;
        this.ranking = ranking;
        this.price = price;
    }
    Hotel.prototype.gi = function (preText) {
        return preText + this.name + " " + this.ranking + " " + this.price;
    };
    __decorate([
        Docu, 
        __metadata('design:type', String)
    ], Hotel.prototype, "name", void 0);
    __decorate([
        Docu, 
        __metadata('design:type', Number)
    ], Hotel.prototype, "ranking", void 0);
    __decorate([
        Docu, 
        __metadata('design:type', Number)
    ], Hotel.prototype, "price", void 0);
    __decorate([
        Log,
        Docu,
        __param(0, Docu), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [String]), 
        __metadata('design:returntype', String)
    ], Hotel.prototype, "gi", null);
    Hotel = __decorate([
        DocuWithLabel("Repräsentiert ein Hotel"),
        __param(0, Docu), 
        __metadata('design:paramtypes', [String, Number, Number])
    ], Hotel);
    return Hotel;
})();
var h = new Hotel('Zur Post', 2, 40);
var h2 = new Hotel('Zur Post', 2, 40);
console.debug(h.info("Hotel-Info: "));
console.debug(h2.info("Hotel-Info: "));
//# sourceMappingURL=decorator-sample.js.map