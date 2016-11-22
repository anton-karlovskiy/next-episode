import React from 'react'

// Components
import Link from 'next/link'
import { Button, Space } from 'rebass'

function Navigation ({ url, page }) {
  return (
    <div>
      {page > 1 && (
        <Link href={`${url}${page - 1}`}>
          <Button>Previous</Button>
        </Link>
      )}
      {page > 1 && (
        <Space x={3} />
      )}
      <Link href={`${url}${(page || 1) + 1}`}>
        <Button>Next</Button>
      </Link>
    </div>
  )
}

Navigation.propTypes = {
  url: React.PropTypes.string,
  page: React.PropTypes.number.isRequired
}

export default Navigation
