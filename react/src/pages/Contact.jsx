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
            const response = await fetch('http://localhost:5000/api/forms/submit', {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify(data),
        });
    const result = await response.json();
        if (response.ok) {
            setSuccessMessage('Thank you for reaching out! Alexander will get back to you promptly.');
        } else {
            alert('Error submitting form');
        }
    } catch (error) {
        alert('Error submitting form');
    }
};

    return (
        <section className="contact-section">
            <h2>Contact</h2>
            {successMessage ? (
                <p className="success-message">{successMessage}</p>
            ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" {...register('name')} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" {...register('message')} className={`form-control ${errors.message ? 'is-invalid' : ''}`} />
                {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
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