import "./App.css";

function Header() {
  return <header>Header</header>;
}

function MainContent() {
  return (
    <main>
      <Section />
    </main>
  );
}

function Section() {
  return (
    <>
      <h1>Head</h1>
      <p>section txts</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vel
        saepe dolores officiis eaque! Hic, repellat repellendus ea voluptatibus
        molestiae nihil, tempora aliquid debitis quis quibusdam placeat,
        voluptate ipsam dolore.
      </p>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <p>2026</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <MainContent>
        <Section />
      </MainContent>
      <Footer />
    </>
  );
}
export default App;
