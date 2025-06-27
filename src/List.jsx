import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import './assets/styles/reset.css';
import './assets/styles/List.css';
function List (){
    return (
        <li>
            <input type="checkbox" name="list" />
            <span> 방 청소하기</span>
            <button type="button"> 
            <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
        </li>
    )
}
export default List;