import React from "react";
import MiscNotes from "../../components/MiscNotes";
// import * as d3 from "d3";
// import tickers_sorted_by_revenue from "../../data/tickers_sorted_by_revenue.csv";

// 1. Helper functions
// const dateParser = d3.timeParse("%m/%d/%Y");

// 2. Type Conversion
// function type(d) {
//   return {
//     Ticker: d["ticker"],
//     RndNum: +d["rnd_num"],

//     //  CustomerName: d[“Customer Name”],
//     //  City: d.City,
//     //  State: d.State,
//     //  PostalCode: +d[“Postal Code”],
//     //  OrderDate: dateParser(d[“Order Date”]),
//     //  ShipDate: dateParser(d[“Ship Date”])
//   };
// }

// // 3. Load Data
// d3.csv(tickers_sorted_by_revenue)
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     throw err;
//   });
// .row(function (d) {
//   return { ticker: d.ticker, rndNum: +d.rnd_num };
// });
// .get(function (error, rows) {
//   console.log(rows);
// });

// , function (d) {
//   return {
//     ticker: d.ticker,
//     rnd_num: +d.rnd_num,
//   };
// });
//   ,
//   function (error, rows) {
//     console.log(rows);
//   }
// );

// })
// .then((res) => {
// d3.csv("data/tickers_sorted_by_revenue.csv").then((res) => {

const Services = () => {
  return (
    <section className="max-w-4xl mx-auto shadow-md p-6">
      {/* <MiscNotes /> */}
      <h1>Services</h1>
      <ul>
        <li>Financial Modeling</li>
        <li>Business Valuation</li>
        <li>Website Builder</li>
      </ul>
    </section>
  );
};

export default Services;
