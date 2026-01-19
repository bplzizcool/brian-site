import React from 'react';
import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Particles from '../GalaxyBackground/Particles';

const StyledBox = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    width: '100%',
    background: 'linear-gradient(45deg, #000000, #414345 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: theme.spacing(8),
    overflow: 'hidden',
    paddingBottom: theme.spacing(8),
}));

const StyledParticlesBackground = styled(Box)(({ theme }) => ({
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 0,
    pointerEvents: 'none',
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

const StyledDivWrapper = styled('div')`
    position: relative;
    z-index: 1;
`;

const Layout = ({ children }) => (
    <StyledBox>
        <StyledParticlesBackground>
            <Particles
                particleColors={["#ffffff"]}
                particleCount={200}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover
                alphaParticles={false}
                disableRotation={false}
                pixelRatio={1}
            />
        </StyledParticlesBackground>
        <StyledDivWrapper>
            <StyledContainer maxWidth="md">
                {children}
            </StyledContainer>
        </StyledDivWrapper>
    </StyledBox>
);

export default Layout;
