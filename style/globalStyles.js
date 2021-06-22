import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#1c2732"
    },
    homeContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: "#1c2732"
    },
    homeText: {
        color: 'black',
        fontSize: 20
    },
    countryCard: {
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 6,
        backgroundColor: '#F7FAFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 12,  
        elevation: 5,
        marginTop: 10,
    },
    countryStats: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        paddingBottom: 40,
        textAlign: 'left'
    },
    india: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 30,
        color:'black',
    },
    indiaCases: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    actstats: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
    },
    recstats: {
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold',
    },
    decstats: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    constats: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
    },
    features: {
        marginTop: 26,
        padding: 5,
    },
    fcard: {
        marginRight: 26,
        width: 110,
        height: 110,
        backgroundColor: '#5F6467',
        padding: 14,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.6,
        shadowRadius: 12,  
        elevation: 5
    },
    ftext: {
        marginTop: 14,
        color: 'white',
        fontWeight: 'bold'
    },
    worldStats: {
        marginTop: 23,
        paddingLeft: 10,
        paddingRight: 10,
        // flex: 1,
        overflow: 'scroll',

    },
    casesHeading:{
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: 'orange',
        padding: 14,
        borderRadius: 8
    },
    flatList: {
        marginTop: 10,
        flex: 1,
    }
});