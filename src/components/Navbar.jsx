import { AppBar, Avatar, Badge, Divider, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled("div")(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled("div")(({ theme }) => ({
    display: "flex",
    gap: "10px",
    marginRight:"2%",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));

const Navbar = () => {

    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>Nikhil</Typography>
                <InstagramIcon sx={{ display: { xs: "block", sm: "none",marginLeft:"2%" } }} />
                <Search><InputBase placeholder='Serach here..' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} alt="nikhil" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        onClick={e => setOpen(true)} />
                </Icons>
                <UserBox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} alt="nikhil" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                    <Typography variant='span' >Nikhil</Typography>
                </UserBox>

            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                onClose={(e)=>setOpen(false)}
                open={open}

                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <Divider/>
                <MenuItem >  <SwitchAccountIcon sx={{marginRight:"10px"}}/> Switch Account</MenuItem>
                <Divider/>
                <MenuItem >Logout</MenuItem>
            </Menu>




        </AppBar>
    )
}

export default Navbar