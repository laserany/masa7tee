import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import SafeSpaceSpecificationsMainPage from './SafeSpaceSpecificationsMainPage'
import SafeSpaceSpecificationsPicturesPage from './SafeSpaceSpecificationsPicturesPage'

const SafeSpaceSpecificationsPage = () => {
  let match = useRouteMatch({ path: '/safe-space-specifications', exact: true })
  const [safeSpaceNames, setSafeSpaceNames] = useState([])
  const [pictureNames, setPictureNames] = useState([])
  const [canUpload, setCanUpload] = useState(false)

  return match ? (
    <SafeSpaceSpecificationsMainPage
      safeSpaceNames={safeSpaceNames}
      setSafeSpaceNames={setSafeSpaceNames}
    />
  ) : (
    <SafeSpaceSpecificationsPicturesPage
      pictureNames={pictureNames}
      setPictureNames={setPictureNames}
      canUpload={canUpload}
      setCanUpload={setCanUpload}
    />
  )
}

export default SafeSpaceSpecificationsPage
