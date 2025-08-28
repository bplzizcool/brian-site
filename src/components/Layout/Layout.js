import React from 'react';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    width: '100vw',
    background: 'linear-gradient(135deg, #232526 0%, #414345 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: theme.spacing(8),
}));
const StyledContainer = styled(Container)(({ theme }) => ({
    background: 'rgba(255,255,255,0.04)',
    borderRadius: 16,
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(4px)',
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4),
    },
}));

const Layout = ({ children }) => (
    <StyledBox>
        <StyledContainer maxWidth="md">
            {children}
        </StyledContainer>
    </StyledBox>
);

export default Layout;
