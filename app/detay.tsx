import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function DetayEkrani() {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.baslik}>Ürün Detayı 📄</Text>

      <View style={styles.kart}>
        <Text style={styles.label}>Ürün ID:</Text>
        <Text style={styles.deger}>#{params.id}</Text>

        <Text style={styles.label}>Ürün Adı:</Text>
        <Text style={styles.buyukYazi}>{params.value}</Text>

        <Text style={styles.durum}>
          Durum:{" "}
          {params.isBought === "true" ? "✅ Satın Alındı" : "❌ Alınmadı"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  baslik: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  kart: {
    width: "80%",
    padding: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#eee",
    // Gölge efekti (Shadow)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 14,
    color: "gray",
    marginTop: 10,
  },
  deger: {
    fontSize: 16,
    fontWeight: "500",
  },
  buyukYazi: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007AFF",
  },
  durum: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
