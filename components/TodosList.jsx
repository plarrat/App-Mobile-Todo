import React, { useState } from "react"
import { FlatList } from "react-native"
import Item from "./Item"

export default function TodosList({ todos, setTodos }) {
  const renderItem = ({ item, index }) => (
    <Item todo={item} todos={todos} setTodos={setTodos} index={index} />
  )

  return <FlatList data={todos} renderItem={renderItem} />
}
