import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div className="grid">
      <Sidebar />
      <div className="grid">
        {/* Conteúdo principal da página */}
      </div>
    </div>
  );
}

export default App;
