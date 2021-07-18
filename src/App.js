import TextEditor from "./TextEditor"
import EditorWrapper from "./EditorWrapper"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
import ThemeContextProvider from "./ThemeContext"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id">
          <ThemeContextProvider>
            <EditorWrapper />
          </ThemeContextProvider>
          {/* <TextEditor /> */}
        </Route>
      </Switch>
    </Router>
  )
}

export default App
