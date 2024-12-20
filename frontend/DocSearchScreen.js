import React, { useEffect, useState } from 'react';
import { Alert, FlatList, RefreshControl, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from './file';

const DocSearchScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const fetchDoctors = async () => {
    try {
      const response = await fetch(config.search);
      const json = await response.json();
      if (json.success) {
        setData(json.data);
        setFilteredData(json.data);
      } else {
        setError(json.message || 'Failed to fetch data');
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
      setRefreshing(false); // Stop refreshing when fetch is complete
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) =>
        item.username.toLowerCase().includes(query.toLowerCase())
      );
      if (filtered.length === 0) {
        Alert.alert('No Results', `No results found for "${query}"`);
      }
      setFilteredData(filtered);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchDoctors();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('SearchScreen', { user: item })}
      accessibilityLabel={`Navigate to ${item.username}`}
    >
      <Text style={styles.username}>Username: {item.username}</Text>
      <Text style={styles.name}>Name: {item.Name}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centeredContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <TouchableOpacity onPress={fetchDoctors}>
          <Text style={styles.retryButton}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon name="user" size={20} color="#555" style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by username"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, // Move content down
    padding: 16,
    backgroundColor: 'rgba(56, 231, 210, 0.5)',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40, // Move content down
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 1,
  },
  listContainer: {
    paddingBottom: 20,
  },
  item: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    elevation: 1, // Adds a subtle shadow for Android
    shadowColor: '#000', // Adds a subtle shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  name: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  loadingText: {
    fontSize: 18,
    color: '#555',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  noResultsText: {
    fontSize: 18,
    color: '#555',
  },
  retryButton: {
    marginTop: 10,
    fontSize: 16,
    color: 'blue',
  },
});

export default DocSearchScreen;
