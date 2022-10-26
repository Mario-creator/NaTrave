import axios from 'axios'
import { useFormik } from 'formik'
import * as yup from 'yup'

import { Icon, Input } from '~/components'

export const Signup = () => {
    const formik = useFormik({
        onSubmit: (values) => {
            console.log(values)
        },
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    })

    return (
        <div>
             <header className="p-4 border-b border-red-300">
                <div className="container flex justify-center max-w-xl">
                    <img src="/img/logo-fundo-branco.svg" className="w-32 md:w-40"/>
                </div> 
            </header>
            <main className="container max-w-xl p-4">
                <div className="p-4 flex space-x-4 items-center">
                    <a href="/">
                        <Icon name="back" className="h-6"/>
                    </a>
                    <h2 className="text-xl font-bold">Crie sua conta</h2>
                </div>
                <form className="p-4 space-y-6" onSubmit={formik.handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        label="Seu nome"
                        placeholder="Digite seu nome"
                        value={formik.values.name}
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />
                    <Input
                        type="text"
                        name="username"
                        label="Seu nome de usuário"
                        placeholder="Digite um nome de usuário" 
                        value={formik.values.username}
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />
                    <Input
                        type="email"
                        name="email"
                        label="Seu e-mail"
                        placeholder="Digite seu e-mail" 
                        value={formik.values.email}
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Sua senha"
                        placeholder="Digite sua senha" 
                        value={formik.values.password}
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                    />

                    <button type='submit' className="block w-full text-center text-white bg-red-500 px-6 py-3 rounded-xl">
                        Criar minha conta
                     </button>
                </form>
            </main>
        </div>
    )
}