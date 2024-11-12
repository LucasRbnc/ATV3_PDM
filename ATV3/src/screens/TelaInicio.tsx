import React, { useEffect, useState } from "react";
import { View,Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
    navigation: any;
}

const TelaInicio: React.FC<Props> = ({navigation}) => {
    const [mostraInicio, setMostraInicio] = useState(true);

    useEffect(() =>{
        const timer = setTimeout(() => {
            setMostraInicio(false);
            navigation.replace('Drawer')
        }, 10000)

        return () => clearTimeout(timer);
    }, [])

    const handlePress = () =>{
        setMostraInicio(false);
        navigation.replace('Drawer')
    }

    if(!mostraInicio) return null;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bem-Vindo</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>Iniciar</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        alignSelf: "center",
        marginBottom: 16,
        fontWeight: "bold"
    },
    button:{
        backgroundColor: "#4287f5",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 25,
        width: 250,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 16,
        fontWeight: "bold", 
}
})
export default TelaInicio;