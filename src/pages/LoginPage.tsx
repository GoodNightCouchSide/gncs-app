import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, Resolver } from 'react-hook-form'
import { useLoginUserMutation } from '@/services/authService'
import { ApiErrorResponse } from '@/types/ErrorTypes'
import { useAppDispatch } from '@/lib/rdx/hooks'
import { setCredentials } from '@/features/user/userSlice'

// interface ILoginProps {}

interface FormValues {
  email: string
  password: string
  remember: boolean
}

interface ErrorObj {
  email?: {
    type: string
    message: string
  }
  password?: {
    type: string
    message: string
  }
}

const resolver: Resolver<FormValues> = (values) => {
  const errors: ErrorObj = {}
  if (values.email.length === 0) {
    errors.email = {
      type: 'required',
      message: 'Email is required.'
    }
  }
  if (values.password.length === 0) {
    errors.password = {
      type: 'required',
      message: 'Password is required.'
    }
  }
  return {
    values: values.email.length > 0 ? values : {},
    errors
  }
}

const LoginPage: React.FunctionComponent = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<FormValues>({ resolver })
  const [loginUser, { isLoading }] = useLoginUserMutation()
  const onSubmit = handleSubmit((data) => {
    data.remember = !!data.remember
    loginUser(data)
      .unwrap()
      .then((response) => {
        dispatch(setCredentials(response))
        navigate('/')
      })
      .catch((err: ApiErrorResponse) => {
        if (err.status === 400) {
          setError('password', {
            type: 'custom',
            message: 'Email und password stimmen nicht über ein!'
          })
        }
      })
  })
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            autoComplete="email"
            autoFocus
            error={!(errors.email == null)}
            helperText={!(errors.email == null) ? errors.email.message : null}
            {...register('email')}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            error={!(errors.password == null)}
            helperText={!(errors.password == null) ? errors.password.message : null}
            {...register('password')}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            {...register('remember')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading ? <CircularProgress /> : 'Sign In'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgotPassword">Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to="/register">{"Don't havse an asccount? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default LoginPage
