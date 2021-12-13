import React, { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button } from "react-native"

export default function InputTodo({ todos, setTodos }) {
  const [inputTodo, setInputTodo] = useState("")
  const addTodo = () => {
    if (inputTodo.trim().length > 0) {
      let tmp = [...todos]
      tmp.push(inputTodo)
      setTodos(tmp)
      setInputTodo("")
    }
  }

  return (
    <View>
      <View>
        <Text>Saisir une Todo</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={inputTodo}
          onChangeText={setInputTodo}
          placeholder="Ex : Suivre le cours"
        />

        <Button title="Ajouter une Todo" onPress={addTodo} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
