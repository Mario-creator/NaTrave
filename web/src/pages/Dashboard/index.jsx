import { Navigate } from 'react-router-dom'
import { useLocalStorage, useAsync, useAsyncFn } from 'react-use'
import axios from 'axios'
import { format, formatISO } from 'date-fns'

import { Icon, Card, DateSelect } from '~/components'
import { useEffect, useState } from 'react'

export const Dashboard = () => {
    const [currentDate, setDate] = useState(formatISO(new Date(2022, 10, 20)))
    const [auth] = useLocalStorage('auth', {})

    const [state, doFetch] = useAsyncFn(async (params) => {
        const res = await axios({
            method: 'get',
            baseURL: 'http://localhost:3000',
            url: '/games',
            params
        })

        return res.data
    })

    useEffect(() => {
        doFetch({ gameTime: currentDate })
    }, [currentDate])

    if (!auth?.user?.id) {
        return <Navigate to="/" replace={true} />
      }
    
    return (
        <>
            <header className="bg-red-500 text-white p-4">
                <div className="container max-w-3xl flex justify-between text-white">
                    <img src="/img/logo-fundo-vermelho.svg" className="w-28 md:w-40"/>
                    <a href="/profile">
                        <Icon name="profile" className="w-10"/>
                    </a>
                </div>
            </header>
            <main className='space-y-6' >
                <section id='header' className="bg-red-500 text-white">
                    <div className='container max-w-3xl space-y-2 p-4'>
                        <span>Olá Bruno</span>
                        <h3 className='text-2xl font-bold'>Qual é o seu palpite?</h3>
                    </div>
                </section>
                <section id='content' className='p-4 container max-w-3xl space-y-4'>

                    <DateSelect currentDate={currentDate} onChange={setDate} />

                    <div className='space-y-4'>
                        {state.loading && 'Carregando jogos...'}
                        {state.error && 'Ops! Algo deu errado...'}

                        {!state.loading && !state.error && state.value?.map(game => (
                            <Card 
                                homeTeam={{ slug: game.homeTeam }}
                                awayTeam={{ slug: game.awayTeam }}
                                match={{ time: format(new Date(game.gameTime), 'H:mm') }}
                            />
                        ))}

                    </div>
                    
                </section>

            </main>

        </> 
    )
}