import { create } from 'zustand'

export const playersStore = create<{
	selection: number[]
	add: (id?: number) => void
	remove: (targetId: number) => void
}>((set) => ({
	selection: [],

	add: (id?: number) =>
		set((state) => {
			if (!id || state.selection.includes(id)) return state

			return { selection: [...state.selection, id] }
		}),

	remove: (targetId: number) =>
		set((state) => ({
			selection: state.selection.filter((id) => id !== targetId),
		})),
}))
