import React from "react";
import { Router, Route } from "react-router-dom";
import { history } from "../_helpers";
import { PrivateRoute } from "../_components";
import { HomePage } from "../Home";
import { LoginPage } from "../Login";
import PropTypes from 'prop-types';
import { styles } from "../_styles";
import withStyles from '@material-ui/core/styles/withStyles';

class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Router history={history}>
                    <div>
                        {/* <PrivateRoute
                            path={`/completed/`}
                            component={() => <Game classes={classes} />}
                        /> */}
                        <PrivateRoute
                            exact path="/"
                            component={() => <HomePage classes={classes} />}
                        />
                        <Route
                            path="/login"
                            component={() => <LoginPage classes={classes} />}
                        />
                    </div>
                </Router>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styledApp = withStyles(styles)(App);
export { styledApp as App };
