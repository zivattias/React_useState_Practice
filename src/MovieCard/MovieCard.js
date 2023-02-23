
import { Button } from "react-bootstrap";
import Poster from "../Poster/Poster";
import { getRatingName } from "./utils";

// export default function MovieCard({movie}) {
//     const my_style = {
//         color: 'red',
//         backgroundColor: 'black'
//     }
//     my_style.fontSize = '20px'

//     let extra_text = ""

//     if (movie.rating == 10) {
//         extra_text = "!!!!!"
//     }
//     return (
//         <div>
//             {/* <h5 style={{fontSize: '20px', ...my_style}}>
//                 {movie.name} {extra_text}</h5> */}
//             {movie.rating === 10
//             ? 
//                 <h5 style={{fontSize: '20px', ...my_style}}>
//                 {movie.name}!!!!!!!!</h5>
//             : 
//                 <p>{movie.name}</p>
//             }
            
//             <Poster poster_url={movie.poster_url}/>
//             <p>Rating: {movie.rating} 
//                 <span>{getRatingName(movie.rating)}</span> 
//             </p>

//             {movie.rating < 5 && 
//             <button>Delete me</button>
//             }

//         </div>
//     )
    
// }

export default function MovieCard(props) {

    console.log(props)

    return (
        <div>

            <h5>{props.movieData.name}</h5>

            
            <Poster poster_url={props.movieData.poster_url}/>
            <p>Rating: {props.movieData.rating} 
                <span>{getRatingName(props.movieData.rating)}</span> 
            </p>
            <Button>Bootstrap btn</Button>

        </div>
    )
    
}