import { StyleSheet, View } from "react-native";
import React, { ReactNode } from "react";

export default function Card({ children }: { children: React.ReactNode }){

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.content}>{children}</View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white',
  },
  card: {
    width: "100%",
    maxWidth: 420,
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: '#dbdbdb',
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