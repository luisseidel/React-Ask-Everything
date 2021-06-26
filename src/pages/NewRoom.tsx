import { FormEvent } from 'react';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { ToogleSwitch } from '../components/ToogleSwitch';
import { useTheme } from '../hooks/useTheme';
import illustrationImg from '../assets/images/illustration.svg';
import '../styles/auth.scss';

export function NewRoom() {

    const { user } = useAuth();
    const history = useHistory();
    const [newRoom, setNewRoom] = useState('');
    const { theme, toogleTheme } = useTheme();

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        });

        history.push(`/rooms/${firebaseRoom.key}`);
    }

    return (
        <div id="page-auth" className={theme}>
            <aside>
                <img src={illustrationImg} alt="ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content" >
                    <div className="toogle-theme">
                        <ToogleSwitch />
                    </div>
                    
                    <Logo/>
                    
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={ handleCreateRoom }>
                        <input 
                            type="text"
                            placeholder="Nome da Sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />

                        <Button type="submit">
                            Criar sala
                        </Button>

                    </form>

                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui!</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}