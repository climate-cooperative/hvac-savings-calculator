import React from 'react';
import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Ad: React.FC = () => {
    return (
        <Card sx={{ bgcolor: 'rgb(247, 247, 247)' }}>
            <CardContent>
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={4}>
                    <Typography variant="h5" component="div">
                        See savings for your whole house!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" paragraph>
                        Get a full energy breakdown of your home. Just plug in a few simple details and we'll generate an instant detailed energy audit.
                    </Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <Box textAlign="center">
                        <img
                            src="zwell_ad.jpg"
                            alt="House"
                            style={{ width: '100%', borderRadius: '8px' }}
                        />
                    </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center">
                    <a href="https://app.zwell.io/" target="_blank" rel="noopener noreferrer">
                        <Button variant="contained" color="primary" startIcon={<HomeIcon />} style={{ width: 'fit-content' }}>
                            Take the Home Energy Audit!
                        </Button>
                    </a>
                </Box>
            </CardContent>
        </Card>
    )
}

export default Ad;