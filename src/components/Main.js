import React, { Fragment } from "react";
import { Title } from "react-native-paper";
import Form from "./Form";
import Todos from "./Todos";

const Main = ({ onSaveTodo, onDeleteTodo, todos }) => {
  return (
    <Fragment>
      <Title
        style={{
          fontSize: 23,
          fontWeight: "bold",
        }}
      >
        Add Your Tasks In Todo Application
      </Title>
      <Form onSaveTodo={onSaveTodo} />
      <Todos todos={todos} onDeleteTodo={onDeleteTodo} />
    </Fragment>
  );
};

export default Main;
