
//This class calculate the latefee based on the currentdate with duedate
class Invoice {
    constructor(invoiceNumber, clientName, amount, dueDate, lateFeePerDay) {
        invoiceNumber = this.invoiceNumber;
        clientName = this.clientName;
        amount = this.amount;
        dueDate = this.dueDate;
        lateFeePerDay = this.lateFeePerDay;
    }

    //This method is used to calculate the late fee for the due and it take currentDate as
    //parameter
    calculateLateFee(currentDate) {
        // milliseconds in one day
        const oneDayInMilliSeconds = 24 * 60 * 60 * 1000; 
        // calculate how many days late from the actual due date
        const daysLateForFeePayment = Math.floor((currentDate - this.dueDate) / oneDayInMilliSeconds); 
        return daysLateForFeePayment > 0 ? `$ ${daysLateForFeePayment * 5}` : 0;
      }
    
}


// This function take invoices as an array and currentDate both as an parameters and do 
// three invoice related operations
function manageInvoices(invoices, currentDate) {
    // Filter overdue invoices to filter the array based on condition filter method is used
    const overdueInvoices = invoices.filter(invoice => invoice.dueDate < currentDate);

    // Calculate total amount due for overdue invoices when want single value from the array reduce method used for that
    const totalAmountDue = overdueInvoices.reduce((total, invoice) => total + invoice.amount, 0);

    // Sort overdue invoices by due date (sort method is used to sort the arrays)
    const sortOverDueInvoices = overdueInvoices.sort((a, b) => a.dueDate - b.dueDate);

    return {
        overdueInvoices,
        totalAmountDue,
        sortOverDueInvoices
    };
}


// This function will receice invoices as an array but there is no currentDate 
// so as a default value take new Date() (currentDate) and
// it will perform three operations and return object
function generateInvoiceReport (invoices, currentDate = new Date()){
    // calculate totalInvoices just using length property from an array
    const totalInvoices = invoices.length;

    // totalamountdue for the invoices that are dued and calculate single value using reduce method
    const totalAmountDue = invoices.reduce((total, invoice) => total + invoice.amount, 0);

    // check overdueinvoices using filter method and get the length
    const overdueInvoices = invoices.filter(invoice => invoice.dueDate < currentDate).length;

    //if key and value names are same don't need to write again {key : value} instead can write like below
    return {
        totalInvoices,
        totalAmountDue,
        overdueInvoices
    };
}


// This function extracts the Email from the paramter(invoiceText)
function extractEmails(invoiceText) {
    //perform regex pattern for identify whether text is matching email pattern like 123@gmail.com
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    //output as an array if not match return []
    return invoiceText.match(emailRegex) || [];
}



// as per the expectations
// followed naming convention for classes - pascalCase for functions and variables camelCase
// followed semicolon in each line ending 
// followed adding comments for each thing which need more clarity





