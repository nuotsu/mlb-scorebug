import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function count(
	value: number,
	singular: string = 'item',
	plural?: string,
) {
	return `${value || 0} ${value === 1 ? singular : plural || singular + 's'}`
}

export const dev = process.env.NODE_ENV === 'development'
