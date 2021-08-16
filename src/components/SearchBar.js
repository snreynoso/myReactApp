import React, { useState } from 'react';
import { FormControl, FormHelperText, OutlinedInput, InputLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const SearchBar = props => {
    // Hooks //
    const [term, setTerm] = useState([]);

    // Event Handler Functions //
    const handleChange = event => {
        setTerm(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.onFormSubmit(setTerm(term));
    };

    // Material UI Style //
    const useStyles = makeStyles(theme => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    const classes = useStyles(props);

    return (
        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <FormControl variant="outlined">
                <InputLabel htmlFor='img-search'>Image Search</InputLabel>
                <OutlinedInput
                    id='img-search'
                    value={term}
                    onChange={handleChange}
                    label="Image Search" />
                <FormHelperText id='img-search-helper-text' >I have {props.numVideos} videos</FormHelperText>
            </FormControl>
        </form>
    );
}

export default SearchBar;