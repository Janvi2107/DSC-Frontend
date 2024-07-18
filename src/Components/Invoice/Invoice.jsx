// import Nav from "../Navigator/Nav";

// // function Invoice() {
// //     return(
    
// //         <div>
// //              <Nav/>
// //         <h2></h2>
        
// //         </div>
// //     );
    
// //     }
// //     export default Invoice;




// import './Invoicestyle.css';
// import React from 'react';

// const Invoice = () => {
//   const company = "PEARL INFO";
//   const companyAddress = "Shop No. 49/A, 2nd Floor, The Mall Shopping Center, Station Road, Malad (West), Mumbai -400 064.";
//   const companyContact = "Mob.: 9029433702 E-mail: mehtaharsha24@gmail.com";
//   const customerName = "M/s. [Customer Name]";
//   const customerId = "[Customer ID]";
//   const invoiceNumber = "066";
//   const date = new Date().toLocaleDateString();
//   const items = [
//     { description: "Product A", quantity: 2, unitPrice: 10.00 },
//     { description: "Service B", quantity: 1, unitPrice: 50.00 },
//   ];
//   const totalAmount = items.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);

//   return (
    
//     <div className="invoice">
//       <div className="invoice-header">
//         <h2>{company}</h2>
//         <div className="company-info">
//           <p>{companyAddress}</p>
//           <p>{companyContact}</p>
//         </div>
//       </div>

//       <div className="invoice-body">
//         <div className="invoice-details">
//           <p>Invoice No.: {invoiceNumber}</p>
//           <p>Date: {date}</p>
//         </div>

//         <div className="customer-details">
//           <p>Customer Detail:</p>
//           <p>Customer ID: {customerId}</p>
//           <p>M/s. {customerName}</p>
//         </div>

//         <table className="invoice-items">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Description</th>
//               <th>Quantity</th>
//               <th>Unit Price</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{item.description}</td>
//                 <td>{item.quantity}</td>
//                 <td>{item.unitPrice}</td>
//                 <td>{item.quantity * item.unitPrice}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         <div className="total">
//           <p>Rupees in Words.</p>
//           <p>{totalAmount}</p>
//         </div>
//       </div>

//       <div className="signature">
//         <p>For PEARL INFO</p>
//         <p>PAN NO.: ANMPM5094P</p>
//         <p>Authorised Signature</p>
//       </div>
//     </div>
//   );
// };

// export default Invoice;