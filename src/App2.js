import React, { useState } from 'react'

export default function App2() {
  const [flag, setflag] = useState(1);
  return (
    <div>
      <button>posts</button>
      <button>Feeds</button>
      <Container/>
    </div>
  )
}
