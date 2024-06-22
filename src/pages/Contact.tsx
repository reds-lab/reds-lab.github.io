import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const googleFormLink = "https://forms.gle/your-google-form-link"; // Replace with your actual Google Form link

  return (
    <>
      <h1>Contact</h1>

      <section className="contact-section">
        <h2>Prospective Ph.D. Students</h2>
        <p>We take on new Ph.D. students each year. We ask that you do not contact us directly with regard to Ph.D. admissions until after you are admitted, as we will not be able to reply to emails from individual applicants.</p>
      </section>

      <section className="contact-section">
        <h2>Prospective Postdocs</h2>
        <p>If you are interested in a post-doc position, please submit <a href={googleFormLink} target="_blank" rel="noopener noreferrer">this form</a>.</p>
      </section>

      <section className="contact-section">
        <h2>Virginia Tech Undergraduate or M.S. Students</h2>
        <p>If you are a current or admitted Virginia Tech undergraduate or M.S. student interested in research positions, please submit <a href={googleFormLink} target="_blank" rel="noopener noreferrer">this form</a>.</p>
      </section>

      <section className="contact-section">
        <h2>Visiting Scholar</h2>
        <p>If you are not a Virginia Tech student and interested in visiting research positions, please submit <a href={googleFormLink} target="_blank" rel="noopener noreferrer">this form</a>.</p>
      </section>
    </>
  );
};

export default Contact;
