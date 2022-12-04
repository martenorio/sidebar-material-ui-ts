import { useState } from "react"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

export const RighBar = () => {
    const [openForm, setOpenForm] = useState(false);
    return (
        <Drawer anchor='left' open={openForm} onClose={() => setOpenForm(false)} >
            <Box sx={{ width: 300 }} role="presentation" >

            </Box>
        </Drawer>
    );
}
