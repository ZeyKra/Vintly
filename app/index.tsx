import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, ListRenderItem } from 'react-native';

interface DataItem {
  id: string;
  first_name: string;
}

const data: DataItem[] = [
  { id: '1', first_name: 'John' },
  { id: '2', first_name: 'Jane' },
  { id: '3', first_name: 'Doe' },
  // Add more items as needed
];

export default function Index() {
  const renderItem: ListRenderItem<DataItem> = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>Salut {item.first_name} 👋</Text>
      <Button
        onPress={() => alert("Boutton pressé")}
        title="Boutton"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600, // Adjust height as needed
  },
});