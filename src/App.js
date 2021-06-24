import Navbar from "./component/Navbar";
import Todos from "./component/Todos";
import ToggleTheme from "./component/ToggleTheme";
import ThemeConTextProvider from './context/ThemeContext';
import TodoContextProvider from './context/TodoContext'
import AuthContextProvider from './context/AuthContext'


function App() {
  return (
    <div className="App">
      <ThemeConTextProvider>
        <AuthContextProvider>


          <Navbar />
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        </AuthContextProvider>
        <ToggleTheme />

      </ThemeConTextProvider>

    </div>
  );
}

export default App;
