import './estilo/output.css';
import './estilo/tailwind.css';

const App = () => {
  return (
    <div className="min-h-screen bg-custom-dark text-white flex flex-col justify-between">
      <div className="flex flex-1">
        <div className="w-1/4 p-4 flex flex-col items-center">
          <div className="mb-4">
            <img src="work.png" alt="Profile" className="w-80" />
          </div>
          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold mb-2">Minhas Stacks 🎯</h2>
            <ul className="list-disc list-outside">
              <li>REACT</li>
              <li>TYPESCRIPT</li>
              <li>NODE.JS</li>
              <li>JAVASCRIPT</li>
              <li>API-REST</li>
              <li>MYSQL</li>
            </ul>
          </div>
        </div>
        <div className="w-3/4 p-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">Experiência 📶</h2>
            <ul className="list-disc list-inside">
              <li>NEW WAY - Service Desk</li>
              <li>HCOSTA - Recuperador de Crédito</li>
              <li>IMECA - Auxiliar de Almoxarifado</li>
              <li>SERVIMED - Conferente</li>
            </ul>
          </div>
          <br />
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Formação 🎓</h2>
            <ul className="list-disc list-inside">
              <li>Análise e Desenvolvimento de Sistemas (ITE)</li>
              <li>Desenvolvedor Fullstack (SENAC)</li>
            </ul>
          </div>
          <br />
          <p>
            Valorizo a fé e a família. ‍‍‍ Acredito que o equilíbrio entre vida pessoal e profissional é fundamental para o sucesso. ⚖️
            Meus Hobbies:
            Tocar guitarra
            Assistir filmes
            Sair para comer
          </p>
        </div>
      </div>
      <footer className="p-4 bg-gray-800 text-white flex justify-between items-center">
        <div>
          <p className="text-sm">hiago.hizu@gmail.com</p>
          <p className="text-sm">Entre em contato comigo</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://wa.me/+5514988365367" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/48/000000/whatsapp.png" alt="WhatsApp" className="w-6 h-6"/>
          </a>
          <a href="mailto:ohugodev@outlook.com">
            <img src="https://img.icons8.com/fluent/48/000000/email.png" alt="Email" className="w-6 h-6"/>
          </a>
          <a href="https://github.com/hugosbss?tab=repositories" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/48/000000/github.png" alt="GitHub" className="w-6 h-6"/>
          </a>
          <a href="https://www.linkedin.com/in/hugo-wg-silva23?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/48/000000/linkedin.png" alt="LinkedIn" className="w-6 h-6"/>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;