import { styled } from '@mui/material/styles';
import { Box, Chip } from '@mui/material';

export const StyledChipContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
}));

export const TechChip = styled(Chip)(({ theme }) => ({
    fontWeight: 500,
    fontSize: 15,
    padding: theme.spacing(0.5, 2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
}));
