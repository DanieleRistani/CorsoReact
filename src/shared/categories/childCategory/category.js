import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CategoryService, { getCategoryById } from "../categoriesService";

function Category() {
  const { id } = useParams(); // Ottieni l'ID dalla URL
  const [category, setCategory] = useState(null); // Inizializza con null per gestire il caricamento
  const [loading, setLoading] = useState(true); // Stato per il caricamento
  const [error, setError] = useState(null); // Stato per l'errore

  // Esegui il recupero dei dati ogni volta che cambia l'ID
  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true); // Imposta il loading a true
      setError(null); // Resetta l'errore
      try {
        const res = await getCategoryById(id); // Ottieni i dati della categoria
        if (!res.ok) {
          throw new Error("Errore nel recupero della categoria");
        }
        const data = await res.json(); // Parsea la risposta in JSON
        setCategory(data); // Imposta i dati della categoria nello stato
      } catch (err) {
        setError(err.message); // Gestisci l'errore
      } finally {
        setLoading(false); // Imposta il loading a false una volta completato
      }
    };

    fetchCategory(); // Chiama la funzione per recuperare i dati
  }, [id]);

  // Gestisci il caso di caricamento
  if (loading) {
    return <div>Caricamento...</div>;
  }

  // Gestisci eventuali errori
  if (error) {
    return <div>Errore: {error}</div>;
  }

  // Gestisci il caso in cui non ci siano dati
  if (!category || !category.films || !category.films.$values) {
    return <div>Categoria o film non trovati</div>;
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
          <h1 className="display-4 mb-4 text-center">{category.name} Films</h1>
          <div class="d-flex flex-wrap justify-content-center">
          {category.films.$values.map((film) => (
            <div className="card" style={{ width: "18rem" }} key={film.id}>
              <div className="card-body">
                <h5 className="card-title">{film.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {film.year}
                </h6>
                <p className="card-text">{film.description}</p>
              </div>
            </div>
          ))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
