import React, { useState } from 'react';
import { Typography, IconButton, TextField, Button, Snackbar, Alert, CircularProgress, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SendIcon from '@mui/icons-material/Send';
import profile from '../../data/profile.json';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { StyledHeader } from '../Shared/StyledComponents';

const StyledContactBox = styled(Box)({
    paddingTop: 32,
    paddingBottom: 32,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const StyledIconButton = styled(IconButton)({
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 8,
    boxShadow: '0 2px 8px rgba(25, 118, 210, 0.10)',
    transition: 'background 0.2s',
    '&:hover': {
        backgroundColor: '#1976d2',
        color: 'white',
    },
});

const StyledEmail = styled(Typography)({
    color: 'rgba(255,255,255,0.85)',
    fontSize: 18,
});

const StyledForm = styled('form')({
    width: '100%',
    maxWidth: 500,
    margin: '0 auto',
    marginTop: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const StyledTextField = styled(TextField)({
    marginBottom: 16,
    '& .MuiOutlinedInput-root': {
        color: 'rgba(255,255,255,0.85)',
        '& fieldset': {
            borderColor: 'rgba(255,255,255,0.23)',
        },
        '&:hover fieldset': {
            borderColor: 'rgba(255,255,255,0.5)',
        },
    },
    '& .MuiInputLabel-root': {
        color: 'rgba(255,255,255,0.7)',
    },
});

const StyledSubmitButton = styled(Button)({
    marginTop: 16,
    padding: '12px 24px',
    position: 'relative',
    '& .MuiCircularProgress-root': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    }
});

const StyledFormHelper = styled(Typography)({
    color: '#f44336',
    marginLeft: 14,
    marginRight: 14,
    fontSize: '0.75rem',
});

const getSocialIcon = (url) => {
    if (url.includes('github.com')) return <GitHubIcon />;
    if (url.includes('linkedin.com')) return <LinkedInIcon />;
    if (url.includes('twitter.com')) return <TwitterIcon />;
    return <GitHubIcon />;
};

const Contact = () => {
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success'
    });
    // Get configuration from environment variables
    const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;
    const RECAPTCHA_SITE_KEY = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Name is required')
            .min(2, 'Name must be at least 2 characters')
            .max(50, 'Name must be less than 50 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Invalid email address'),
        message: Yup.string()
            .required('Message is required')
            .min(10, 'Message must be at least 10 characters')
            .max(1000, 'Message must be less than 1000 characters')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                // Execute reCAPTCHA v3
                if (!window.grecaptcha) {
                    throw new Error('reCAPTCHA not loaded');
                }

                const recaptchaValue = await new Promise((resolve, reject) => {
                    window.grecaptcha.ready(async () => {
                        try {
                            const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, {
                                action: 'submit'
                            });
                            resolve(token);
                        } catch (error) {
                            console.error('reCAPTCHA execution error:', error);
                            reject(error);
                        }
                    });
                });

                // Send to Formspree
                // Prepare form data
                const formData = new FormData();
                formData.append('name', values.name);
                formData.append('email', values.email);
                formData.append('message', values.message);
                formData.append('g-recaptcha-response', recaptchaValue);

                await axios.post(
                    `https://formspree.io/f/${FORMSPREE_ID}`,
                    formData,
                    {
                        headers: {
                            'Accept': 'application/json'
                        }
                    }
                );

                setSnackbar({
                    open: true,
                    message: 'Message sent successfully! I\'ll get back to you soon.',
                    severity: 'success'
                });

                resetForm();
            } catch (error) {
                console.error('Form submission error:', error);
                let errorMessage = 'Failed to send message. Please try again.';

                if (error.message === 'reCAPTCHA not loaded') {
                    errorMessage = 'Please wait for reCAPTCHA to load and try again.';
                } else if (error.response?.data?.error) {
                    if (error.response.data.error.includes('invalid-keys')) {
                        errorMessage = 'reCAPTCHA configuration error. Please contact the site administrator.';
                    } else {
                        errorMessage = error.response.data.error;
                    }
                }

                setSnackbar({
                    open: true,
                    message: errorMessage,
                    severity: 'error'
                });
            } finally {
                setSubmitting(false);
            }
        },
    });

    const handleCloseSnackbar = () => {
        setSnackbar(prev => ({
            ...prev,
            open: false
        }));
    };

    return (
        <StyledContactBox>
            <StyledHeader variant="h4" gutterBottom>Contact</StyledHeader>
            <StyledEmail variant="body1" gutterBottom>{profile.Email}</StyledEmail>
            <Box>
                {profile.SocialMedias && profile.SocialMedias.map((url, idx) => (
                    <StyledIconButton
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener"
                        color="primary"
                    >
                        {getSocialIcon(url)}
                    </StyledIconButton>
                ))}
            </Box>

            <StyledForm onSubmit={formik.handleSubmit}>
                <StyledTextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    variant="outlined"
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    disabled={formik.isSubmitting}
                />
                {formik.touched.name && formik.errors.name && (
                    <StyledFormHelper>{formik.errors.name}</StyledFormHelper>
                )}

                <StyledTextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    variant="outlined"
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    disabled={formik.isSubmitting}
                />
                {formik.touched.email && formik.errors.email && (
                    <StyledFormHelper>{formik.errors.email}</StyledFormHelper>
                )}

                <StyledTextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    variant="outlined"
                    multiline
                    rows={4}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    disabled={formik.isSubmitting}
                />
                {formik.touched.message && formik.errors.message && (
                    <StyledFormHelper>{formik.errors.message}</StyledFormHelper>
                )}

                <StyledSubmitButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={formik.isSubmitting}
                    endIcon={!formik.isSubmitting && <SendIcon />}
                >
                    {formik.isSubmitting ? (
                        <CircularProgress size={24} color="inherit" />
                    ) : (
                        'Send Message'
                    )}
                </StyledSubmitButton>
            </StyledForm>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </StyledContactBox>
    );
};

export default Contact;
