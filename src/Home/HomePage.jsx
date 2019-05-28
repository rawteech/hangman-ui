import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { gameActions } from "../_actions";

// Material design stuff
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';


class HomePage extends React.Component {
    componentDidMount() {
        this.props.startGame();
    }
    render() {
        const { classes, game } = this.props;
        console.log(JSON.stringify(game))
        if (game.data !== null) {
            return (
                <React.Fragment>
                    <CssBaseline />
                    {/* Footer */}
                    <footer className={classes.footer}>
                        <Typography variant="h6" align="center" gutterBottom>
                        Footer
                        </Typography>
                        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                        </Typography>
                    </footer>
                    {/* End footer */}
                </React.Fragment>
            );
        } else {
            return (
                <div>
                    <CircularProgress className={classes.progress} />
                </div>
            )
        }
    }
}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};

// Dispatch mapper
function mapDispatchToProps(dispatch) {
    return ({
        startGame: () => dispatch(gameActions.createGame())
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