import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import * as Contacts from "expo-contacts";
import useAlert from "../../components/Alert";
import { FONTS, SHADOWS } from "../../utils/fonts";
import { Loader, SearchInput } from "../../components";
import { Formik } from "formik";
import { useImportContactMutation } from "../../store/api/userSlice";

const SingleContact = ({ item, contactsList, setContactsList }) => {
  const { image, id, name, imageAvailable } = item;
  let details = {};
  if (item?.emails) {
    details.email = item?.emails[0]?.email || null;
  }
  if (item?.phoneNumbers) {
    details.phone = item?.phoneNumbers[0]?.number || null;
  }
  if (item?.birthday) {
    const bith = item?.rawDates[0]?.value || null;
    details.birthday = bith;
  }
  details.name = name;
  details.id = id;

  const [state, setState] = useState(false);
  useEffect(() => {
    if (state) {
      setContactsList([...contactsList, details]);
    } else {
      setContactsList(contactsList.filter((c) => c.id !== item.id));
    }
  }, [state]);
  return (
    <View
      style={[
        styles.placeCenter,
        {
          flexDirection: "row",
          justifyContent: "flex-start",

          marginBottom: 5,
        },
      ]}
    >
      <View style={[styles.placeCenter, { marginRight: 20 }]}>
        {imageAvailable ? (
          <Image
            source={{
              uri: image.uri,
            }}
            style={{
              width: 50,
              height: 50,

              borderRadius: 25,
            }}
            resizeMode="contain"
          />
        ) : (
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#D20C83",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#fff",
                fontFamily: FONTS.MulishBold,
              }}
            >
              {name?.slice(0, 1).toUpperCase()}
            </Text>
          </View>
        )}
      </View>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            color: "#200E32",
            fontFamily: FONTS.MulishBold,
            fontSize: 14,
          }}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {name}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "#D20C83",
          paddingVertical: 8,
          paddingHorizontal: 20,
          borderRadius: 30,
          marginLeft: 12,
          ...SHADOWS.light,
        }}
        onPress={() => setState(!state)}
      >
        <Text
          style={{
            width: 50,
            textAlign: "center",
            color: "#fff",
            fontSize: 12,
            fontFamily: FONTS.MulishBold,
          }}
        >
          {!state ? "Import" : "Remove"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const PhoneBook = () => {
  const { showAlert } = useAlert();
  const [contacts, setContacts] = useState([]);
  const [contactsList, setContactsList] = useState([]);
  const [importContact, { isLoading }] = useImportContactMutation();

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.Emails,
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.RawImage,
            Contacts.Fields.PhoneNumbers,
            Contacts.Fields.Birthday,
          ],
        });

        setContacts(data);
      } else {
        showAlert("Access Denied");
      }
    })();
  }, []);
  if (isLoading) return <Loader />;
  const handleSubmit = async () => {
    let transformedContacts = contacts.map((contact) => {
      const { name, emails, rawDates, phoneNumbers } = contact;
      return {
        name,
        email: emails ? emails[0]?.email : null,
        birthday: rawDates ? rawDates[0]?.value : null,
        phone: phoneNumbers ? phoneNumbers[0]?.number : null,
      };
    });

    if (contactsList.length > 0) {
      const { data, error } = await importContact(contactsList);
      if (error) {
        showAlert(error.message);
        console.log(error);
      }
      if (data) {
        showAlert("Contacts imported successfully");
      }
    } else {
      const { data, error } = await importContact(transformedContacts);
      if (error) {
        showAlert(error.message);
      }
      if (data) {
        showAlert("Contacts imported successfully");
      }
    }
  };
  return (
    <View style={[styles.container, { marginHorizontal: 25 }]}>
      <View style={{ marginBottom: 20 }}>
        <Formik initialValues={{ search: "" }}>
          <SearchInput name="search" />
        </Formik>
      </View>
      <FlatList
        data={contacts}
        contentContainerStyle={{ marginBottom: 20, paddingBottom: 20 }}
        renderItem={({ item }) => (
          <SingleContact
            item={item}
            contactsList={contactsList}
            setContactsList={setContactsList}
          />
        )}
        keyExtractor={(item) => item.lookupKey}
      />
      <TouchableOpacity
        style={{
          width: "100%",
          height: 50,
          borderRadius: 30,
          marginVertical: 20,
          backgroundColor: "#D20C83",
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={handleSubmit}
      >
        <Text
          style={{ fontFamily: FONTS.MulishBold, color: "#fff", fontSize: 16 }}
        >
          {contactsList.length === 0
            ? "Import All"
            : `Import ${contactsList.length}`}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default PhoneBook;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  placeCenter: {
    justifyContent: "center",
    alignItems: "center",
  },
});
