var assert = require("assert");

describe('Array', function(){

  var test;
  beforeEach(function() {
    test = [ 'a', 'b', 'c'];
  });

  describe('array methods', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(test.length,3);
      assert.equal(test.indexOf('b'), 1);
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    });

    it('removes last item', function() {
      var array = [1,2,3];
      var popped = array.pop();
      assert.equal(array.length,2);
      assert.equal(popped, 3);
    });

    it('adds last item', function() {
      var array = [10,12,13];
      var push = array.push(14);
      assert.equal(array.length,4);
      assert.equal(push, 4);
    });

    it('splice array', function() {
      var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
      var removed = myFish.splice(2, 0, 'drum');
      assert.equal(myFish.length,5);
      assert.deepEqual(removed, []);
    });

    it('map check', function() {
      var numbers = [1, 4, 9];
      var roots = numbers.map(Math.sqrt);
      assert.equal(numbers.length,3);
      assert.equal(roots.length,3);
      assert.deepEqual(roots, [1, 2, 3]);
    });

    it('reverse check', function() {
      var forward = [1, 21, 100, 1001];
      var backward = forward.reverse();
      assert.equal(forward.length,4);
      assert.equal(backward.length,4);
      assert.deepEqual(backward, [1001, 100, 21, 1]);
    });

    it('reverse check', function() {
      var forward = [1, 21, 100, 1001];
      var backward = forward.reverse();
      assert.equal(forward.length,4);
      assert.equal(backward.length,4);
      assert.deepEqual(backward, [1001, 100, 21, 1]);
    });
  });

});
