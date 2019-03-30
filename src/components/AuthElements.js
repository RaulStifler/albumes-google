import React from 'react';
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import { withStyles } from '@material-ui/core/styles';

const AuthElements = (props) => {
    const loginButon = () => {
        if (props.user) {
			return [<Avatar key={1} src={props.user.providerData[0].photoURL}/>,<IconButton key={2} color="inherit" onClick={props.logOut}><ExitToApp/></IconButton>]
		}
		return <Button variant="contained" onClick={props.logIn} >Iniciar Sesión</Button>
    }
    return(
        <div className={props.classes.container}>
            {loginButon()}
        </div>
    );
}

export default withStyles({
	container: {
		display: 'flex',
		flexDirection: 'row',

	}
})(AuthElements);