import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  
    root: {
        transition: '0.4s',
        cursor: 'pointer',
        boxShadow: '2px 3px 5px 2px rgba(255, 205, 175, .5)',
        border: 5,
        "&:hover": {
            transform: 'scale(1.02)',
            boxShadow: '2px 3px 5px 2px rgba(155, 105, 135, .5)',
        }
    },


    
    media: {
        height: "0px",
        paddingTop: '58%',

    },

    cardActions: {
        // display: 'flex',
        justifyContent: 'flex-end',
        // backgroundColor:'red',
        // borderWidth:2,
        // borderColor:'red',
        margin: -11,
        padding: 15,


    },
    text: {
        marginBottom: -11,
    },


    cardContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        // backgroundColor: 'green',
        margin: -16,
        padding: 8,
      
    }
}))