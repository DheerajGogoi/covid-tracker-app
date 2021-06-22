import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Image, CheckBox, Alert } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Component } from 'react';
import axios from 'axios';
import { TextField, FilledTextField, OutlinedTextField } from 'rn-material-ui-textfield';
import { colors } from '@material-ui/core';
import { ScrollView } from 'react-native-gesture-handler';
// import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker'; 
import MyDatePicker from '../shared/MyDatepicker';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { StatusBar } from 'expo-status-bar';


const requestSchema = yup.object({
    name: yup.string().required(),
    sirname: yup.string().required(),
    age: yup.string().required().test('is age atlest 18', "Doner's Age must be atleast 18", (val) => {
        return parseInt(val) > 17;
    }),
    district: yup.string().required(),
    blood: yup.string().required(),
    mobile: yup.string().required(),
    gender: yup.string().required(),
    agreement: yup.string().required(),
});

export default class DonerForm extends Component{

    constructor(props){
        super(props)

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = dd + '-' + mm + '-' + yyyy;

        this.state = {
            pdate: today,
            ndate: today,
            date: today,
            open: false,
            value: '',
            items: [
                { label: 'A+', value: 'A+' },
                { label: 'A-', value: 'A-' },
                { label: 'B+', value: 'B+' },
                { label: 'B-', value: 'B-' },
                { label: 'O+', value: 'O+' },
                { label: 'O-', value: 'O-' },
                { label: 'AB+', value: 'AB+' },
                { label: 'AB-', value: 'AB-' },
            ],
            openG: false,
            valueG: '',
            itemsG: [
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
                { label: 'Others', value: 'Others' },
            ],
            openD: false,
            valueD: '',
            itemsD: [
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

        this.setValueG = this.setValueG.bind(this);
        this.setOpenG = this.setOpenG.bind(this);
        this.setItemsG = this.setItemsG.bind(this);

        this.setValueD = this.setValueD.bind(this);
        this.setOpenD = this.setOpenD.bind(this);
        this.setItemsD = this.setItemsD.bind(this);
    }

    setOpen(open) {
        this.setState({
            open
        });

        this.setState({
            openG: false
        });

        this.setState({
            openD: false
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


    // GENDER
    setOpenG(openG) {
        this.setState({
            openG
        });

        this.setState({
            open: false
        });

        this.setState({
            openD: false
        });
    }
    
    setValueG(callback) {
        this.setState(state => ({
            valueG: callback(state.valueG)
        }));
    }
    
    setItemsG(callback) {
        this.setState(state => ({
            itemsG: callback(state.itemsG)
        }));
    }
    // GENDER


    // Disrict
    setOpenD(openD) {
        this.setState({
            openD
        });

        this.setState({
            open: false
        });

        this.setState({
            openG: false
        });
    }
    
    setValueD(callback) {
        this.setState(state => ({
            valueD: callback(state.valueD)
        }));
    }
    
    setItemsD(callback) {
        this.setState(state => ({
            itemsD: callback(state.itemsD)
        }));
    }
    // District


    render(){
        const addRequest = (values) => {
            const request = {
                name: values.name,
                sirname: values.sirname,
                age: values.age,
                district: this.state.valueD,
                blood: this.state.value,
                mobile: values.mobile,
                sex: this.state.valueG,
                positive: this.state.pdate,
                negative: this.state.ndate,
                agreement: values.agreement,
            }

            // console.log(request);

            axios.post('https://covidtrackerapi.herokuapp.com/doner/add', request)
                .then(
                    Alert.alert('Submitted', "You've succefully posted your request.", [
                        {text: 'Done', onPress: () => console.log('Alert Closed')}
                    ])
                )
                .catch(err => request.status(400).json('Error: ' + err));
        }

        const { open, value, items } = this.state;
        const { openG, valueG, itemsG } = this.state;
        const { openD, valueD, itemsD } = this.state;
        DropDownPicker.setListMode("SCROLLVIEW");
        DropDownPicker.setTheme("DARK");

        return(
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={styles.scrollView}
            >
            <View>
                <Formik
                    initialValues={{ agreement: '', district: this.state.valueD, blood: this.state.value, mobile: '', name: '', sirname: '', gender:  this.state.valueG, age: '' }}
                    validationSchema={requestSchema}
                    onSubmit={(values, actions) => {
                        // console.log(values);
                        addRequest(values);
                        actions.resetForm();

                        var today = new Date();
                        var dd = String(today.getDate()).padStart(2, '0');
                        var mm = String(today.getMonth() + 1).padStart(2, '0');
                        var yyyy = today.getFullYear();
                        today = dd + '-' + mm + '-' + yyyy;
                        this.setState({
                            // value: '',
                            pdate: today,
                            ndate: today,
                        });

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
                            
                            <DropDownPicker
                                onChangeValue={props.handleChange('blood')}
                                placeholder="Select Blood Group"
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
                                zIndex={100000}
                            />
                            <Text style={styles.errorText}>{props.touched.blood && props.errors.blood}</Text>

                            <DropDownPicker
                                onChangeValue={props.handleChange('district')}
                                placeholder="Select District"
                                open={openD}
                                value={valueD}
                                items={itemsD}
                                setOpen={this.setOpenD}
                                setValue={this.setValueD}
                                setItems={this.setItemsD}
                                style={{marginBottom: 5,}}
                                itemSeparator={true}
                                placeholderStyle={{
                                    fontWeight: "bold"
                                }}
                                zIndex={10000}
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

                            <DropDownPicker
                                onChangeValue={props.handleChange('gender')}
                                placeholder="Select Gender"
                                open={openG}
                                value={valueG}
                                items={itemsG}
                                setOpen={this.setOpenG}
                                setValue={this.setValueG}
                                setItems={this.setItemsG}
                                style={{marginBottom: 5,}}
                                itemSeparator={true}
                                placeholderStyle={{
                                    fontWeight: "bold"
                                }}
                            />
                            <Text style={styles.errorText}>{props.touched.gender && props.errors.gender}</Text>

                            <OutlinedTextField
                                label="Self Declaration Statement"
                                style={styles.inputMaterial}
                                onChangeText={props.handleChange('agreement')}
                                value={props.values.agreement}
                                baseColor='skyblue'
                                tintColor='orange'
                            />
                            <Text style={styles.errorText}>{props.touched.agreement && props.errors.agreement}</Text>
                            <Text style={{color: 'white', marginTop: -10, marginBottom: 20}}>Example/- I hereby declare that I am willing to donate plasma in the time of need</Text>

                            <View style={styles.dateContainer}>
                                <Text style={styles.datePickerLabel}>Got Positive on :</Text>
                                
                                <DatePicker
                                    showIcon={false}
                                    // androidMode="spinner"
                                    style={{ width: 150 }}
                                    date={this.state.pdate}
                                    mode="date"
                                    placeholder="DD/MM/YYYY"
                                    format="DD-MM-YYYY"
                                    maxDate={moment().format('DD-MM-YYYY')}
                                    confirmBtnText="OK"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateInput: {
                                            backgroundColor: 'white',
                                            borderWidth: 3,
                                            borderColor: 'orange',
                                        },
                                    }}
                                    onDateChange={(date) => {
                                        this.setState({ pdate: date });
                                    }}
                                />
                            </View>
                            
                            <View style={styles.dateContainer}>
                                <Text style={styles.datePickerLabel}>Got Negative on :</Text>
                                <DatePicker
                                    showIcon={false}
                                    // androidMode="spinner"
                                    style={{ width: 150 }}
                                    date={this.state.ndate}
                                    mode="date"
                                    placeholder="DD/MM/YYYY"
                                    format="DD-MM-YYYY"
                                    maxDate={moment().format('DD-MM-YYYY')}
                                    confirmBtnText="OK"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateInput: {
                                        backgroundColor: 'white',
                                        borderWidth: 3,
                                        borderColor: 'orange',
                                        },
                                    }}
                                    onDateChange={(date) => {
                                        this.setState({ ndate: date });
                                    }}
                                />
                            </View>

                            <View style={styles.gap}></View>

                            <Button style={styles.submitBtn} title='Submit Request' color='maroon' onPress={props.handleSubmit} />
                        </View>
                        
                    )}
                </Formik>
            </View>
            <StatusBar style="light" hidden={false} backgroundColor="black" />
            </ScrollView>
        );
    };
}

const styles = StyleSheet.create({
    form: {
        marginTop: 20,
        marginBottom: 20,
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
    dateContainer: {
        flexDirection: 'row',
        backgroundColor: '#0A111A',
        padding: 20,
        justifyContent: 'space-between'
    },
    datePickerLabel: {
        color: 'skyblue',
        textAlign: 'left',
        fontSize: 20,
        marginTop: 5,
        marginRight: 12,
        // marginLeft: 10,
    },
    gap : {
        marginBottom: 20,
    },
    inputMaterial: {
        marginTop: 20,
        color: 'yellow'
    },
    datePicker: {
        width: '50%',
        alignContent: 'center',
        color: 'skyblue',
        borderColor: 'skyblue',
        marginBottom: 20,
    }
});