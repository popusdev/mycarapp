import { Image, StyleSheet, Text, View } from 'react-native';
import Card from '../Components/Card';

export default function Index() {
  return (
    <View style={styles.main}>
      <Card>
        <View style={styles.photo}>
          <Image src=''></Image>
          <Text>asdasdasda</Text>
        </View>
        <View>
          <Text>Siema</Text>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  photo: {
    width: "100%",
  },
  main: {

  }
})