
class hero {
  _name = 'John Doe'
  getSecretldentity1 = () => {
    return this._name;
  }
  getSecretldentity() {
    return this._name;
  }

  getSecretldentity2() {
    // let self = this
    // setTimeout(function () {
    //   console.log(self._name + '2')
    // }, 1000)
    setTimeout(function () {
      console.log(this._name + '2')
    }.bind(this), 1000)
    
  }

}

let h = new hero()

// var stoleSecretldentity = hero.getSecretldentity.bind(hero);
var stoleSecretldentity1 = h.getSecretldentity1
var stoleSecretldentity = h.getSecretldentity.bind(h)

console.log(stoleSecretldentity1());
console.log(stoleSecretldentity());
console.log(h.getSecretldentity());
console.log(h.getSecretldentity2());


