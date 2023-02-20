import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  PermissionsAndroid,
  FlatList,
  ScrollView,
} from 'react-native';
import Contacts from 'react-native-contacts';

// PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS,{
//   title: 'Contacts',
//   message: 'This app would like to view your contacts.',
//   buttonPositive: 'Please accept bare mortal',
// })
//   .then((res) => {
//       console.log('Permission: ', res);
//       Contacts.getAll()
//           .then((contacts) => {
//               // work with contacts
//               console.log(contacts);
//           })
//           .catch((e) => {
//               console.log(e);
//           });
//   })
//   .catch((error) => {
//       console.error('Permission error: ', error);
//   });

const Contact = ({contact}) => {
  return (
    <View style={styles.contactCon}>
      <View style={styles.imgCon}>
        <View style={styles.placeholder}>
          <Text style={styles.txt}>{contact?.givenName[0]}</Text>
        </View>
      </View>
      <View style={styles.contactDat}>
        <Text style={styles.name}>
          {contact?.givenName} {contact?.middleName && contact.middleName + ' '}
          {contact?.familyName}
        </Text>
        <Text style={styles.phoneNumber}>
          {contact?.phoneNumbers[0]?.number}
        </Text>
      </View>
    </View>
  );
};

function ContactScreen() {
  const [contacts, setContacts] = useState([]);

  Contacts.getAll().then(contacts => {
    setContacts(contacts);
  });

  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };

  return (
    <ScrollView>
      <FlatList
        data={contacts}
        renderItem={({item, index}) => <Contact contact={item} />}
        keyExtractor={keyExtractor}
        style={styles.list}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contactCon: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d9d9d9',
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDat: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: '#888',
  },
  list: {
    flex: 1,
  },
});

export default ContactScreen;
