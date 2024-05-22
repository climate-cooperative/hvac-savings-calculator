// AppBarComponent.tsx
import { AppBar, Box, Typography } from '@mui/material';

interface AppBarProps {
  money: number;
}

const AppBarComponent: React.FC<AppBarProps> = ({ money }) => (
  <AppBar position="static" color="inherit">
    <Box textAlign="center" py={2}>
      <Typography variant="h6" color="secondary">
        You could save <strong>${money.toLocaleString()} per year!</strong>
      </Typography>
    </Box>
  </AppBar>
);

export default AppBarComponent;