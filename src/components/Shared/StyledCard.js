import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
    background: 'rgba(255,255,255,0.08)',
    boxShadow: '0 4px 24px rgba(25, 118, 210, 0.12)',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.12)',
    padding: 8,
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
        transform: 'scale(1.03)',
        boxShadow: '0 8px 32px rgba(25, 118, 210, 0.18)',
    },
}));

export default StyledCard;
