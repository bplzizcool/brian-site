import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const StyledCompany = styled(Typography)({
    fontWeight: 600,
    color: 'white',
    textAlign: 'center',
});

export const StyledProjectName = styled(Typography)({
    fontWeight: 700,
    color: 'white',
    marginBottom: 8,
});

export const StyledAreaTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(1),
    color: 'white',
    fontWeight: 600,
}));
