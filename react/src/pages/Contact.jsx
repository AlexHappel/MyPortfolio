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
    const [errorMessage, setErrorMessage] = useState('');
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const response = await fetch('/.netlify/functions/formSubmit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Error: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('API Response:', result);
            setSuccessMessage('Thank you for reaching out! Alexander will get back to you promptly.');
            reset(); 
            setErrorMessage(''); 
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage('There was an error submitting the form. Please try again later.');
            setSuccessMessage('');
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
                        <input
                            id="name"
                            {...register('name')}
                            className={errors.name ? 'is-invalid' : ''}
                            type="text"
                            required
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            {...register('email')}
                            className={errors.email ? 'is-invalid' : ''}
                            type="email"
                            required
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            {...register('message')}
                            className={errors.message ? 'is-invalid' : ''}
                            required
                        ></textarea>
                        {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                    </div>

                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
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