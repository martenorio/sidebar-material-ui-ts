import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TopBar from "./components/TopBar";
import SideBar from './components/Sidebar';
import { RighBar } from './components/RighBar';
import StickyHeadTable from './components/TableBasic';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {
  const [count, setCount] = useState(0)
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <TopBar sidebarState={sidebar} setSidebar={setSidebar} />
      <SideBar sidebarState={sidebar} setSidebar={setSidebar} />
      <RighBar />
      <Box sx={{padding:2, backgroundColor:grey[100], boxShadow: "none"}}>
        <Typography variant="h6" gutterBottom>
          Listado de datos
        </Typography>
        <Box>

        </Box>
      </Box>
      <StickyHeadTable />
    </>
  )
}

export default App
