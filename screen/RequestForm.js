import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, CheckBox, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Component } from 'react';
import axios from 'axios';
import { TextField, FilledTextField, OutlinedTextField } from 'rn-material-ui-textfield'
import { colors } from '@material-ui/core';
import { ScrollView } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';
import { StatusBar } from 'expo-status-bar';

const requestSchema = yup.object({
    name: yup.string().required(),
    sirname: yup.string().required(),
    age: yup.string().required(),
    district: yup.string().required(),
    mobile: yup.string().required(),
    message: yup.string().required(),
    agreement: yup.string().required(),
});

export default class RequestForm extends Component{

    constructor(props) {
        super(props)

        this.state = {
            open: false,
            value: '',
            items: [
                { label: 'Baksa', value: 'Baksa'},
                { label: 'Barpeta', value: 'Barpeta'},
                { label: 'Biswanath', value: 'Biswanath'},
                { label: 'Bongaigaon', value: 'Bongaigaon'},
                { label: 'Cachar', value: 'Cachar'},
                { label: 'Charaideo', value: 'Charaideo'},
                { label: 'Chirang', value: 'Chirang'},
                { label: 'Darrang', value: 'Darrang'},
                { label: 'Dhemaji', value: 'Dhemaji'},
                { label: 'Dhubri', value: 'Dhubri'},
                { label: 'Dibrugarh', value: 'Dibrugarh'},
                { label: 'Dima Hasao (North Cachar Hills)', value: 'Dima Hasao (North Cachar Hills)'},
                { label: 'Goalpara', value: 'Goalpara'},
                { label: 'Golaghat', value: 'Golaghat'},
                { label: 'Hailakandi', value: 'Hailakandi'},
                { label: 'Hojai', value: 'Hojai'},
                { label: 'Jorhat', value: 'Jorhat'},
                { label: 'Kamrup', value: 'Kamrup'},
                { label: 'Kamrup Metropolitan', value: 'Kamrup Metropolitan'},
                { label: 'Karbi Anglong', value: 'Karbi Anglong'},
                { label: 'Karimganj', value: 'Karimganj'},
                { label: 'Kokrajhar', value: 'Kokrajhar'},
                { label: 'Lakhimpur', value: 'Lakhimpur'},
                { label: 'Majuli', value: 'Majuli'},
                { label: 'Morigaon', value: 'Morigaon'},
                { label: 'Nagaon', value: 'Nagaon'},
                { label: 'Nalbari', value: 'Nalbari'},
                { label: 'Sivasagar', value: 'Sivasagar'},
                { label: 'Sonitpur', value: 'Sonitpur'},
                { label: 'South Salamara-Mankachar', value: 'South Salamara-Mankachar'},
                { label: 'Tinsukia', value: 'Tinsukia'},
                { label: 'Udalguri', value: 'Udalguri'},
                { label: 'West Karbi Anglong', value: 'West Karbi Anglong'},
            ],
        };

        this.setValue = this.setValue.bind(this);
        this.setOpen = this.setOpen.bind(this);
        this.setItems = this.setItems.bind(this);
    }

    setOpen(open) {
        this.setState({
            open
        });
    }
    
    setValue(callback) {
        this.setState(state => ({
            value: callback(state.value)
        }));
    }
    
    setItems(callback) {
        this.setState(state => ({
            items: callback(state.items)
        }));
    }

    selectHadler(e){
        if(this.state.selected == true) {
            this.setState({
                selected: false,
            })
        } else {
            this.setState({
                selected: true,
            })
        }
    }

