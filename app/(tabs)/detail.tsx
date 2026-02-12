import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>🛒Alışveriş listesi</Text>

      <View style={styles.chart}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 60,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 25,
    backgroundColor: "#fff",
  },
  titleStyle: {
    fontSize: 30,
  },
  chart: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },
  chartText: {
    width: 250,
    outlineColor: "dark grey",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 50,
  },
  btnStyle: {
    color: "blue",
    fontSize: 28,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 25,
  },
  delStyle: {
    color: "red",
    fontSize: 28,
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 25,
  },
});
