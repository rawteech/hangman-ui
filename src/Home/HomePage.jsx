import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { gameActions } from "../_actions";

// Material design stuff
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';


class HomePage extends React.Component {
    state = {
        letter: ""
    };

    componentDidMount() {
        this.props.startGame();
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { letter } = this.state;
        const { game: { data: { game_id } } } = this.props;
        const data = { letter, game_id };
        this.props.playGame(data, game_id);
        this.setState({ letter: "" });
    }

    render() {
        const { classes, game } = this.props;
        if (game.error === true){
            const { data } = game;
            if (data.message === "[RSAA].headers function failed") {
                window.location.reload();
            }
            return(
                <div>
                    An error occured: {data.message}
                </div>
            );
        } else if (game.loading === true) {
            return(
                <div>
                    <CircularProgress className={classes.progress} />
                </div>
            )
        } else {
            return (
                <React.Fragment>
                    <CssBaseline />
                    <div>
                        <main className={classes.home}>
                            <Paper className={classes.homePaper}>
                                <Typography variant="h2" component="h2">
                                    Hangman Game
                                </Typography>
                                <Typography variant="h3" component="h3">
                                    [{game.data.spaces}]
                                </Typography>
                                <Typography variant="h5" component="p">
                                    Guess a word, and submit to check whether
                                    you are correct
                                </Typography>
                                <form className={classes.form} onSubmit={this.handleSubmit}>
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="letter">Input Letter</InputLabel>
                                        <Input
                                            type="text"
                                            id="letter"
                                            name="letter"
                                            autoComplete="letter"
                                            value={this.state.letter}
                                            autoFocus
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        className={classes.submit}
                                    >
                                        Guess
                                    </Button>
                                </form>
                            </Paper>
                        </main>
                    </div>
                </React.Fragment>
            );
        }
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

// Dispatch mapper
function mapDispatchToProps(dispatch) {
    return ({
        startGame: () => dispatch(gameActions.createGame()),
        playGame: (data, gameId) => dispatch(gameActions.playGame(data, gameId)),
    });
};

// State Mapper
function mapStateToProps(state) {
    const { game } = state;
    return {
        game
    };
};

const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };