import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Main from "./src/components/Main";

export default function App() {
  const [todos, setTodos] = useState([]);

  const handleSaveTodo = (todo) => {
    if (todo.length > 0) {
      const _id = Math.random().toString(36).substr(2, 9);
      const newTodo = { _id, todo };
      setTodos((prevTodo) => {
        return [...prevTodo, { ...newTodo }];
      });
    } else {
      alert("Todo Cannot be empty");
    }
  };
  const handleDeleteTodo = (_id) => {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo._id !== _id);
    });
  };

  return (
    <View style={styles.container}>
      <Main
        onSaveTodo={handleSaveTodo}
        onDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 60,
    maxWidth: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
