
it('should calculate the monthly rate correctly', function () {
  values = {
    amount: 30000,
    years: 12,
    rate: 3
  }
  expect(calculateMonthlyPayment(values)).toEqual('248.34');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 4
  };
  expect(calculateMonthlyPayment(values)).toEqual('101.25')
});

/// etc
it('should calculate a positive number', function(){
  const values = {
    amount: 10000,
    years: 10,
    rate: 4
  };
  expect(calculateMonthlyPayment(values)).toBeGreaterThan('0');
})