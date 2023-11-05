import { StyleSheet, View, TextInput, Text, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
// Formik npm i formik
import { useFormik } from "formik";
// Package validation YUP    npm i yup
import * as Yup from "yup";

const register = () => {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("required"),
      // .max(25, " Must be 25 character or less")

      password: Yup.string().required("required").min(8),
        // .max(15, " Must be 15 character or less")
    }),
    onSubmit: () => {
      alert('button fonction')
    },
    
  });

  // Formik kar nemi kard  baray test as  clickhand estefadekardam
  const clickHand = () => {
    navigation.replace('Home')
    // alert('Click ca fonction')
  }

  return (
    <View style={styles.wrapper}>

      {/* EMAIL */}

      <View style={styles.textInput}>
        <TextInput
          placeholder="Email"
          placeholderTextColor='#444'
          textContentType="emailAddress"
          autoFocus={true}
          autoCapitalize="none"
          value={formik.values.email}
          onChange={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
        />
      </View>
      {formik.touched.email && formik.values.email ? (
          <Text style={{ color: "red" }}>{formik.errors.email}</Text>
        ) : null}




{/* PASSWORD */} 


      <View style={styles.textInput}>
        <TextInput
          placeholder="Password"
          placeholderTextColor='#444'
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password" 
          value={formik.values.password}
          onChange={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
        />
      </View>
      {formik.touched.password && formik.values.password ? (
          <Text style={{ color: "red" }}>{formik.errors.password}</Text>
        ) : null}

      <Pressable  onPress={formik.handleSubmit} style={styles.button}   >
        <Text style={styles.textButton}>Log in</Text>
      </Pressable>
      <Pressable onPress={clickHand} >
        <Text>Click</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
 
  wrapper: {
    marginTop:30,
    width:'90%'
  },
  textInput:{
    borderWidth:1,
    borderRadius:5,
    padding:12,
    backgroundColor:'#fafafa',
    marginBottom:30,
  },
  button: {
    backgroundColor:'#0096f6',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:4,
    padding:7,
  },
  textButton: {
    color:'#fff',
    minHeight:30,
    fontSize:20,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default register;
