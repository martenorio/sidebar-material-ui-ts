import { useState } from "react"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { Button, IconButton, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { grey } from "@mui/material/colors";

import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormControlContext from "@mui/material/FormControl/FormControlContext";

export const RighBar = () => {
    const [openForm, setOpenForm] = useState(true);
    return (
        <Drawer anchor='right' open={openForm} onClose={() => setOpenForm(false)} >
            <Box sx={{ width: 400, height:"100vh", display: 'flex', flexDirection:"column", justifyContent:"space-between" }} role="presentation" >
                <Box>
                    <Box sx={{ padding: 3, display: 'flex', justifyContent: "space-between", alignContent: "center", backgroundColor: grey[50] }} >
                        <Typography variant="h5" gutterBottom>
                            h4. Title forms
                        </Typography>
                        <IconButton aria-label="delete" onClick={() => setOpenForm(false)}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box component="form"
                        // /** noValidate */
                        sx={{ '& .MuiTextField-root': { marginTop: 3 }, paddingX: 3, }}  autoComplete="off"> 
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Hello World"
                            error
                            helperText="Incorrect entry."
                        />
                        <TextField
                            fullWidth
                            disabled
                            id="outlined-disabled"
                            label="Disabled"
                            defaultValue="Hello World"
                        />
                        <TextField
                            fullWidth
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            fullWidth
                            id="outlined-read-only-input"
                            label="Read Only"
                            defaultValue="Hello World"
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField
                            fullWidth
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField fullWidth id="outlined-search" label="Search field" type="search" />
                        <TextField
                            fullWidth
                            id="outlined-helperText"
                            label="Helper text"
                            defaultValue="Default Value"
                            helperText="Some important text"
                        />
                    </Box>
                </Box>
                <Box sx={{ padding:3, display:"flex", alignItems: "center", flexDirection: "row", justifyContent: "space-between", columnGap:1}}>
                    <Button fullWidth variant="outlined" size="large">
                        Cancelar
                    </Button>
                    <Button fullWidth variant="contained" size="large">
                        Guardar
                    </Button>
                </Box>
            </Box>
        </Drawer>
    );
}
