// CardComponent.tsx
import { Box, Card, CardContent, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon';

interface CardProps {
    icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
    title: string;
    cost: number;
    emissions: number;
    isHighlighted?: boolean;
    footer?: string;
}

const CardComponent: React.FC<CardProps> = ({ icon, title, cost, emissions, isHighlighted, footer }) => (
  <Card variant="outlined" sx={{bgcolor: 'rgb(247, 247, 247)'}}>
    <CardContent>
      <Box textAlign="center">
        {icon({ style: { fontSize: "100px" } })}
        <Typography variant="body2" color="textSecondary" style={{ height: '50px' }}>{title}</Typography>
        <Typography variant="body2" color="textSecondary">HVAC Unit</Typography>
        <Box my={2}>
          <Typography variant="h6" color={isHighlighted ? "secondary" : "inherit"}>${cost.toLocaleString()}</Typography>
          <Typography variant="caption">Operating Cost Per Year</Typography>
        </Box>
        <Box my={2}>
          <Typography variant="h6" color={isHighlighted ? "secondary" : "inherit"}>{emissions.toLocaleString()}</Typography>
          <Typography variant="caption">CO₂ Emissions per Year</Typography>
        </Box>
        <Typography variant="body2" color="textSecondary">{footer}</Typography>
      </Box>
    </CardContent>
  </Card>
);

export default CardComponent;