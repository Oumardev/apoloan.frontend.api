import { StyleSheet } from 'react-native';

export const infoStyle = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#B8E3FF'
    },

    emptySection:{
        flex:1,
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        padding:20,
        margin : 10,
        borderRadius: 7
    },  

    whiteSection:{
        flex: 2,
        backgroundColor: 'white',
        borderRadius:50,
        alignItems:'center',
        padding:10
    },

    price:{
        backgroundColor: '#12b1e0',
        alignItems: 'center',
        padding:15,
        width:150,
        borderRadius:10,
        margin : 5
    },

    priceText:{
        color : 'white',
        fontSize: 23,
        fontWeight: '600'
    },

    details:{
        display: 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        backgroundColor : '#F0ECE3',
        margin: 10,
        width: 300,
        padding:20,
        borderRadius: 10
    },

    detailsText:{
        fontSize : 20,
        fontWeight : '400'
    },

    detailsTarget:{
        textAlign: 'center',
        fontSize : 20,
        fontWeight : '600'
    },

    submit:{
        display: 'flex',
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor : '#F46D76',
        margin: 60,
        width: 200,
        padding:20,
        borderRadius: 10
    },
});