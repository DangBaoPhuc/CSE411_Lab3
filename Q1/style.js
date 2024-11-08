import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#faf5f9',
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding: 48,
        marginBottom: 16,
    },
    imageColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButtonColumn: {
        width: 250,
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    textRow: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#616161',
    },
    semi_text: {
        fontSize: 13,
        color: '#7a7a7a',
    },
    discount_text: {
        fontSize: 13,
        color: '#0b8c18',
    },
    button: {
        backgroundColor: '#006ee3',
        borderRadius: 30,
        flex: 1,
      height: "100%",
     
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginHorizontal: 8,
        marginTop: 16,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.17,
        shadowRadius: 3.05,
        elevation: 4,
    },

    buttonText: {
        fontSize: 8,
        fontWeight: 'bold',
        color: '#FFF',
    },
    logo: {
        width: 100, // Set image size
        height: 100,
        borderRadius: 8,
      },
      TextDecor: {
       fontWeight: 'bold'
      },
      searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 10,
        backgroundColor: '#f9f9f9',
       },
});

export default styles;

