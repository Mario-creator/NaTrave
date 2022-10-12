const Input = ({name, label, ...props }) => (
    <div className="flex flex-col">
        <label className="text-sm font-bold text-gray-500 mb-2" htmlFor={name}>{label}</label>
        <input className="p-3 border border-gray-700 rounded-xl" {...props} name={name} id={name}/>
    </div>
)

export const Login = () => {
    return (
        <div>
             <header className="container max-w-5xl p-4 flex justify-center border-b border-red-300">
                <img src="/img/logo-fundo-branco.svg" className="w-32 md:w-40"/>
            </header>
            <main className="p-4">
                <div className="p-4">
                    <h2 className="text-xl font-bold">Entre na sua conta</h2>
                </div>
                <form className="space-y-6">
                    <Input
                        type="email"
                        name="email"
                        label="Seu e-mail"
                        placeholder="Digite seu e-mail" 
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Sua senha"
                        placeholder="Digite sua senha" 
                    />
                </form>
            </main>
        </div>
    )
}