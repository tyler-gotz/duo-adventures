import React, { useEffect } from 'react'
import {
  Alert,
  Box,
  Button,
  Grid,
  PasswordInput,
  TextInput,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { registerSchema } from '../utils/validation'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/slices/authSlice'
import { AppDispatch, RootState } from '../redux/store'
import { RegisterValues } from '../types/RegisterValues'
import { RequestState } from '../types/RequestState'
import { AlertCircle } from 'tabler-icons-react'
import { useNavigate } from 'react-router-dom'

const Register: React.FC = () => {
  const theme = useMantineTheme()

  const dispatch = useDispatch<AppDispatch>()
  const registerState = useSelector<RootState, RequestState>((state) => state.auth.register)

  const navigate = useNavigate()

  const registerForm = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    schema: yupResolver(registerSchema)
  })

  const submitForm = (values: RegisterValues) => {
    dispatch(registerUser(values))
  }

  useEffect(() => {
    if (registerState.success) {
      navigate('/login')
    }
  }, [navigate, registerState.success])

  return (
    <Box
      sx={{
        padding: '1.5rem',
        width: '100%',
        maxWidth: '36rem',
        margin: '0 auto',
        border: '1px solid #de6b48',
        borderRadius: '5px',
        backgroundColor: theme.colors.brand[4],
      }}
    >
      {
        registerState.error != false && (
          <Alert icon={<AlertCircle size={16} />} title={registerState.error} mb={12} color="red">
            Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
          </Alert>
        )
      }
      <form onSubmit={registerForm.onSubmit((values) => submitForm(values))}>
        <Grid>
          <Grid.Col xs={12}>
            <Title
              order={2}
              sx={{
                fontFamily: theme.fontFamily,
                color: theme.colors.brand[2],
              }}
            >
              Sign Up To Start Duo Adventures
            </Title>
          </Grid.Col>
          <Grid.Col md={6} sm={12}>
            <TextInput 
              label="First Name" 
              placeholder="Enter First Name..." 
              {...registerForm.getInputProps('firstName')} 
            />
          </Grid.Col>
          <Grid.Col md={6} sm={12}>
            <TextInput 
              label="Last Name" 
              placeholder="Enter Last Name..." 
              {...registerForm.getInputProps('lastName')} 
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <TextInput
              label="Email Address"
              placeholder="Enter Email Address..."
              type="email"
              autoComplete="username"
              {...registerForm.getInputProps('email')} 
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <PasswordInput
              label="Password"
              placeholder="Enter Password..."
              autoComplete="new-password"
              {...registerForm.getInputProps('password')} 
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <PasswordInput
              label="Confirm Password"
              placeholder="Enter Password Again..."
              autoComplete="new-password"
              {...registerForm.getInputProps('confirmPassword')}
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <Button
              loading={registerState.loading}
              fullWidth
              type="submit"
              variant="filled"
              sx={{
                backgroundColor: theme.colors.brand[0],
              }}
            >
              Register
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Box>
  )
}

export default Register
