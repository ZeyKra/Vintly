import React from 'react';
import { View, Text, Button, FlatList, StyleSheet, ListRenderItem } from 'react-native';
import { useEffect, useState } from 'react';
import VintedItem from '@/interfaces/VintedItem';
import scrap from '@/src/functions/scrap';

interface DataItem {
  id: string;
  first_name: string;
}

/*
const data: DataItem[] = [
  { id: '1', first_name: 'John' },
  { id: '2', first_name: 'Jane' },
  { id: '3', first_name: 'Doe' },
  // Add more items as needed
];*/

const [data, setData] = useState<VintedItem[]>([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const items = await scrap.getVintedItems('lanvin');
      setData(items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);


export default function Index() {

  const renderItem: ListRenderItem<VintedItem> = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>Salut {item.title} 👋</Text>
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
      keyExtractor={item => item.title}
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