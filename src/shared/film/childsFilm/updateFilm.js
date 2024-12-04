
import { useEffect, useRef,useState } from "react";
import filmService, {getCategoriesForSelect,getFilmById} from "../filmService";
import { useParams } from "react-router-dom";
function addFilm() {
    const { id } = useParams();
    const nameRef = useRef(null);
    const yearRef = useRef(null);
    const descriptionRef = useRef(null);
    const categoryRef = useRef(null);
    
    const [filmUpdated,setFilmUpdated] =useState({})
    const [categories,setCategories] = useState([]);
    const [loading, setLoading] = useState(true); // Stato per il caricamento


    // Esegui il recupero dei dati ogni volta che cambia l'ID
    useEffect(() => {



        const fetchFilm=async ()=>{
            setLoading(true); // Imposta il loading a true
            
            try {
                const res = await getFilmById(id);
                console.log(res);
                
                if (!res.ok) {
                  throw new Error("Errore nel recupero del film");
                }
                const data = await res.json(); 
                // Parsea la risposta in JSON
                
                
                setFilmUpdated(data)
                
                // setFilm(data);
              } catch (err) {
              console.log(err.message);   
              } finally {
                setLoading(false); // Imposta il loading a false una volta completato
              }
    
    
        };



        const fetchCategory = async () => {
        setLoading(true); // Imposta il loading a true
        
        try {
          const res = await getCategoriesForSelect(); // Ottieni i dati della categoria
          if (!res.ok) {
            throw new Error("Errore nel recupero della categoria");
          }
          const data = await res.json(); // Parsea la risposta in JSON
          setCategories(data.$values); 
          
        } catch (err) {
        console.log(err.message);   
        } finally {
          setLoading(false); // Imposta il loading a false una volta completato
        }
      };
      

      fetchFilm(),
      
      fetchCategory();
    
    }, [id]);

  
function updateFilmToDb() {
   
    
    
    
}





    // Gestisci il caso di caricamento
    if (loading) {
      return <p class="display-1 text-center mt-5">Caricamento...</p>;
    }




    return (
        <>

            <div class="row home-row justify-content-center mt-5">
                <div class="col-4 d-flex flex-column align-items-center justify-content-center">
                    
                    <input type="text" placeholder="name" ref={nameRef} />
                    <input type="text" placeholder="year" ref={yearRef} />
                    <input type="email" placeholder="description" ref={descriptionRef} />
                    <select class="form-select" aria-label="Default select example" ref={categoryRef}>
                        <option selected>Open this select menu</option>
                        {categories.map(category => (<option value={category.id}>{category.name}</option>))}
                    </select>
                    <button class="btn btn-dark mt-2 align-self-start" onClick={()=>updateFilmToDb()}>Update</button>
                </div>
            </div>

        </>
    )
}

export default addFilm