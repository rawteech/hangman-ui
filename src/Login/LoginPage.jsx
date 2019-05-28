import React from 'react';
import { connect } from "react-redux";
import { login } from "../_actions";
import { LOGIN_SUCCESS } from "../_constants";
import { history } from "../_helpers";

// Design stuff
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

    componentDidMount() {
        localStorage.clear();
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(login(username, password)).then(response => {
                if (response.type === LOGIN_SUCCESS) {
                    const credentials = response.payload
                    localStorage.setItem('credentials', JSON.stringify(credentials));
                    history.push("/")
                }
            })
        }
    }

    render() {
        const { classes } = this.props;
        const { username, password } = this.state;
        return (
            <div>
                <main className={classes.main}>
                    <CssBaseline />
                    <Paper className={classes.loginPaper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>

                        <Typography component="h1" variant="h5">
                            Hangman: Login
                        </Typography>
                        <form className={classes.form} onSubmit={this.handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                    autoComplete="username"
                                    value={username}
                                    autoFocus
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    value={password}
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </div>
        );
    }
}

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

const connectedLoginPage = connect(null)(LoginPage);
export { connectedLoginPage as LoginPage }