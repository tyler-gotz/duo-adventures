import React from 'react'
import {
  Box,
  Button,
  Grid,
  PasswordInput,
  TextInput,
  Title,
  useMantineTheme,
} from '@mantine/core'

const Register: React.FC = () => {
  const theme = useMantineTheme()

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
      <form>
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
            <TextInput label="First Name" placeholder="Enter First Name..." />
          </Grid.Col>
          <Grid.Col md={6} sm={12}>
            <TextInput label="Last Name" placeholder="Enter Last Name..." />
          </Grid.Col>
          <Grid.Col sm={12}>
            <TextInput
              label="Email Address"
              placeholder="Enter Email Address..."
              type="email"
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <PasswordInput
              label="Password"
              placeholder="Enter Password..."
              autoComplete="current-password"
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <PasswordInput
              label="Confirm Password"
              placeholder="Enter Password Again..."
            />
          </Grid.Col>
          <Grid.Col sm={12}>
            <Button
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
