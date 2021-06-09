import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start">
                    <MenuIcon/>
                </IconButton>
                <Typography variant='h6'>
                    AppBar
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar