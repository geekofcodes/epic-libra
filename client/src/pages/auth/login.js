// Login.js
import React from 'react';
import { motion } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import bookImg from '../../assets/images/books.jpg';

const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const Login = ({ switchToSignup }) => {
    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ type: 'tween', duration: 0.5 }}
            className="flex flex-col lg:flex-row h-screen"
        >
            <div className="lg:w-1/2 flex justify-center items-center">
            <div>
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={LoginFormSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
                >
                {({ errors, touched }) => (
                    <Form className="space-y-4">
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
                    <button type="submit" className="btn-primary">Login</button>
                    <p className="mt-4">
                        Don't have an account?{' '}
                        <span className="text-blue-500 cursor-pointer" onClick={switchToSignup}>
                        Signup
                        </span>
                    </p>
                    </Form>
                )}
                </Formik>
            </div>
            </div>
            <div className="lg:w-1/2 hidden lg:block">
            <img src={bookImg} alt="Login" className="w-full h-full object-cover" />
            </div>
        </motion.div>
    );
};

export default Login;
