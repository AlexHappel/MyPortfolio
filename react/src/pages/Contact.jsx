import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../index.css';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().required('Message is required'),
});

const Contact = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
});

const onSubmit = async (data) => {
    try {
        const result = await response.json();
        console.log('API Response:', result);
        setSuccessMessage('Thank you for reaching out! Alexander will get back to you promptly.');
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('Error submitting form');
    }
};

    return (
        <section className="contact-section">
            <h2>Contact</h2>
            {successMessage ? (
                <p className="success-message">{successMessage}</p>
            ) : (
                <form name="contact" method="POST" data-netlify="true" className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )}
        <div className="contact-info">
            <p>Email: Alex.Happel90@gmail.com</p>
            <p>Phone: (321) 947-0599</p>
        </div>
        </section>
    );
};

export default Contact;