import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'
import Logout from './logout'

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func
}

export default function HideAppBar(props) {
    const barTitleStyle = {
        "font-family": `"Times New Roman", Times, serif`,
    }

    const toolBarStyle = {
        display: 'flex',
        'justify-content': 'space-between'
    }

    return (
        <HideOnScroll {...props}>
            <AppBar style={{'background-color': '#293740'}}>
                <Toolbar style={toolBarStyle}>
                    <Typography style={barTitleStyle} variant="h6">Daily Book</Typography>
                    <Logout />
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}
