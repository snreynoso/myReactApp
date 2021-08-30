import React, { useState } from 'react';
import { FormControl, FormHelperText, Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    searchBox: {
        padding: theme.spacing(1),
        
        borderRadius: "0.5rem",
        width: '100%',
        boxShadow: '0 3px 5px 2px #616161',
    },
}));

const SearchBar = ({ onFormSubmit, numVideos }) => { //props => {
    const [term, setTerm] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        onFormSubmit(term);//props.onFormSubmit(term);
    };

    const classes = useStyles(); //useStyles(props);

    return (
        <Box className={classes.searchBox}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <FormControl fullWidth={true}  variant="outlined">
                    <TextField
                        variant="outlined"
                        color="secondary"
                        id='img-search'
                        value={term}
                        onChange={event => setTerm(event.target.value)}
                        label="Image Search"
                        inputProps={{ style: { borderColor: 'green !important', } }}
                    />
                    <FormHelperText id='img-search-helper-text' >I have {numVideos} videos</FormHelperText>
                </FormControl>
            </form>
        </Box>
    );
}

export default SearchBar;