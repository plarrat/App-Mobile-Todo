import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  Button,
  Alert,
  FlatList,
} from "react-native"
import InputTodo from "./components/InputTodo"
import TodosList from "./components/TodosList"

export default function App() {
  const [todos, setTodos] = useState([])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputTodo todos={todos} setTodos={setTodos} />
      <View>
        <TodosList todos={todos} setTodos={setTodos} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
