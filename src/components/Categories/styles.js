import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
    appBar: {
        marginTop: 40,
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        margin: '0 auto'

    },
    title: {
        marginTop: 16,
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        textDecoration: 'none',
        justifyContent: 'center'
    },

    grow: {
        flexGrow: 1,
    },



}));