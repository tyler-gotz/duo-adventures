import React from 'react'
import { Alert, Box, Button, Grid, PasswordInput, TextInput, Title, useMantineTheme } from '@mantine/core'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { RequestState } from '../types/RequestState'
import { AlertCircle } from 'tabler-icons-react'

const Login: React.FC = () => {
  const theme = useMantineTheme()

  const registerState = useSelector<RootState, RequestState>((state) => state.auth.register)

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
      <form>
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
            //   {...registerForm.getInputProps('email')} 
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <PasswordInput
              label="Password"
              placeholder="Enter Password..."
              autoComplete="current-password"
            //   {...registerForm.getInputProps('confirmPassword')}
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <Button
            //   loading={registerState.loading}
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