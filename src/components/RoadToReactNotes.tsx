import React from "react";

function RoadToReactNotes() {
  return (
    <div className="w-2 font-red">
      <br />
      <h2 className="font-green">Road to React Notes</h2>
      <h2>Author</h2>
      <p>
        Robin Wieruch regularly wrote articles about web develomemtn on his
        website. He recieved great feedback from people learning from the
        articles. Currently, he is a self-employed developer helping companies
        in creating their MVPs, conducting workshops and cocde audits/reviews,
        and creating large-scale Javascript applications.
      </p>
      <div>https://www.robinwieruch.de/about</div>
      <br />

      <p>P. 11</p>
      <div>Command Line</div>
      <code>npx create-react-app hacker-stories</code>
      <div>Command Line</div>
      <code>cd hacker-stories</code>

      <p>P. 13</p>
      <div>Command Line</div>
      <div>#Runs the application in http://localhost:3000</div>
      <code>npm start</code>
      <div># Runs the tests</div>
      <code>npm test</code>
      <div>#Builds the application for production</div>
      <code>npm run build</code>
    </div>
  );
}

export default RoadToReactNotes;

// const PageNumber = styled.div`
//   display: block;
//   font-size: 2rem;
//   color: rgba(100, 0, 0, 0.6);
//   border-bottom: 2px solid #333;
// `;

// const StyledCode = styled.code`
//   display: block;
//   padding: 5px 8px;
//   background: #313131;
//   color: white;
//   border-radius: 5px;
//   margin-bottom: 10px;
// `;

// const CodeLabel = styled.div`
//   display: block;
//   font-size: 1.2rem;
//   color: rgba(0, 0, 200, 0.8);
// `;