    render(){
        const addRequest = (values) => {
            const request = {
                name: values.name,
                sirname: values.sirname,
                age: values.age,
                district: this.state.value,
                mobile: values.mobile,
                message: values.message,
                agreement: values.agreement,
            }

            axios.post('https://covidtrackerapi.herokuapp.com/request/add', request)
                .then(
                    Alert.alert('Submitted', "You've succefully posted your request.", [
                        {text: 'Done', onPress: () => console.log('Alert Closed')}
                    ])
                )
                .catch(err => res.status(400).json('Error: ' + err));
        }

        const { open, value, items } = this.state;
        DropDownPicker.setListMode("SCROLLVIEW");
        DropDownPicker.setTheme("DARK");

        return(
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
            >
            <View>
                <Formik
                    initialValues={{ agreement: '', district: this.state.value, message: '', mobile: '', name: '', sirname: '', age: '' }}
                    validationSchema={requestSchema}
                    onSubmit={(values, actions) => {
                        // console.log(values);
                        addRequest(values);
                        actions.resetForm();
                    }}
                >
                    {(props) => (
                        
                        <View style={styles.form}>
                            <OutlinedTextField
                                label="First Name"
                                style={styles.inputMaterial}
                                onChangeText={props.handleChange('name')}
                                value={props.values.name}
                                baseColor='skyblue'
                                tintColor='orange'
                            />
                            <Text style={styles.errorText}>{props.touched.name && props.errors.name}</Text>

                            <OutlinedTextField
                                label="Last Name"
                                style={styles.inputMaterial}
                                onChangeText={props.handleChange('sirname')}
                                value={props.values.sirname}
                                baseColor='skyblue'
                                tintColor='orange'
                            />
                            <Text style={styles.errorText}>{props.touched.sirname && props.errors.sirname}</Text>

                            <OutlinedTextField
                                keyboardType='numeric'
                                label="Age"
                                style={styles.inputMaterial}
                                onChangeText={props.handleChange('age')}
                                value={props.values.age}
                                baseColor='skyblue'
                                tintColor='orange'
                            />
                            <Text style={styles.errorText}>{props.touched.age && props.errors.age}</Text>

                            {/* <OutlinedTextField
                                label="District Name"
                                style={styles.inputMaterial}
                                onChangeText={props.handleChange('district')}
                                value={props.values.district}
                                baseColor='skyblue'
                                tintColor='orange'
                            /> */}
                            <DropDownPicker
                                onChangeValue={props.handleChange('district')}
                                placeholder="Select District"
                                open={open}
                                value={value}
                                items={items}
                                setOpen={this.setOpen}
                                setValue={this.setValue}
                                setItems={this.setItems}
                                style={{marginBottom: 5,}}
                                itemSeparator={true}
                                placeholderStyle={{
                                    fontWeight: "bold"
                                }}
                            />
                            <Text style={styles.errorText}>{props.touched.district && props.errors.district}</Text>

                            <OutlinedTextField
                                keyboardType='numeric'
                                label="Mobile Number"
                                style={styles.inputMaterial}
                                onChangeText={props.handleChange('mobile')}
                                value={props.values.mobile}
                                baseColor='skyblue'
                                tintColor='orange'
                            />
                            <Text style={styles.errorText}>{props.touched.mobile && props.errors.mobile}</Text>

                            <OutlinedTextField
                                label="Message"
                                style={styles.inputMaterial}
                                onChangeText={props.handleChange('message')}
                                value={props.values.message}
                                baseColor='skyblue'
                                tintColor='orange'
                            />
                            <Text style={styles.errorText}>{props.touched.message && props.errors.message}</Text>

                            <OutlinedTextField
                                label="Self Declaration Statement"
                                style={styles.inputMaterial}
                                onChangeText={props.handleChange('agreement')}
                                value={props.values.agreement}
                                baseColor='skyblue'
                                tintColor='orange'
                            />
                            <Text style={styles.errorText}>{props.touched.agreement && props.errors.agreement}</Text>
                            <Text style={{color: 'white', marginTop: -10, marginBottom: 20}}>Example/- I hereby declare that I am willing to accept plasma donations when provided</Text>
                            <Button style={styles.submitBtn} title='Submit Request' color='maroon' onPress={props.handleSubmit} />
                        </View>
                        
                    )}
                </Formik>
            </View>
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
    form: {
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: 'skyblue',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        color: 'yellow'
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 6,
        marginTop: -6,
        textAlign: 'left',
        marginLeft: 10,
    },
    submitBtn: {
        marginTop: 20,
    },
    inputMaterial: {
        marginTop: 20,
        color: 'yellow'
    },
});