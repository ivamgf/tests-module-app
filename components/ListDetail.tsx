import * as React from 'react'

import { User } from '../interfaces'
import { Users } from '../interfaces'

type ListDetailProps = {
  item: Users
}

const ListDetail = ({ item: users }: ListDetailProps) => (
  <div>
    <h1>Detail for {users.name}</h1>
    <p>ID: {users.id}</p>
  </div>
)

export default ListDetail
