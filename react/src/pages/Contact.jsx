import React from 'react';
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
    const { register, handleSubmit, formState: { errors } } = useForm({
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
                throw new Error(`Error: ${response.statusText}`);
            }

            // If successful, redirect to thank-you page
            window.location.href = '/thank-you';
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again later.');
        }
    };

    return (
        <section className="contact-section">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        {...register('name')}
                        className={errors.name ? 'is-invalid' : ''}
                        type="text"
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
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        {...register('message')}
                        className={errors.message ? 'is-invalid' : ''}
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

            <div className="contact-info">
                <p>Email: Alex.Happel90@gmail.com</p>
                <p>Phone: (321) 947-0599</p>
            </div>
        </section>
    );
};

export default Contact;