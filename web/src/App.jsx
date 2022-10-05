export function App() {
  return (
    <div className="h-screen bg-red-700 text-white flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      <div className="md:flex-1">
        <img src="/img/photo.png" alt="Foto" className="w-full"/>
      </div>
      <div className="md:flex-1 flex flex-col space-y-6">
        <h1 className="text-3xl text-center font-bold">Dê o seu palpite na Copa do Mundo do Catar 2022!</h1>
        <button className="text-red-700 bg-white text-xl px-8 py-4 rounded-xl">
          Criar minha conta
        </button>
        <button className="text-white border border-white text-xl px-8 py-4 rounded-xl">
          Fazer login
        </button>
      </div>
    </div>
  )
}