import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState} from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native'
import { auth } from '../firebase'

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] =useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })

        return unsubscribe
    }, [])

    const home = () => {
        navigation.navigate("Home")
    }

    const alertSystem = (email) => {
        if(email != '' && password != ''){
            navigation.navigate("Home")
        } else {
            Alert.alert('Atencion', 'Llena todos los campos', [{text: 'OK'}])
        }
    }


   /* const handleSingUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registrado con:',user.email);
            })
            .cath(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassWord(email, password)
            .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Inicio sesión con;', user.email);
        })
        .catch(error => alert(error.message))
    }

    */
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.image}>
                <Image style={styles.image} source={require('../assets/cat.png')}/>
            </View>

            <View style={styles.inputContainer}> 
                <TextInput
                    placeholder="Email"
                    value = {email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value = {password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={alertSystem}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
    }, 
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText:{
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
    },
    image: {
        width: 200,
        height: 200,
    }
})

