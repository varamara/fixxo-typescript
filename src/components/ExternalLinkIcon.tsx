import React from 'react'

interface ExternalLinkProps {
    link: string
    icon: string
}

const ExternalLinkIcon: React.FC<ExternalLinkProps>= ({link, icon}) => {
  return (
    <a href={link} target="_blank">
      <i className={icon}></i>
    </a>
  )
}

export default ExternalLinkIcon