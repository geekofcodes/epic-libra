import React from 'react';
import { Typography, Grid, Paper } from '@mui/material';

const Dashboard = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Admin Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Total Users
                        </Typography>
                        <Typography variant="h4">100</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Total Orders
                        </Typography>
                        <Typography variant="h4">50</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            Revenue
                        </Typography>
                        <Typography variant="h4">$5000</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                        <Typography variant="h6" gutterBottom>
                            New Users Today
                        </Typography>
                        <Typography variant="h4">10</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Dashboard;
