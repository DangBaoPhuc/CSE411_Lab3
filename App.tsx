import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Product from './Q1/Product';
import AddProduct from './Q2/AddProduct';
import SearchProduct from './Q3/SearchProduct';
import Product_Detail from './Q4/Product_Detail';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomNavigation } from 'react-native-paper';

const App = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'ProductList', title: 'Products', focusedIcon: 'format-list-bulleted' },
        { key: 'Product_Add', title: 'Add', focusedIcon: 'add-circle-outline' },
        { key: 'ProductSearch', title: 'Search', focusedIcon: 'search' },
        { key: 'Product_Detail', title: 'Detail', focusedIcon: 'info' },
      ]);
  
    const renderScene = BottomNavigation.SceneMap({
        ProductList: Product,
        Product_Add: AddProduct,
        ProductSearch: SearchProduct,
        Product_Detail: Product_Detail
    });
  

    return (
      <SafeAreaProvider>
        <BottomNavigation
          navigationState={{index,routes}}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={styles.navigationBar}
          renderIcon={({ route, color }) => (
            <Icon name={route.focusedIcon} size={24} color={color} />
          )}
        />
      </SafeAreaProvider>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    navigationBar: {
      backgroundColor: '#f8f4ff',
    },
  });
  
  export default App;
