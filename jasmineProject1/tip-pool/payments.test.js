describe('Testing Payment section of program',() =>{
    beforeEach(function(){
        billAmtInput.value = 60;
        tipAmtInput.value = 12;

    });

    it('should add a new payment to AllPayments on submitPaymentInfo();',() =>{
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('60');
        expect(allPayments['payment1'].tipAmt).toEqual('12');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
        
    });

    it('should not add a new payment to submitPaymentInfo() if either input is empty',()=>{
        
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
        
    });

    it('should not add a new payment to submitPaymentInfo() if billAmt.value is negative',()=>{
        
        billAmtInput.value = '-1';
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);

    });

    it('should update #paymentTable with appendPaymentTable()', () =>{

        let curPayment = createCurPayment();

        allPayments['payment1'] = curPayment;

        appendPaymentTable(curPayment);

        let currentAmt = document.querySelectorAll('#paymentTable tbody tr td');

        expect(currentAmt[0].textContent).toEqual('$60');
        expect(currentAmt[1].textContent).toEqual('$12');
        expect(currentAmt[2].textContent).toEqual('20%');

    });

    it('should create a new payment with createCurPayment()', ()=>{

        let expectedPayout = {

            billAmt: '60',
            tipAmt: '12',
            tipPercent: 20
        }

        expect(createCurPayment()).toEqual(expectedPayout);
    });

    it('should not create payment with empty input with createCurPayment()', ()=>{

        billAmtInput.value = '';
        tipAmtInput.value = '';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });
    it('should not create payment with negative input with createCurPayment()', ()=>{

        billAmtInput.value = '-1';
        tipAmtInput.value = '-1';
        let curPayment = createCurPayment();

        expect(curPayment).toEqual(undefined);
    });

    it('should create a "td" element with the value "x"', ()=>{
        let newTr = document.createElement('tr');
        let deleteTd = document.createElement('td');
        deleteTd.textContent = 'X';

        appendDeleteBtn(newTr);

        expect(deleteTd.textContent).toEqual('X');  
    }); 










    /* Think about this before construction your tests. this way you clear out everything you need to
    before the next test runs!! */
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
      });

});