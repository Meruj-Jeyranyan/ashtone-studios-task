import AppRoute from "route/AppRoute";
import Layout from "components/layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <AppRoute />
      </Layout>
    </div>
  );
}

export default App;
