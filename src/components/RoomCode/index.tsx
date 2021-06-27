import copyImg from '../../assets/images/copy.svg';
import './style.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {

    function copyRoomCodeToClipboard() {
        navigator.clipboard.writeText(props.code);
    }

    return (
        <div className="button-beauty" onClick={copyRoomCodeToClipboard}>
            <a href="#"> 
                <img src={copyImg} alt="Copy room code" />
                <div className="code">
                    <span className="sala-text">Sala: </span>
                    <span>#{props.code}</span>
                </div>
            </a>
        </div>
    )
}