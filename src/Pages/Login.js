import React from 'react'

//material imports
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Avatar from '@mui/material/Avatar'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

//router
import { Link } from "react-router-dom";



export default function Login() {

    //style presets
    const paperStyle = { padding: 20, height: '40vh', width: 380, margin: "150px auto" }
    const avatarStyle = { backgroundColor: 'green' }
    const btstyle = { margin: '8px 0' }

    return (

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Matos ltda</h2>
                </Grid>

                <TextField id="standard-basic" label="Login" variant="standard" placeholder='Digite seu login' fullWidth required />
                <TextField id="standard-basic" label="Senha" variant="standard" placeholder='Digite sua senha' type='password' fullWidth required />

                <FormControlLabel control={<Checkbox defaultChecked />} label="Lembrar-me" />

                <Link to="/produtos">
                    <Button type='submit' style={btstyle} color='primary' variant="contained" fullWidth>Entrar</Button>
                </Link>

            </Paper>
        </Grid>
    )
}

