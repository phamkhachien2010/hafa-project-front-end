import { Card } from 'antd'
import React from 'react'

export default function Homepage() {
  return (
    <div className='w-4/5 m-auto'>
      <div className="grid grid-cols-2 gap-2">
        <div className='mb-5'>
          <Card title="Card title" >
            Card content
          </Card>
        </div>

        <div>
          <Card title="Card title" >
            Card content
          </Card>
        </div>

        <div>
          <Card title="Card title" >
            Card content
          </Card>
        </div>

        <div>
          <Card title="Card title" >
            Card content
          </Card>
        </div>
      </div>
    </div>
  )
}
