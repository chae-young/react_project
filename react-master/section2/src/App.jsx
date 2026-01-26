import "./App.css";
import LostAndFoundDesk from "./components/LostAndFoundDesk";
import { NoticeBoard } from "./components/NoticeBoard";
import { CenterProvider } from "./contexts/centerContext";


function App() {
	return (
		<>
			<NoticeBoard/>
			<CenterProvider>
				<LostAndFoundDesk/>
			</CenterProvider>
		</>
	);
}

export default App;
