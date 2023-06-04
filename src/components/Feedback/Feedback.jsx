import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Feedback = () => {
    const [feedback, setFeedback] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [email, setEmail] = useState('')
    emailjs.init('1AkXF-PC-6FG2Ym15')

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            feedback: feedback,
            from_email: email,
            to_email: 'jasondsouza212@gmail.com'
        };
        emailjs
            .send('service_cyny6n2', 'template_b2rscqn', templateParams, '1AkXF-PC-6FG2Ym15')
            .then((response) => {
                console.log('Feedback sent!', response.status, response.text);
                setSubmitted(true);
                setFeedback('');
                setEmail('')
            }).catch((err) => {
                console.log('Error sending feedback:', error)
            })




    };

    <div>
        <form onSubmit={handleSubmit} >
            <textarea placeholder="enter your feedback"
                style={{ border: '2px solid #ccc', boxSizing: 'border-box', borderRadius: '4px', resize: 'none', width: '50%', height: '100px' }}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}>

            </textarea>
            <input
                name="email"
                style={{ display: 'flex', alignItems: 'right', border: '2px solid #ccc', width: '50%', height: '50px', borderRadius: '4px' }}
                placeholder='enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" onClick={handleSubmit} style={{ borderRadius: '4px', border: '1px solid #ccc', height: '40px', width: '100px', marginTop: '30px' }}>Submit</button>
        </form>
        {submitted && (
            <div>
                <p>Sent!</p>
            </div>
        )}
    </div>

}
export default Feedback;
