import React from 'react'

type Props = {
    title: string
    children?: React.ReactNode
}

export const Tab: React.FC<Props> = ({ children }) => {
    return <div>{children}</div>
}
