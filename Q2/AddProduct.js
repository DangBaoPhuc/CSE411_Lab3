
import React from "react";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert,Button } from "react-native";

import styles from "../Q1/style";

const AddProduct=()=> {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState('');
    const [rating, setRating] = useState('');
    const [stock, setStock] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState(''); const [images, setImages] = useState('');
    const handleSubmit = () => {
        fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title,
                description,
                price,
                discountPercentage,
                rating,
                stock,
                brand,
                category,
                images,
            }),
        }).then((res) => res.json())
            .then(console.log);
        Alert.alert('Add sucessfull');
    };
    return (

        <View>
            <Text style={{ fontSize: 35, color: 'blue', fontWeight: 'bold' }}>Add Product</Text>

            <View>
                <Text style={styles.TextDecor}>Title</Text>
                <TextInput placeholder="Enter Title" onChange={setTitle}></TextInput>
                <Text style={styles.TextDecor}>Description</Text>
                <TextInput placeholder="Enter Description" onChange={setDescription}></TextInput>
                <Text style={styles.TextDecor}>Price</Text>
                <TextInput placeholder="Enter Price" onChange={setPrice}></TextInput>

                <Text style={styles.TextDecor}>Discount Percentage</Text>
                <TextInput placeholder="Enter Discount Percentage" onChange={setDiscountPercentage}></TextInput>

                <Text style={styles.TextDecor}>Rating</Text>
                <TextInput placeholder="Enter Rating" onChange={setRating}></TextInput>

                <Text style={styles.TextDecor}>Stock</Text>
                <TextInput placeholder="Enter Stock" onChange={setStock}></TextInput>
                <Text style={styles.TextDecor} >Brand</Text>
                <TextInput placeholder="Enter Brand" onChange={setBrand}></TextInput>
                <Text style={styles.TextDecor}>Category</Text>
                <TextInput placeholder="Enter Category" onChange={setCategory}></TextInput>
                <Text style={styles.TextDecor}>Image</Text>
                <TextInput placeholder="Enter image URL(s)"></TextInput>
                <Button title="Add Product" onPress={handleSubmit} style={styles.button} >
                </Button>





            </View>



        </View>
    )



};
export default AddProduct;