'use client'

import { useMemo, useRef, useState } from 'react'
import { playersStore } from './store'
import { VscSearch } from 'react-icons/vsc'

export default function SelectPlayer({ players }: { players: MLB.Player[] }) {
	const { selection, add, remove } = playersStore()
	const [$query, set$query] = useState('')
	const inputRef = useRef<HTMLInputElement>(null)

	const getPlayerId = useMemo(
		() => (player?: number | string) =>
			!!player ? players?.find((p) => p.fullName === player)?.id : undefined,
		[players],
	)

	return (
		<fieldset>
			<legend>Select a player</legend>

			<label className="flex items-stretch gap-1">
				<VscSearch className="m-auto" />

				<input
					ref={inputRef}
					className="grow"
					type="search"
					list="players-list"
					placeholder="Search"
					onKeyUp={(e) => {
						const playerId = getPlayerId(e.currentTarget.value)

						if (e.key === 'Enter' && !!playerId) {
							add(playerId)
							e.currentTarget.value = ''
						} else {
							set$query(e.currentTarget.value)
						}
					}}
				/>

				<datalist id="players-list">
					{players
						?.filter((player) => !selection?.includes(player.id))
						?.map((player) => (
							<option key={player.id}>{player.fullName}</option>
						))}
				</datalist>

				<button
					className="action"
					onClick={() => {
						const playerId = getPlayerId(inputRef.current?.value)

						if (playerId && inputRef.current) {
							add(playerId)
							inputRef.current.value = ''
						}
					}}
					disabled={!$query}
				>
					Add
				</button>
			</label>

			<menu className="flex flex-wrap gap-1">
				{selection?.map((id) => (
					<button
						className="pill shink-0 text-xs"
						onClick={() => remove(id)}
						key={id}
					>
						{players?.find((p) => p.id === id)?.fullName}
					</button>
				))}
			</menu>
		</fieldset>
	)
}
