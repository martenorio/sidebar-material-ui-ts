import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import logo from "../assets/google-logo-11-1024x334.png";

export default function SideBar({ sidebarState, setSidebar }: { sidebarState: boolean, setSidebar(v: boolean): void }) {
    const toggleDrawer = (value: boolean) => { setSidebar(value); };

    const elementsSideBar = (myFunction: () => void): ElementSideBar[] => {

        return [
            {
                text: "Inicio",
                icon: <InboxIcon />,
                eventclick: myFunction
            },
            {
                text: "Catalogos",
                icon: <StarBorder />,
                eventclick: myFunction,
                subElements: [
                    {
                        text: "myCatalog",
                        icon: <InboxIcon />,
                        eventclick: myFunction
                    },
                    {
                        text: "yourCatalog",
                        icon: <InboxIcon />,
                        eventclick: myFunction
                    },
                ]
            },
            {
                text: "All mail",
                icon: <InboxIcon />,
                eventclick: myFunction
            },
            {
                text: "Trash",
                icon: <InboxIcon />,
                eventclick: myFunction
            },
            {
                text: "Spam",
                icon: <InboxIcon />,
                eventclick: myFunction
            },

        ]
    }
    const ListElements = () => (
        <Box sx={{ width: 300 }} role="presentation" >
            <Box style={{ padding: "40px" }} role="presentation">
                <img src={logo} width="100%" />
            </Box>

            {
                elementsSideBar(() => toggleDrawer(false)).map((e, i) => {
                    return (e.subElements) ?
                        <SubItemsElement key={i} text={e.text} icon={e.icon} eventclick={e.eventclick} subElements={e.subElements} />
                        : <ItemElement key={i} text={e.text} icon={e.icon} eventclick={e.eventclick} />
                })
            }
            <Divider />
            <List>
                {
                    ['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => toggleDrawer(false)} >
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );

    return (
        <Drawer open={sidebarState} onClose={() => setSidebar(false)} >
            <ListElements />
        </Drawer>
    );
}


interface ElementSideBar {
    text: string,
    icon: JSX.Element,
    eventclick(): void,
    subElements?: ElementSideBar[]
}
export const ItemElement = ({ text, icon, eventclick }: ElementSideBar) => (
    <ListItemButton
        color='primary'
        sx={{ marginTop: "5px", marginX: "10px", paddingX: "10px", paddingY: "3px", borderRadius: "5px" }}
        onClick={() => eventclick()}>
        <ListItemIcon>
            {icon}
        </ListItemIcon>
        <ListItemText primary={text} />
    </ListItemButton>
)
export const SubItemsElement = ({ text, icon, eventclick, subElements }: ElementSideBar) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <ListItemButton onClick={() => setOpen(!open)} sx={{ marginTop: "5px", marginX: "10px", paddingX: "10px", paddingY: "3px", borderRadius: "5px" }}>
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit sx={{ marginX: "10px" }}>
                <List component="div" disablePadding>
                    {
                        subElements?.map((e, i) => (
                            <ItemElement key={i + e.text} icon={e.icon} text={e.text} eventclick={e.eventclick} />
                        ))
                    }
                </List>
            </Collapse>
        </>
    )
}