import Link from 'next/link'

import { formatTitle } from '@happyorg/shared/utils'

export function Index() {

  return (
    <>
      <h1> { formatTitle('Shop!') } </h1>
      <Link href="/about">About</Link>
    </>
  );
}

export default Index;
