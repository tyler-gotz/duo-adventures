import React, { useEffect } from 'react'
import { Alert, Box, Button, Grid, PasswordInput, TextInput, Title, useMantineTheme } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux/store'
import { RequestState } from '../types/RequestState'
import { AlertCircle } from 'tabler-icons-react'
import { useForm, yupResolver } from '@mantine/form'
import { loginSchema } from '../utils/validation'
import { clearAuth, loginUser } from '../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const theme = useMantineTheme()

  const dispatch = useDispatch<AppDispatch>()
  const registerState = useSelector<RootState, RequestState>((state) => state.auth.register)
  const loginState = useSelector<RootState, RequestState>((state) => state.auth.login)

  const navigate = useNavigate()

  const loginForm = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    schema: yupResolver(loginSchema)
  })

  useEffect(() => {
    if (loginState.success) {
      navigate('/')
    }
    
    return () => {
      dispatch(clearAuth())
    }
  }, [navigate, loginState.success, dispatch])

  return (
    <Box
      sx={{
        padding: '1.5rem',
        width: '100%',
        maxWidth: '36rem',
        margin: '0 auto',
        border: '1px solid #de6b48',
        borderRadius: '5px',
        backgroundColor: theme.colors.brand[4]
      }}
    >
      {
        registerState.success && (
          <Alert icon={<AlertCircle size={16} />} title="Thank You For Registering." mb={12} color="green">
            Please Login to start creating adventures with your Duo.
          </Alert>
        )
      }
      {
        loginState.error !== false && (
          <Alert icon={<AlertCircle size={16} />} title="Error Logging You In." mb={12} color="red">
            {loginState.error}
          </Alert>
        )
      }
      <form onSubmit={loginForm.onSubmit((values) => dispatch(loginUser(values)))}>
        <Grid>
          <Grid.Col xs={12}>
            <Title 
              order={2} 
              sx={{ 
                fontFamily: theme.fontFamily, 
                color: theme.colors.brand[2] 
              }}>
                Login
            </Title>
          </Grid.Col>
          <Grid.Col sm={12}>
            <TextInput
              label="Email Address"
              placeholder="Enter Email Address..."
              type="email"
              autoComplete="username"
              {...loginForm.getInputProps('email')} 
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <PasswordInput
              label="Password"
              placeholder="Enter Password..."
              autoComplete="current-password"
              {...loginForm.getInputProps('password')}
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <Button
              loading={loginState.loading}
              fullWidth
              type="submit"
              variant="filled"
              sx={{
                backgroundColor: theme.colors.brand[0],
              }}
            >
             Login
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  )
}

export default Login