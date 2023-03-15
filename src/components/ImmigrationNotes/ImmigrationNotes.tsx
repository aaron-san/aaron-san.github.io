import React from "react";

const ImmigrationNotes = () => {
  return (
    <div className="container text-dark m-1 p-1">
      <h1>Immigration Notes</h1>
      <hr />
      <div className="todo">
        <h2>To Do</h2>
        <ul>
          <li>
            Get Foreign birth certificate (e.g., Family Register ("Koseki
            Tohon") (requires English translation)
          </li>
          <li>Parents' IDs (Original + 1 photocopy)</li>
          <li>
            Completed Form DS-11 (2 pages, Complete online and print out
            single-sided)
          </li>
          <li>One self-addressed "Japan Post LetterPack envelope"</li>
          <li>
            Applicant's Passport Photo (Only white backgrounds (NO BLUE) (2" x
            2"))
          </li>
        </ul>
      </div>

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
      <h2>Boy's Passport</h2>
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
          contact the Federal Benefits Unit via their online inquiry form.
          https://jp.usembassy.gov/services/social-security/inquiries-for-the-federal-benefits-unit/
          {/* mail the passport and birth documents to the U.S. Embassy in Tokyo
          (see website). */}
        </li>
      </ul>

      <h2>Girl's Passport</h2>
      <ul>
        <li>
          Make appointment
          https://evisaforms.state.gov/acs/default.asp?postcode=TKY&appcode=1
        </li>
      </ul>

      <h2>Green Card</h2>
      <ul>
        See here. https://jp.usembassy.gov/visas/immigrant-visas/green-card/
      </ul>
    </div>
  );
};

export default ImmigrationNotes;
