document.getElementById('generateBtn').addEventListener('click', function() {
    // Retrieve form values
    const receiptNo = document.getElementById('receiptNo').value;
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('from').value;
    const paymentFor = document.getElementById('paymentFor').value;
    const receivedBy = document.getElementById('receivedBy').value;

    // Update receipt preview
    document.getElementById('displayReceiptNo').innerText = receiptNo;
    document.getElementById('displayDate').innerText = date;
    document.getElementById('displayAmount').innerText = amount;
    document.getElementById('displayFrom').innerText = from;
    document.getElementById('displayPaymentFor').innerText = paymentFor;
    document.getElementById('displayReceivedBy').innerText = receivedBy;

    // Show receipt and print button
    document.getElementById('receiptPreview').style.display = '';
    document.getElementById('receiptForm').style.display = 'none';
    document.getElementById('button-grp').style.display = '';
});

document.getElementById('editBtn').addEventListener('click', function() {
    document.getElementById('receiptPreview').style.display = 'none';
    document.getElementById('receiptForm').style.display = '';
    document.getElementById('button-grp').style.display = 'none';
});

document.getElementById('printBtn').addEventListener('click', function() {
    window.print();
});