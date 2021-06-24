import * as React from 'react'
import ListItem from './ListItem'
import { User } from '../interfaces'
import { Users } from '../interfaces'

type Props = {
  items: Users[]
}

const List = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
