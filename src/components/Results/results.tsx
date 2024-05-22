// HomeEnergyAudit.tsx
import React, { FC } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Fireplace, QuestionMark } from '@mui/icons-material';
import { furnace, floor, raidant, air_source, geothermal, boiler, space_heater, stove } from '../HeatComponent/svgs';
import AppBarComponent from './appbar';
import CardComponent from './cardcomponent';
import Ad from './ad'; 

interface HomeEnergyAuditProps {
    isElectric?: boolean;
}

const HomeEnergyAudit: FC<HomeEnergyAuditProps> = ({ isElectric }) => {
    let hvacs = [
        {
            icon: furnace,
            heating: 'Electric Forced Air Furnace',
            cost: 2670,
            emissions: 0,
            system: 'Your Current System'
        },
        isElectric ? {
            icon: furnace,
            heating: 'Natural Gas Forced Air Furnace',
            cost: 1945,
            emissions: 0,
            system: 'Natural Gas System'
        } : null,
        {
            icon: floor,
            heating: 'Electric Baseboard Heating',
            cost: 3482,
            emissions: 0,
            system: 'Alternative System'
        },
        {
            icon: air_source,
            heating: 'Air-Source Heat Pump',
            cost: 1071,
            emissions: 0,
            system: 'Recommended System'
        }
    ].filter(Boolean);

    const money = (hvacs[0]?.cost || 0) - (hvacs[hvacs.length - 1]?.cost || 0);

    return (
        <Container sx={{width: '66%', marginBottom: '50px'}}>
            <AppBarComponent money={money}/>
            <Box my={4}>
                <Typography variant="h5" component="div" gutterBottom>
                    Your Results
                </Typography>
                <Typography variant="body2" color="textSecondary" component="div" gutterBottom>
                    Compare the energy costs and carbon emissions of different HVAC choices
                </Typography>
                <hr />
                <Grid container spacing={4}>
                {hvacs.map((hvac, index) => (
                    <Grid item xs={12/hvacs.length}>
                        <CardComponent
                            icon={hvac?.icon || QuestionMark}
                            title={hvac?.heating || 'Error'}
                            cost={hvac?.cost || 0}
                            emissions={hvac?.emissions || 0}
                            isHighlighted={index === 2}
                            footer={hvac?.system || 'An error has occured!'}
                        />
                    </Grid>
                ))}
                </Grid>
            </Box>
            <Ad />
        </Container>
    );
};

export default HomeEnergyAudit;