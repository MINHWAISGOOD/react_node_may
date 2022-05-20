import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './component/Header';
import Main from './component/Main';
import List from './component/List';
import Post from './component/Post';

function App() {
	const [list, setList] = useState([]);

	useEffect(() => {
		console.log(list);
	}, [list]);

	return (
		<>
			<Header />

			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/list' element={<List />}></Route>
				<Route
					path='/post'
					element={<Post list={list} setList={setList} />}></Route>
			</Routes>
		</>
	);
}

export default App;
