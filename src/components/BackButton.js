const BackButton = () => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <Image
        resizeMode="contain"
        source={images.back}
        style={{
          marginLeft: -30,
          height: 40,
          tintColor: "#fff",
        }}
      />
    </TouchableWithoutFeedback>
  );
};
export default BackButton;
