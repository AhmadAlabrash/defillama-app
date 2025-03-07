import * as React from 'react'
import styled from 'styled-components'
import { Menu } from '~/components/DropdownMenu'
import HeadHelp from '~/components/HeadHelp'

const Audits = styled.section`
	display: flex;
	align-items: center;
	gap: 8px;
`

interface IProps {
	audits: number | string
	auditLinks: string[]
	color?: string
}

const AuditInfo = ({ audits, auditLinks = [], color, ...props }: IProps) => {
	return (
		<Audits {...props}>
			<HeadHelp title="Audits" text="Audits are not a guarantee of security." />
			<span>:</span>
			{audits > 0 ? <Menu name="Yes" options={auditLinks} color={color} isExternal /> : <span>No</span>}
		</Audits>
	)
}

export default AuditInfo
