import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}></View>
        <View style={styles.footer}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
    flex: 1
  },
  card: {
    width: "100%",
    maxWidth: 420,
    padding: 16,
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: '#dbdbdb',
    aspectRatio: 3 / 2,
  },
  content: {
    flex: 1
  },
  footer: {
  paddingHorizontal: 16,
  paddingVertical: 40,
  borderTopWidth: 1,
  borderRadius: 16,
  borderColor: "#eee",
  backgroundColor: "#fff"
}
})