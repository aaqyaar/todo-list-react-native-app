import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput, Button, Snackbar } from "react-native-paper";

const Form = ({ onSaveTodo }) => {
  const [todo, setTodo] = useState("");
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const handleSaveTodo = () => {
    if (todo.length > 0) {
      onSaveTodo(todo);
      setTodo("");
    } else {
      onToggleSnackBar();
    }
  };

  return (
    <View>
      <View style={styles.form}>
        <TextInput
          mode="outlined"
          type="text"
          label="Todo"
          style={styles.input}
          value={todo}
          maxLength={50}
          right={<TextInput.Affix text={`${todo.length}/50`} />}
          onChangeText={(text) => setTodo(text)}
        />
        {/* <Text style={styles.error}>{error && "Todo Cannot be Empty"}</Text> */}
        <Button
          onPress={() => handleSaveTodo()}
          style={styles.btn}
          mode="contained"
        >
          Add
        </Button>
      </View>
      <View style={styles.container}>
        <Snackbar
          style={styles.snackbar}
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            icon: "cancel",
          }}
        >
          Todo Cannot be Empty
        </Snackbar>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  input: {
    width: "80%",
  },

  form: {
    marginTop: "2%",
    maxWidth: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  snackbar: {
    height: "100%",
    fontSize: 30,
    backgroundColor: "red",
  },
  btn: {
    padding: "2.5%",
    fontSize: "1.5rem",
    marginLeft: "0.8%",
    marginTop: "1%",
  },
});
