import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense>
				{/* <Routes> */}
				{/* </Routes> */}
			</Suspense>
		</BrowserRouter>
	)
}
