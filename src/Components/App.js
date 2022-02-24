import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Chats from "./Chats";
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/chats" element={<Chats />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
