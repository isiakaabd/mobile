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
import { Formik, useFormikContext } from "formik";
import Contact from "../components/Contact";
import images from "../assets";
import { FONTS } from "../utils/fonts";
import {
  useLazyGetcontactsQuery,
  useLazySearchContactQuery,
} from "../store/api/userSlice";
import Modals from "../components/Modals";
import Select from "../components/Select";
import useAlert from "../components/Alert";

const windowHeight = Dimensions.get("window").height;
const Contacts = ({ navigation, route }) => {
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

  const [state, setState] = useState([]);
  const [getContact, { data, isLoading }] = useLazyGetcontactsQuery();
  const [search, { isLoading: loading }] = useLazySearchContactQuery();
  const { showAlert } = useAlert();
  const [pages, setPages] = useState({
    page: 1,
    per_page: 20,
  });
  useEffect(() => {
    const fetch = async () => {
      const { data } = await getContact(pages);
      setState(data?.data);
    };
    fetch();
  }, [pages]);

  const arr = [
    {
      id: 1,
      title: "Add Friend",
      link: "Add Friends Manually",
    },
    {
      id: 2,
      title: "Invite Friends",
      link: "Invite Friends",
    },
    {
      id: 3,
      link: "Import Contacts",
      title: "Import Contacts",
    },
  ];
  const searchContact = async (values) => {
    const { data, error } = await search(values.search);
    setState(data?.data);
    if (error) showAlert(error?.message || "Something went wrong...");
  };
  // useEffect(() => {
  //   const handler = (e) => {
  //     if (e.keyCode === 13) {
  //       // check if the user is on the invoice page or not
  //       if (route.params.name === "Contacts") {
  //         e.preventDefault();
  //         searchContact(values);
  //       }
  //     }
  //   };
  //   // document.addEventListener("keydown", handler);
  //   // return () => {
  //   //   document.removeEventListener("keydown", handler);
  //   // };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  if (isLoading) return <Loader />;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF5FE" }}>
      <View>
        <View style={styles.container}>
          <Formik initialValues={{ search: "" }} onSubmit={searchContact}>
            <SearchInput
              name="search"
              containerStyle={{ borderRadius: 10 }}
              onClick={searchContact}
              properties={{ placeholder: "Search contact" }}
              loading={loading}
            />
          </Formik>
        </View>
        {/* data.data */}
        {state?.length > 0 ? (
          <FlatList
            data={state}
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
      {/* <View
        style={{
          backgroundColor: "red",
          position: "absolute",
          flexDirection: "row",
          width: 90,
        }}
      >
        <Text>Sort by</Text>
        <View>
          <Formik
            initialValues={{
              sort: "",
            }}
          >
            {({ isValid, isSubmitting, handleSubmit }) => (
              <Select
                name="Sort"
                options={[
                  {
                    label: "Sort By",
                    value: "sort",
                  },
                ]}
              />
            )}
          </Formik>
        </View>
      </View> */}
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
