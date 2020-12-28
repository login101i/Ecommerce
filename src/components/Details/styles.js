import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    container: {
        width: '80%',
        height: 800,
        backgroundColor: 'green',
        margin: '0 auto',
        marginTop: 111,
        display: 'flex'
    },
    container__left: {
        flex: 0.25,
        backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image_left: {
        width: 180,
        margin: 22,
        borderRadius: 5,
    },
    container__center: {
        flex: 0.4,
        backgroundColor: 'yellow'
    },
    container__right: {
        flex: 0.35,
        backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',


    },
    button: {
        display: 'flex',
        alignItems: 'center',
    },
    buttons: {
        display: 'flex',
        marginBottom: 33,
    },
    media: {
        width: '100%',
        borderRadius: 4,



    }



}))