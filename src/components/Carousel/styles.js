import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    slider: {
        width: '500%',
        height: '70vh',
        boxSizing: 'border-box',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        alignItems: 'center',
        backgroundColor:'black'
        //   marginLeft:-10


    },
    slide: {
        width: '100%',
        height: '70vh',
        transition: ' 0.5s ',
        overflow: 'hidden'
    },

    goLeft: {
        position: 'absolute',
        top: '0%',
        left: '0',
        transform: 'translate(0%)',
        width: '1%',
        height: '100%',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        border: 'none',
        transition: "0.3s",
        fontSize: 33,
        outline: 'none',
        "&:hover": {
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: 'rgba(255,255,255,0.8)',
        }
    },


    goRight: {
        position: 'absolute',
        top: '0%',
        left: '19%',
        transform: 'translate(0%)',
        width: '1%',
        height: '100%',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        border: 'none',
        transition: "0.3s",
        fontSize: 33,
        outline: 'none',



        "&:hover": {
            backgroundColor: 'rgba(0,0,0,0.3)',
            color: 'rgba(255,255,255,0.8)',

        }
    }

}));