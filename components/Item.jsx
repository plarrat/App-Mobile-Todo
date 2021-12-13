import React from "react"
import { Text, Button } from "react-native"

export default function Item({ todo, todos, setTodos, index }) {
  const deleteTodo = () => {
    let tmp = [...todos]
    tmp.splice(index, 1)
    setTodos(tmp)
  }
  return (
    <Text>
      {todo} <Button title="Ajouter une Todo" onPress={deleteTodo} />
    </Text>
  )
}
