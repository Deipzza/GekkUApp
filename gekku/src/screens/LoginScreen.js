import React, { useState } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Login from "../components/Login";

const functions = [
  "Consultar tu historia académica",
  "Visualizar de manera interactiva tu progreso académico",
  "Llevar registro de tus notas",
  "Asignar recordatorios y alertas",
  "Visualizar los horarios de las rutas intercampus"
]

const LoginScreen = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  
  const [count, setCount] = useState(0);

  // const [token, ] = useContext(UserContext);

  const changeText = () => count >= functions.length - 1 ? setCount(0) : setCount(count + 1);

  // const login = async () => {
  //   const requestOptions = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   };

  //   const response = await fetch("/api/student")
  // }

  return (
    <View style={loginStyles.container}>
      <StatusBar style="auto" />

      <Image style={loginStyles.image} source={require("../../assets/icon.png")} />
      <Text style={loginStyles.name}>GekkU</Text>
      <Text style={loginStyles.description}>
        ¡Bienvenido a GekkU! Tu aplicación de confianza para el manejo de tu
        información académica y otra información relevante. Aquí podrás:
      </Text>

      <TouchableOpacity onPress={changeText} style={loginStyles.card}>
        <Text style={loginStyles.textCard}>{functions[count]}</Text>
      </TouchableOpacity>

      <View style={loginStyles.line} />

      <Text style={loginStyles.text}>Inicia sesión con tu cuenta del SIA</Text>
      <Login />
      {/* <View style={loginStyles.inputView}>
        <TextInput
          style={loginStyles.textInput}
          placeholder="Usuario (sin @unal.edu.co)"
          placeholderTextColor="#8B8B8B"
          onChangeText={(user) => setUser(user)}
        /> 
      </View> 
      <View style={loginStyles.inputView}>
        <TextInput
          style={loginStyles.textInput}
          placeholder="Contraseña"
          placeholderTextColor="#8B8B8B"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>
      <View style={loginStyles.checkboxContainer}>
        <CheckBox
          disabled={false}
          value={isSelected}
          onValueChange={setSelection}
          style={loginStyles.checkbox}
        />
        <Text style={loginStyles.label}>Recordar contraseña</Text> 
      </View>
      <TouchableOpacity style={loginStyles.loginBtn}>
        <Text style={loginStyles.loginText}>Iniciar sesión</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={[loginStyles.loginBtn, loginStyles.login2Btn]}>
        <Text style={loginStyles.loginText}>Iniciar sin conexión</Text> 
      </TouchableOpacity>  */}
    </View> 
  );
}

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D0D0D0",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 20,
    width: "35%",
    height: "16%",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: "5%"
  },
  description: {
    width: "85%",
    marginBottom: "2%",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
  card: {
    width: "70%",
    height: 60,
    justifyContent: "center",
    backgroundColor: "#2D5C44",
    borderRadius: 10,
  },
  textCard: {
    width: "100%",
    margin: "1%",
    padding: "2%",
    fontSize: 16,
    color: "#FFF",
    textAlign: "center",
  },
  line: {
    width: "85%",
    margin: "2%",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    borderStyle: "dashed",
  },
  text: {
    fontSize: 19,
    fontWeight: "600",
    // marginBottom: 4,
    textAlign: "center",
  },
});

export default LoginScreen;
