import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import BackIcon from '@material-ui/icons/ArrowBack'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles(theme => ({
  title: {
    margin: '0 auto',
  },
  appbar: {
    backgroundColor: grey[200],
    boxShadow: theme.shadows[0],
  },
}))

const Header = ({ onBack, showBackButton = false }) => {
  const classes = useStyles()
  return (
    <AppBar position='static' className={classes.appbar} color='inherit'>
      <Toolbar>
        {showBackButton && (
          <Button onClick={onBack} startIcon={<BackIcon />}>
            Back
          </Button>
        )}
        <Typography variant='h5' className={classes.title}>
          Sneakers
        </Typography>
        <Avatar
          alt='Account Image'
          src='https://s3-alpha-sig.figma.com/img/76c0/3f58/3b70eb4dfa556b26490c7a00d6ea6662?Expires=1601856000&Signature=Cpe-yGzSJftwSzb5o0LtuJBHYL09MKcI9uRKSYPg~Ai8Rl31UIHiwh5YhYoNxU5RinNiuW-0x3KQrV7wW7Tj1JcuqhGr9iwQAr6cq5eFFjPEeV3wVOGcBpETGZYQH-jgM-LT-LZw15uKZ9Rmcc99l2KgfWPjRQ4vogq6Vr9mTDN069SFeCy0mL9mnmC4MD~~mXn6p7Q50npoqU5eWE6WzLwQ6~a799PUxSkbam9fcW0D~MaKp-0monp2HpdCa-YFVFsDHCj3oPEi8fg1Rt9rlZ4f-K4oBKzG4TpX8DAorrS3wz6IlFXyT5REIe13EHgL75I64uHn4oB5nqKkGSwvig__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header
