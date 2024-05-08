describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(()=>{

        billAmtInput.value = 200;
        tipAmtInput.value = 40;


        submitPaymentInfo();
    });

    it('should add up the total tip amount of all payments on sumPaymentTotal();',()=>{
         expect(sumPaymentTotal('tipAmt')).toEqual(40);

        billAmtInput.value = 400;
        tipAmtInput.value = 80;
        
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(120);
    });

    it('should convert the bill and tip amount into a tip percentage in sumPaymentTotal',()=>{
        billAmt = 200;
        tipAmt = 40;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(20);
    });

    it('should append a newly created td element from the value on appendTd(tr,value)',()=>{

        let newTr = document.createElement('tr');
        appendTd(newTr, 'testing');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('testing');
    })

    /* anything that stores information gets cleared and reset */
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });

});