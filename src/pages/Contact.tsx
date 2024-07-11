import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const emailAddress = 'ruoxijia@vt.edu';

  return (
    <>
      <h1>Contact</h1>

      <section className="contact-section">
        <h2>Prospective Ph.D. Students</h2>
        <p>Thank you for your interest in our research group! To ensure your application gets the attention it deserves, please email me your CV at <strong>{emailAddress}</strong> and apply to the <strong>Electrical and Computer Engineering (ECE) Department</strong>.</p>
        <p><strong>Admission Process:</strong> Please follow the application procedure <a href="https://ece.vt.edu/grad/prospective.html" target="_blank" rel="noopener noreferrer">here</a>. Please ensure you:</p>
        <ol>
          <li>Select the sub-area "Machine Intelligence."</li>
          <li>Choose the program "Computer Engineering (CpE)."</li>
          <li>Mention my name in your application. This will help me track your application more effectively.</li>
        </ol>
      </section>

      <section className="contact-section">
        <h2>Prospective Postdocs</h2>
        <p>If you are considering a postdoc position with us, please email me your CV, Google Scholar profile, desired start date, expected Ph.D. graduation date, and two selected publications at <strong>{emailAddress}</strong>.</p>
      </section>

      <section className="contact-section">
        <h2>Visiting Researcher</h2>
        <p>If you are not currently enrolled at VT but are interested in a short-term visit or remote research opportunities with us, please email me your CV along with a brief description of your past research experience and research interests at <strong>{emailAddress}</strong>.</p>
      </section>

      <section className="contact-section">
        <h2>VT Undergraduate or M.S. Students</h2>
        <p>If you are a current or admitted VT undergraduate or M.S. student and are interested in research opportunities, please email me your CV at <strong>{emailAddress}</strong>.</p>
      </section>
    </>
  );
};

export default Contact;