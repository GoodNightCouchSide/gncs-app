import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

const UserMenu: React.FunctionComponent = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null)
  }

  const user = null

  const userIcon = (): React.ReactElement => {
    if (user !== null) {
      return (
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
      )
    }
    return (
      <Button sx={{ my: 2, color: 'white', display: 'block' }} component={Link} to={'/login'}>
        Login
      </Button>
    )
  }

  return (
    <Box sx={{ flexGrow: 0 }}>
      {userIcon()}
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default UserMenu
