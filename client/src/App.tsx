import ContactList from "./components/ContactList/ContactList";
import Form from "./components/Form/Form";
import Provider from "./contexts/useContextProvider";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Provider>
          <Form />
          <ContactList />
        </Provider>
      </div>
    </div>
  );
}

export default App;
