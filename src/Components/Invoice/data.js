const invoiceData = {
    company: "PEARL INFO",
    companyAddress: "Shop No. 49/A, 2nd Floor, The Mall Shopping Center, Station Road, Malad (West), Mumbai -400 064.",
    companyContact: "Mob.: 9029433702 E-mail: mehtaharsha24@gmail.com",
    customerName: "M/s. [Customer Name]",
    customerId: "[Customer ID]",
    invoiceNumber: "066",
    date: new Date().toLocaleDateString(),
    items: [
      { description: "Product A", quantity: 2, unitPrice: 10.00 },
      { description: "Service B", quantity: 1, unitPrice: 50.00 },
    ],
    totalAmount: 70.00, // Calculated from item quantities and unit prices
  };
  
  export default invoiceData;