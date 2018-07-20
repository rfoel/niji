import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from '.'

storiesOf('Link', module)
  .add('default', () => <Link href="https://github.com/rfoel/niji">Niji</Link>)
  .add('reverse', () => (
    <Link href="https://github.com/rfoel/niji" reverse>
      Niji
    </Link>
  ))
  .add('another palette', () => (
    <Link href="https://github.com/rfoel/niji" palette="secondary">
      Niji
    </Link>
  ))
