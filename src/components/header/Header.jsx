import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import BackIcon from '@material-ui/icons/ArrowBack'
import { Avatar, Button } from '@material-ui/core'

const Container = styled(Typography)`
  margin: 0 auto;
  align-text: center;
`

const Header = ({ onBack }) => {
  const showBackButton = onBack != null
  return (
    <AppBar position='static'>
      <Toolbar variant='dense'>
        {showBackButton && (
          <Button onClick={onBack} startIcon={<BackIcon />}>
            Back
          </Button>
        )}
        <Container variant='h5'>Sneakers</Container>
        <Avatar
          alt='Account Image'
          src='https://s3-alpha-sig.figma.com/img/76c0/3f58/3b70eb4dfa556b26490c7a00d6ea6662?Expires=1601856000&Signature=Cpe-yGzSJftwSzb5o0LtuJBHYL09MKcI9uRKSYPg~Ai8Rl31UIHiwh5YhYoNxU5RinNiuW-0x3KQrV7wW7Tj1JcuqhGr9iwQAr6cq5eFFjPEeV3wVOGcBpETGZYQH-jgM-LT-LZw15uKZ9Rmcc99l2KgfWPjRQ4vogq6Vr9mTDN069SFeCy0mL9mnmC4MD~~mXn6p7Q50npoqU5eWE6WzLwQ6~a799PUxSkbam9fcW0D~MaKp-0monp2HpdCa-YFVFsDHCj3oPEi8fg1Rt9rlZ4f-K4oBKzG4TpX8DAorrS3wz6IlFXyT5REIe13EHgL75I64uHn4oB5nqKkGSwvig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
