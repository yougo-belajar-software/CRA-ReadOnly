import React from 'react';
import './App.css';
import ListKaryawan from './ListKaryawan';
import Karyawan from './Karyawan';
import { useKaryawan } from './useKaryawan'
import { Container, AppBar, Toolbar, Typography, Button, Link } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'material-ui-image'
import ParticlesBg from 'particles-bg'
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  card: {
    margin: 20,
    padding: 20
  },
  box: {
    height: 50,
    width:'100%'
  },
  appbar: {
    marginBottom: 20
  }
}));

const AnakKomponent = ({ Karyawans }) => (
  <React.Fragment>
    {Karyawans.map((Satukaryawan) =>
      <Karyawan
        key={Satukaryawan.id}
        karyawan={Satukaryawan}
      />
    )}
  </React.Fragment>
)

const App = () => {
  const [Karyawans] = useKaryawan([]);
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="lg" component="h1">
        <AppBar position="static" color="transparent" className={classes.appbar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Daftar Karyawan Read Only
    </Typography>
            <Button>
              <Link href="https://github.com/yougo-belajar-software/daftar-karyawan-cra" color="textPrimary">
                <GitHubIcon />
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
        <ListKaryawan
          AnakKomponent={
            React.useMemo(
              () =>
                <AnakKomponent
                  Karyawans={Karyawans}
                ></AnakKomponent>,
              [Karyawans]
            )}
        >
        </ListKaryawan>
        <ParticlesBg type="cobweb" bg={true} />

      </Container>
    </div>

  );
}
export default React.memo(App);
