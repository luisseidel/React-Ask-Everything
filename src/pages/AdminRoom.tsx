import { useParams } from 'react-router';
import { Question } from '../components/Question';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
//import { useAuth } from '../hooks/useAuth';
import deleteImg from '../assets/images/delete.svg';

import '../styles/room.scss';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import { useHistory } from 'react-router-dom';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    //const {user} = useAuth();
    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const { title, questions } = useRoom(roomId);
    
    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        });

        history.push('/');
    }

    async function handleDeleteQuestion(questionId: string) {
        if(window.confirm("Tem certeza?")) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={ logoImg } alt="Letmeask" />
                    <div >
                        <RoomCode code={roomId} />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar Sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
                </div>

                <div className="question-list">
                {
                    questions.map((q) => {
                        return (
                            <Question 
                                key={q.id}
                                content={q.content}
                                author={q.author}
                            >
                                <button type="button" onClick={() => handleDeleteQuestion(q.id)}>
                                    <img src={deleteImg} alt="Remover Pergunta" />
                                </button>
                            </Question>
                        )
                    })
                }
                </div>
            </main>

        </div>
    )
}