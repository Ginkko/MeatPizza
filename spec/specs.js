describe('Pizza', function () {
  it('creates a new Pizza object with the appropriate attributes', function () {
      var testPizza = new Pizza('Megga-Za', 16);
      expect(testPizza.name).to.equal('Megga-Za');
      expect(testPizza.size).to.equal(16);
    });
  });
