import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    message: yup.string().required('Message is required'),
});

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
    console.log(data);
    };

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" {...register('name')} />
                    <p>{errors.name?.message}</p>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" {...register('email')} />
                    <p>{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" {...register('message')} />
                    <p>{errors.message?.message}</p>
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>Email: Alex.Happel90@gmail.com</p>
        </section>
    );
};

export default Contact;