import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface item {
  id: number;
  value: string;
  isBought: boolean;
}

export default function HomeScreen() {
  const [input, setInput] = useState<string>("");
  const [itemArray, setItemArray] = useState<item[]>([]);

  const addFunc = () => {
    if (input.trim() === "") return;
    const newItem = { id: Date.now(), value: input, isBought: false };
    setItemArray([...itemArray, newItem]);
    setInput("");
    Keyboard.dismiss();
    console.log(itemArray);
  };

  const removeFunc = (id: number) => {
    setItemArray(itemArray.filter((key) => key.id != id));
  };

  const toogle = (id: number) => {
    const newList = itemArray.map((item) => {
      if (item.id === id) {
        return { ...item, isBought: !item.isBought };
      }
      return item;
    });
    setItemArray(newList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>🛒Alışveriş listesi</Text>

      <View style={styles.chart}>
        <TextInput
          placeholder="Ne alacaksınız?"
          style={styles.chartText}
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            addFunc();
          }}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={itemArray}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        style={{ width: "100%", marginTop: 20 }}
        renderItem={({ item }) => (
          <View style={styles.added}>
            <Text
              style={[
                styles.addedText,
                item.isBought && { textDecorationLine: "line-through" },
              ]}
              onPress={() => {
                toogle(item.id);
              }}
            >
              {item.value}
            </Text>
            <TouchableOpacity
              style={styles.detailBtn}
              onPress={() => {
                router.push({
                  pathname: "/detay",
                  params: {
                    id: item.id,
                    value: item.value,
                    isBought: item.isBought.toString(),
                  },
                });
              }}
            >
              <Text>detay</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.delStyle}
              onPress={() => {
                removeFunc(item.id);
              }}
            >
              <Text style={styles.delText}>×</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  titleStyle: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: "bold",
  },
  chart: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  chartText: {
    flex: 1,
    borderColor: "dark grey",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
    fontSize: 16,
  },
  btnStyle: {
    borderWidth: 2,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "blue",
  },
  btnText: {
    color: "blue",
    fontSize: 30,
    marginBottom: 4,
  },
  added: {
    textDecorationLine: "none",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
    marginTop: 25,
  },
  addedText: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "red",
    marginRight: 10,
  },
  delText: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold",
  },
  delStyle: {
    width: 40,
    height: 40,
    borderColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 20,
  },
  detailBtn: {
    marginRight: 10,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 5,
    paddingVertical: 13,
  },
});
