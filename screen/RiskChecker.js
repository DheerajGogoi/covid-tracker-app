import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Keyboard, TouchableWithoutFeedback, ScrollView, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { TextField, FilledTextField, OutlinedTextField } from 'rn-material-ui-textfield';
import { Formik } from 'formik';
import * as yup from 'yup';

const requestSchema = yup.object({
    age: yup.string().required().test('valid age', "Please enter a valid age", (val) => {
        return parseInt(val) > 0;
    }),
});


export default function RiskChecker() {
    const [checkedT, setCheckedT] = useState('');
    const [checkedG, setCheckedG] = useState('');
    
    const [cough, setCough] = useState(false);
    const [fever, setFever] = useState(false);
    const [breathing, setBreathing] = useState(false);
    const [none1, setNone1] = useState(false);
    
    const [diabetes, setDiabetes] = useState(false);
    const [hypertension, setHypertension] = useState(false);
    const [lung, setLung] = useState(false);
    const [heart, setHeart] = useState(false);
    const [none2, setNone2] = useState(false);

    const [risk, setRisk] = useState('Low');
    const [recommend, setRecommend] = useState('Not Recommended');
  

    return (
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
            // console.log('Keyboard Dismissed');
        }}>
            <ScrollView style={styles.container}>

                <Formik
                    initialValues={{ age: '' }}
                    validationSchema={requestSchema}
                    onSubmit={(values, actions) => {

                        var a,b,j;
                        console.log(checkedT)
                        if(checkedT == 'fever-temp') {
                            a = true;
                            b = false;
                            j = false;
                        } else if(checkedT == 'highfever-temp') {
                            b = true;
                            a = false;
                            j = false;
                        } else if (checkedT == 'normal-temp') {
                            j = true;
                            a = false;
                            b = false;
                        }

                        console.log(a+" "+b+" "+j);

                        var c = cough;
                        var d = fever;
                        var e = breathing;
                        var f = diabetes;
                        var g = hypertension;
                        var h = lung;
                        var i = heart;
                        var k = none1;
                        var l = none2;

                        if(((a||b)&&(c&&f))||((a||b)&&(c&&g))||((a||b)&&(c&&h))||((a||b)&&(c&&i))||((a||b)&&(d&&f))||((a||b)&&(d&&g))||((a||b)&&(d&&h))||((a||b)&&(d&&i))||((a||b)&&(e&&f))||((a||b)&&(e&&g))||((a||b)&&(e&&h))||((a||b)&&(e&&i))){
                            setRisk('High');
                            setRecommend('Highly Recommended');
                        }
                        else if(((a||b)||(c&&f))||((a||b)||(c&&g))||((a||b)||(c&&h))||((a||b)||(c&&i))||((a||b)||(d&&f))||((a||b)||(d&&g))||((a||b)||(d&&h))||((a||b)||(d&&i))||((a||b)||(e&&f))||((a||b)||(e&&g))||((a||b)||(e&&h))||((a||b)||(e&&i))||((a||b)&&(c||f))||((a||b)&&(c||g))||((a||b)&&(c||h))||((a||b)&&(c||i))||((a||b)&&(d||f))||((a||b)&&(d||g))||((a||b)&&(d||h))||((a||b)&&(d||i))||((a||b)&&(e||f))||((a||b)&&(e||g))||((a||b)&&(e||h))||((a||b)&&(e||i))){
                            setRisk('Medium');
                            setRecommend('Recommended');
                        }
                        else{
                            setRisk('Low');
                            setRecommend('Not Recommended');
                        }

                        // console.log(risk);
                        // console.log(recommend);

                        if(checkedG == '') {
                            Alert.alert('Error', "Please select your gender", [{text: 'CLose', onPress: () => console.log('Alert Closed')}
                            ])
                        } else {
                            Alert.alert('Checked', "Your Health risk is "+risk+", and your need of COVID test is "+recommend, [{text: 'Ok', onPress: () => console.log('Alert Closed')}
                            ])
                        }
                        
                        setCheckedG('');
                        setCheckedT('');
                        setCough(false);
                        setFever(false);
                        setBreathing(false);
                        setNone1(false);
                        setDiabetes(false);
                        setHypertension(false);
                        setLung(false);
                        setHeart(false);
                        setNone2(false);

                        actions.resetForm();
                    }}
                >
                    {(props) => (
                        
                        <View style={styles.form}>

                            <OutlinedTextField
                                keyboardType='numeric'
                                label="Enter Age (in years)"
                                style={styles.inputMaterial}
                                onChangeText={props.handleChange('age')}
                                value={props.values.age}
                                baseColor='skyblue'
                                tintColor='orange'
                            />
                            <Text style={styles.errorText}>{props.touched.age && props.errors.age}</Text>

                            <View style={styles.genderContainer}>

                                <Text style={styles.label}>Gender:</Text>
                                <View style={styles.genderBox}>
                                    <RadioButton
                                        value="second"
                                        status={ checkedG === 'Male' ? 'checked' : 'unchecked' }
                                        onPress={() => setCheckedG('Male')}
                                    />
                                    <Text style={styles.paragraph}>Male</Text>
                                </View>
                                <View style={styles.genderBox}>
                                    <RadioButton
                                        value="second"
                                        status={ checkedG === 'Female' ? 'checked' : 'unchecked' }
                                        onPress={() => setCheckedG('Female')}
                                    />
                                    <Text style={styles.paragraph}>Female</Text>
                                </View>
                                <View style={styles.genderBox}>
                                    <RadioButton
                                        value="second"
                                        status={ checkedG === 'Others' ? 'checked' : 'unchecked' }
                                        onPress={() => setCheckedG('Others')}
                                    />
                                    <Text style={styles.paragraph}>Others</Text>
                                </View>
                            </View>

                            <View style={styles.tempContainer}>
                                <Text style={styles.label}>Your current body temparature in °F (Normal body Temperature is 98.6°F) :</Text>
                                <View style={styles.genderBox}>
                                    <RadioButton
                                        value="second"
                                        status={ checkedT === 'normal-temp' ? 'checked' : 'unchecked' }
                                        onPress={() => setCheckedT('normal-temp')}
                                    />
                                    <Text style={styles.paragraph}>Normal (96°F - 98.6°F)</Text>
                                </View>
                                <View style={styles.genderBox}>
                                    <RadioButton
                                        value="second"
                                        status={ checkedT === 'fever-temp' ? 'checked' : 'unchecked' }
                                        onPress={() => setCheckedT('fever-temp')}
                                    />
                                    <Text style={styles.paragraph}>Fever (98.6°F - 102°F)</Text>
                                </View>
                                <View style={styles.genderBox}>
                                    <RadioButton
                                        value="second"
                                        status={ checkedT === 'highfever-temp' ? 'checked' : 'unchecked' }
                                        onPress={() => setCheckedT('highfever-temp')}
                                    />
                                    <Text style={styles.paragraph}>High Fever (&#62; 102°F)</Text>
                                </View>
                            </View>


                            <View style={styles.healthContainer}>
                                <Text style={styles.label}>Are you experiencing any of these symptoms ? (check all that are applicable):</Text>
                                <View style={styles.healthBox}>
                                    <Checkbox
                                        style={styles.checkbox} value={cough} onValueChange={setCough}
                                        color='white'
                                    />
                                    <Text style={styles.paragraph}>Cough</Text>
                                </View>
                                <View style={styles.healthBox}>
                                    <Checkbox
                                        style={styles.checkbox} value={fever} onValueChange={setFever}
                                        color='white'
                                    />
                                    <Text style={styles.paragraph}>Fever</Text>
                                </View>
                                <View style={styles.healthBox}>
                                    <Checkbox
                                        style={styles.checkbox} value={breathing} onValueChange={setBreathing}
                                        color='white'
                                        
                                    />
                                    <Text style={styles.paragraph}>Difficulty in breathing</Text>
                                </View>
                                <View style={styles.healthBox}>
                                    <Checkbox
                                        style={styles.checkbox} value={none1} onValueChange={setNone1}
                                        color='white'
                                    />
                                    <Text style={styles.paragraph}>None of these</Text>
                                </View>
                            </View>

                            <View style={styles.problemContainer}>
                                <Text style={styles.label}>Have you ever had any of the following:</Text>
                                <View style={styles.problemBox}>
                                    <Checkbox
                                        style={styles.checkbox} value={diabetes} onValueChange={setDiabetes}
                                        color='white'
                                    />
                                    <Text style={styles.paragraph}>Diabetes</Text>
                                </View>
                                <View style={styles.healthBox}>
                                    <Checkbox
                                        style={styles.checkbox} value={hypertension} onValueChange={setHypertension}
                                        color='white'
                                    />
                                    <Text style={styles.paragraph}>Hypertension</Text>
                                </View>
                                <View style={styles.healthBox}>
                                    <Checkbox
                                        style={styles.checkbox} value={lung} onValueChange={setLung}
                                        color='white'
                                    />
                                    <Text style={styles.paragraph}>Lung diseases</Text>
                                </View>
                                <View style={styles.healthBox}>
                                    <Checkbox
                                        style={styles.checkbox} value={heart} onValueChange={setHeart}
                                        color='white'
                                    />
                                    <Text style={styles.paragraph}>Heart diseases</Text>
                                </View>
                                <View style={styles.healthBox}>
                                    <Checkbox
                                        style={styles.checkbox} value={none2} onValueChange={setNone2}
                                        color='white'
                                    />
                                    <Text style={styles.paragraph}>None of these</Text>
                                </View>
                            </View>

                            <Button title='Submit' color='maroon' onPress={props.handleSubmit} />

                        </View>
                        
                    )}
                </Formik>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#1c2732"
    },
    paragraph: {
        fontSize: 18,
        color: 'white'
    },
    healthBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    problemBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    genderBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    genderContainer: {
        marginBottom: 20,
    },
    tempContainer: {
        marginBottom: 20
    },
    healthContainer: {
        marginBottom: 20
    },
    problemContainer: {
        marginBottom: 20,
    },
    inputMaterial: {
        marginTop: 30,
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
    form: {
        marginTop: 10,
        marginBottom: 30,
    },
    label: {
        color: 'orange',
        marginLeft: 10,
        fontSize: 20,
        marginBottom: 4,
    }
});
