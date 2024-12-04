import { useEffect ,useState} from "react";
import FilmService,{getFilms,deleteFilm} from "../filmService";
import { Link } from "react-router-dom";


function filmList() {
  const [films,setFilms]= useState([]);
  const [loading, setLoading] = useState(true); // Stato per il caricamento

function deleteFilmById(id) {
   deleteFilm(id)
   window.location.reload();
   
}
  


  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true); 
    
      try {
        const res = await getFilms();
        if (!res.ok) {
          throw new Error("Errore nel recupero dei Films");
        }
        const data = await res.json(); 
        console.log(data);
        
        setFilms(data.$values);
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchFilms(); 
  }, []);

  // Gestisci il caso di caricamento
  if (loading) {
    return <p class="display-1 text-center mt-5">Caricamento...</p>;
  }

    return (
        <>
             
            <div class="row home-row justify-content-center mb-5">
                <div class="col-8 d-flex align-items-center justify-content-center">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Film Name</th>
                                <th scope="col">Film year</th>
                                <th scope="col">Category</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {films.map((film,i) => (
                            <tr>
                                <th scope="row">{film.id}</th>
                                <td>{film.name}</td>
                                <td>{film.year}</td>
                                <td>{film.categoryId}</td>
                                <td><button className="btn btn-danger" onClick={() => deleteFilmById(film.id)}><i class="fa-solid fa-trash"></i></button><Link to={"/filmsHUB/updateFilm/"+film.id}><button className="btn btn-warning ms-2" ><i class="fa-solid fa-pen"></i></button></Link></td>
                            </tr>
                        ))}
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default filmList