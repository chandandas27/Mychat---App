import React, { Component } from 'react';
import { FlatList ,View, Text,  TextInput, StyleSheet, Toast } from 'react-native'; 
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }
       componentDidMount() {
           this.getUserList();
       }

       getUserList = async () => {
           let that = this;
           axios.get('http://192.168.56.1:3000/userlist')
           .then(function (response){
               if(response && response.data) {
                   that.setState({users:response.data});
               } else if (response && response.data && response.data.message){
                   Toast.show(response.data.message, 1000);
               }
           })
           .catch(function (error){
               console.log(error);
           });
       }

render() {
    const { users } = this.state;
    return (
        <View style={styles.container}>
       {users && users.length>0?<FlatList
       data={users}
            renderItem= {({item}) => <Text style={styles.item} key={item._id}>{item.name}</Text>}
             />:null}
        </View>
    )
}

}

export default Home;

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center'
    },
    item:{
        fontWeight:"bold",
        color:"#fb5b5a",
        backgroundColor:"#465881",
    }

});