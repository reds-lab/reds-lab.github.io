import React from 'react';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <h1>Contact Information</h1>

      <section className="contact-section">
        <h2>Prospective Ph.D. Students</h2>
        <p>We welcome new Ph.D. students each year. To maintain fairness in our admissions process, we kindly ask that you refrain from contacting us directly regarding Ph.D. admissions until after you have been admitted. We are unable to respond to individual applicant inquiries prior to admission decisions.</p>
      </section>

      <section className="contact-section">
        <h2>Prospective Postdocs</h2>
        <p>If you are interested in a postdoctoral position, please email your CV and research statement to:</p>
        <p>Email: [Professor's Email]@vt.edu</p>
      </section>

      <section className="contact-section">
        <h2>Virginia Tech Undergraduate or M.S. Students</h2>
        <p>Current or admitted Virginia Tech undergraduate or M.S. students interested in research positions can email us with their resume and a brief statement of research interests.</p>
        <p>Email: [Lab Email]@vt.edu</p>
      </section>

      <section className="contact-section">
        <h2>Visiting Scholar Opportunities</h2>
        <p>If you are not a Virginia Tech student and are interested in visiting research positions, please email us with your CV and a brief research proposal.</p>
        <p>Email: [Professor's Email]@vt.edu</p>
      </section>

      <section className="contact-section">
        <h2>General Inquiries</h2>
        <p>For other inquiries, you can reach us at:</p>
        <p>Email: [Lab Email]@vt.edu</p>
        <p>Address: [Lab Name], Department of Computer Science, Virginia Tech, Blacksburg, VA 24061</p>
      </section>
    </div>
  );
};

export default Contact;