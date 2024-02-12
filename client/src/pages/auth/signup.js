// Signup.js
import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import bookImg from '../../assets/images/books.jpg';

const SignupFormSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const Signup = ({ switchToLogin }) => {
    return (
        <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        exit={{ x: '-100vw' }}
        transition={{ type: 'tween', duration: 0.5 }}
        className="flex flex-col lg:flex-row h-screen"
        >
            <div className="lg:w-1/2 hidden lg:block">
                <img src={bookImg} alt="Signup" className="w-full h-full object-cover" />
            </div>
            <div className="lg:w-1/2 flex justify-center items-center">
                <div>
                <h2 className="text-2xl font-bold mb-4">Signup</h2>
                <Formik
                    initialValues={{ name: '', email: '', password: '' }}
                    validationSchema={SignupFormSchema}
                    onSubmit={(values) => {
                    console.log(values);
                    }}
                >
                    {({ errors, touched }) => (
                    <Form className="space-y-4">
                        <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <Field name="name" type="text" className="input-field" />
                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <Field name="email" type="email" className="input-field" />
                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <Field name="password" type="password" className="input-field" />
                        <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>
                        <button type="submit" className="btn-primary">Signup</button>
                        <p className="mt-4">
                        Already have an account?{' '}
                        <span className="text-blue-500 cursor-pointer" onClick={switchToLogin}>
                            Login
                        </span>
                        </p>
                    </Form>
                    )}
                </Formik>
                </div>
            </div>
        </motion.div>
    );
};

export default Signup;
