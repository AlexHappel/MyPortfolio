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

    // This function runs validation. If valid, it triggers actual form submission.
    const validateAndSubmit = handleSubmit(() => {
        // If we reach here, form is valid. Now submit natively to Netlify.
        document.getElementById('contact-form').submit();
    });

    return (
        <section className="contact-section">
            <h2>Contact</h2>
            <form
                id="contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                className="contact-form"
            >
                
                <input type="hidden" name="form-name" value="contact" />

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

                <button type="button" className="btn btn-primary" onClick={validateAndSubmit}>
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