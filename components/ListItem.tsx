import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'
import { Users } from '../interfaces'

type Props = {
  data: Users
}

const ListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
