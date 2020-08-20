Function.prototype.before = function (beforefn) {
    const _self = this;
    return function () {
        if (beforefn.apply(this, arguments) === false) return;
        return _self.apply(this, arguments);
    };
};


function a(a){
    console.log(a)
}

function b(b){
    console.log(b)
}

a.before(b(2))(1)
