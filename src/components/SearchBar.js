import React, { useState } from 'react';
import { FormControl, FormHelperText, Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    searchBox: {
        padding: theme.spacing(1),
        backgroundColor: "#eeeeee",
        borderRadius: "0.5rem",
        width: '100%',
        boxShadow: '0 3px 5px 2px #616161',
    },
}));

const SearchBar = props => {
    const [term, setTerm] = useState([]);

    const handleChange = event => {
        setTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.onFormSubmit(term);
    };

    const classes = useStyles(props);

    return (
        <Box className={classes.searchBox}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <FormControl fullWidth='true' variant="outlined">
                    <TextField
                        variant="outlined"
                        color="secondary"
                        id='img-search'
                        value={term}
                        onChange={handleChange}
                        label="Image Search"
                        inputProps={{ style: { borderColor: 'green !important', } }}
                    />
                    <FormHelperText id='img-search-helper-text' >I have {props.numVideos} videos</FormHelperText>
                </FormControl>
            </form>
        </Box>
    );
}

export default SearchBar;