import styles from "./App.module.scss";
import NavBar from "./components/navbar/navBar";
function App() {
  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <h1>Flexi Weather Start</h1>
      </div>
    </>
  );
}

export default App;
