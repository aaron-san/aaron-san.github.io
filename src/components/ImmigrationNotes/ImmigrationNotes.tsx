import React from "react";

const ImmigrationNotes = () => {
  return (
    <div className="container text-dark m-1 p-1">
      <h1>ImmigrationNotes</h1>
      <hr />
      <h2>STEP 1:</h2>
      <h3>Consular Report of Birth Abroad (Form FS-240/FS-1350)</h3>
      <ul>
        <li>
          Apply online, make appointment for in-person interview (parents and
          baby)
        </li>
        <li>
          Schedule an appointment at which time all passport documents will be
          brought to the interview as well
        </li>
        <li>
          Passport information can be submitted at the time of the interview!!!!
        </li>
      </ul>
      <h2>Passport</h2>
      <ul>
        <li>
          https://jp.usembassy.ogv/passports/children-under-16-first-time-and-renewal
        </li>
        <li>Procesing time: 3-4 weeks</li>
        <li>
          Must bring original + 1 photocopy (originals will be returned after
          reviewing the application)
        </li>
        <li>
          Must appear in person (applicant and parents) (appointment required)
        </li>
      </ul>

      <h2>Documents</h2>
      <ol>
        <li>Proof of parent-child relationship: </li>
        <ul>
          <li>Consular Report of Birth Abroad</li>
          <li>
            Foreign birth certificate (e.g., Family Register ("Koseki Tohon")
            (requires English translation)
          </li>
        </ul>
        <li>Parents' IDs:</li>
        <ul>
          <li>original + 1 photocopy</li>
        </ul>
        <li>Applicant's Passport Photo</li>
        <ul>
          <li>Only white backgrounds (NO BLUE) (2" x 2")</li>
        </ul>
        <li>
          Completed <strong>Form DS-11</strong>
        </li>
        <ul>
          <li>Complete online and print out single-sided</li>
        </ul>
        <li>One self-addressed "Japan Post LetterPack envelope"</li>
        <ul>
          <li>Online payment ($135)</li>
        </ul>
      </ol>
      <h2>STEP 3:</h2>
      <h3>Social Security Card</h3>
      <ul>
        <li>
          Can only be applied for after receiving the original Consular Report
          of Birth Abroad and Passport.
        </li>
        <li>
          First, get a U.S. passport and Consular Report of Birth Abroad, then
          mail the passport and birth documents to the U.S. Embassy in Tokyo
          (see website).
        </li>
      </ul>
    </div>
  );
};

export default ImmigrationNotes;
