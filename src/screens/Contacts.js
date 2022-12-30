import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Loader, SearchInput } from "../components";
import { Formik } from "formik";
import Contact from "../components/Contact";
import images from "../assets";
import { FONTS } from "../utils/fonts";
import { useLazyGetcontactsQuery } from "../store/api/userSlice";
import Modals from "../components/Modals";

const windowHeight = Dimensions.get("window").height;
const Contacts = ({ navigation }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Image
            source={images.dots}
            resizeMode="contain"
            style={{ height: 20, marginRight: 20 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  // console.log(props);
  const [getContact, { data, isLoading }] = useLazyGetcontactsQuery();
  const [state, setState] = useState({
    page: 1,
    per_page: 20,
  });
  useEffect(() => {
    getContact(state);
  }, []);

  const arr = [
    {
      id: 1,
      title: "Add Friend",
      link: "AddFriends",
    },
    {
      id: 2,
      title: "Invite Friends",
      link: "InviteFriends",
    },
    {
      id: 3,
      link: "ImportContacts",
      title: "Import Contacts",
    },
  ];
  if (isLoading) return <Loader />;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF5FE" }}>
      {/* style={{ backgroundColor: "#FFF5FE" }} */}
      <View>
        <View style={styles.container}>
          <Formik initialValues={{ search: "" }}>
            <SearchInput
              name="search"
              containerStyle={{ borderRadius: 10 }}
              properties={{ placeholder: "Search contact" }}
            />
          </Formik>
        </View>
        {/* data.data */}
        {data?.data?.length > 0 ? (
          <FlatList
            data={data?.data}
            contentContainerStyle={{
              zIndex: -1,
              paddingBottom: 120,
            }}
            renderItem={({ item }) => (
              <Contact item={item} /> /*navigation={navigation}*/
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={styles.imageContainer}>
            <Image
              source={images.contact}
              resizeMode="contain"
              style={{
                height: 200,
                width: 300,
                // position: "absolute",
                marginBottom: 30,
              }}
            />

            <Text style={styles.text}>Oops!</Text>
            <Text numberOfLines={3} style={styles.text}>
              Looks like you’re the only one here, add your friends to enjoy
              more of this app
            </Text>
          </View>
        )}
      </View>
      <Modals open={open} modalStyle={{ right: 0 }}>
        <FlatList
          data={arr}
          contentContainerStyle={{ width: "100%", padding: 10 }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text
              onPress={() => {
                navigation.navigate(item.link);
                setOpen(false);
              }}
              style={{
                fontSize: 14,
                paddingVertical: 10,
                paddingHorizontal: 10,
                fontFamily: FONTS.MulishBold,
              }}
            >
              {item.title}
            </Text>
          )}
        />
      </Modals>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    position: "absolute",
    flex: 1,
    height: windowHeight,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: FONTS.MulishBold,
    maxWidth: "80%",
    color: "#23031C",
    fontSize: 15,
  },
  container: {
    paddingHorizontal: 30,
    marginVertical: 30,
    marginBottom: 30,
    backgroundColor: "#FFF5FE",
  },
});

export default Contacts;
