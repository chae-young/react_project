import "./App.css";
import CounterScreen from "./components/CounterScreen";
import CounterProvider from "./contexts/CounterProvider";



function App() {
	return (
		<CounterProvider>
			<CounterScreen/>
		</CounterProvider>
	);
}

export default App;
