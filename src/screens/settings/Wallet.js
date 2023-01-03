import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { FONTS, SHADOWS } from "../../utils/fonts";
import { Button } from "../../components";
import images from "../../assets";
import { useWalletDetailsQuery } from "../../store/api/userSlice";

const WalletItem = ({ item }) => {
  return (
    <View style={{ marginTop: 40 }}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "#200E32",
              fontSize: 15,
              fontFamily: FONTS.MulishBold,
              marginBottom: 20,
            }}
          >
            +500
          </Text>
          <Text
            style={{ color: "#4A4A4A", fontSize: 12, fontFamily: FONTS.Mulish }}
          >
            Birthday gift
          </Text>
        </View>
        <View>
          <Text
            style={{ color: "#9B9B9B", fontFamily: FONTS.Mulish, fontSize: 12 }}
          >
            {item.date}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Wallet = () => {
  const { data: walletDetails, isLoading } = useWalletDetailsQuery();
  const [active, setActive] = useState(true);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF5FE",
      padding: 30,
    },
    button: {
      flex: 1,
      margin: 10,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 8,
    },
    text: {
      fontFamily: FONTS.MulishBold,
      fontSize: 14,
      color: "#000",
    },
    money: {
      fontSize: 37,
      fontFamily: FONTS.MulishBold,
      color: "#000",
    },
  });
  const data = [
    {
      amount: 500,
      purpose: "Birthday Gift",
      date: "19 - 11 - 2011",
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 70,
          flexDirection: "row",
          backgroundColor: "#F8EAF2",
          borderRadius: 10,
        }}
      >
        <View
          style={[
            styles.button,
            { backgroundColor: active ? "#F8EAF2" : "#fff" },
          ]}
        >
          <TouchableWithoutFeedback onPress={() => setActive(false)}>
            <Text style={styles.text}>Wallet</Text>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={[
            styles.button,
            {
              backgroundColor: !active ? "#F8EAF2" : "#fff",
            },
          ]}
        >
          <TouchableWithoutFeedback
            style={[styles.button]}
            onPress={() => setActive(true)}
          >
            <Text style={styles.text}>Activities</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      {!active ? (
        <View>
          <View style={{ marginVertical: 30 }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={images.wallet2}
                resizeMode="contain"
                style={{ height: 200, width: 300 }}
              />
            </View>

            <Text
              style={{
                color: "#828282",
                fontSize: 14,
                fontFamily: FONTS.MulishBold,
                textAlign: "center",
              }}
            >
              You have a wallet balance of:
            </Text>
            <Text style={[styles.money, { textAlign: "center" }]}>
              {`NGN ${walletDetails?.balance ? walletDetails.balance : 0}`}
            </Text>
          </View>
          <View>
            <Button text={"Cash Out"} backgroundColor="#D20C83" />
            <Button text={"Fund Wallet"} color="#D20C83" />
          </View>
        </View>
      ) : (
        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.amount}
            renderItem={WalletItem}
          />
        </View>
      )}
    </View>
  );
};

export default Wallet;
