var hero = /** @class */ (function () {
    function hero() {
        var _this = this;
        this._name = 'John Doe';
        this.getSecretldentity1 = function () {
            return _this._name;
        };
    }
    hero.prototype.getSecretldentity = function () {
        return this._name;
    };
    hero.prototype.getSecretldentity2 = function () {
        // let self = this
        // setTimeout(function () {
        //   console.log(self._name + '2')
        // }, 1000)
        setTimeout(function () {
            console.log(this._name + '2');
        }.bind(this), 1000);
    };
    return hero;
}());
var h = new hero();
// var stoleSecretldentity = hero.getSecretldentity.bind(hero);
var stoleSecretldentity1 = h.getSecretldentity1;
var stoleSecretldentity = h.getSecretldentity.bind(h);
console.log(stoleSecretldentity1());
console.log(stoleSecretldentity());
console.log(h.getSecretldentity());
console.log(h.getSecretldentity2());
