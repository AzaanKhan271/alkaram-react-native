import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"






const SignUp = () => {
    return (
        <KeyboardAvoidingView
            behavior="height"
            style={styles.container}
            keyboardVerticalOffset={64}
        >
            <ScrollView style={styles.signUpParent}>
                <View>
                    <Text>
                        Sign Up Form
                    </Text>
                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    signUpParent : {
        flex : 1,
        // backgroundColor : 'yellow'
        paddingLeft : 30,
    },
})

export default SignUp