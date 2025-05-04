debugger
function z() {
  var b = 12;
  function x() {
    var a = 10;
    function y() {
      console.log(a,b);// the refrence of a is return after we get value of that perticuler point.
    }
    a = 100;
    return y();
  }
  return x();
}
console.log(z())


