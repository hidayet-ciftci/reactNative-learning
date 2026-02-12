import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const [dogImg, setDogImg] = useState<string>(
    "https://images.dog.ceo/breeds/beagle/n02088364_12920.jpg",
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const fetchDog = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        console.log("fetch failed");
        return;
      }
      const data = await response.json();
      setDogImg(data.message);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchDog();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Bugunün şanslı köpeği</Text>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Image
          source={{
            uri: dogImg,
          }}
          style={{ width: 300, height: 300, borderRadius: 20 }}
        />
      )}

      <Button
        onPress={() => {
          fetchDog();
        }}
        title="Yeni köpek getir"
      />
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
    fontSize: 50,
  },
});
