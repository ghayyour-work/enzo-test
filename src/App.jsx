import React, {useState} from "react";
import interviewCriminals from "./search";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Grid, Button, Typography, Container, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    btn: {
        marginTop: theme.spacing(4)
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    grid: {
        marginTop: theme.spacing(4)
    }
}));

function App() {
    const classes = useStyles();
    const [search, setSearch] = useState("");
    const [result, setResult] = useState("");

    const handleSubmit = (e) => {
        interviewCriminals(search, (err, data) => {
            if (err) {
                setResult("No match found");
            } else
                setResult("First Name: " + data.key + ", Aliases: " + data.value);
        });
    };

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Criminal Search
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Criminal Search by Name
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item lg={12}>
                            <ValidatorForm className={classes.form} onSubmit={handleSubmit}>
                                <TextValidator
                                    variant={"filled"}
                                    name={"search"}
                                    validators={['required']}
                                    errorMessages={['This field is required']}
                                    value={search}
                                    onChange={handleChange}
                                    fullWidth
                                    autoFocus
                                />

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.btn}

                                >
                                    Search
                                </Button>

                            </ValidatorForm>
                            <Grid className={classes.grid} item lg={12}>
                                <Typography>{result}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}

export default App;
