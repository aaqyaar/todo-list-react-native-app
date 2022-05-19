import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton } from "react-native-paper";
const Todos = ({ todos, onDeleteTodo }) => {
  return (
    <View style={styles.list}>
      {todos.map((item, index) => (
        <View style={styles.todos} key={index}>
          <Text style={styles.todo}>{item.todo}</Text>
          <IconButton
            icon="delete"
            color="purple"
            onPress={(_id) => onDeleteTodo(item._id)}
          />
        </View>
      ))}
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({
  list: {
    maxWidth: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: "4%",
  },
  todo: {
    padding: "2%",
    fontSize: 20,
    fontFamily: "sans-serif",
  },
  todos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "1%",
    width: "100%",
    flexWrap: "wrap",
  },
});
