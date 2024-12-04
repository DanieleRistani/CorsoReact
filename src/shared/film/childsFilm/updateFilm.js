import { useEffect, useRef, useState } from "react";
import filmService, { getCategoriesForSelect, getFilmById,updateFilm } from "../filmService";
import { useParams } from "react-router-dom";

function AddFilm() {
  const { id } = useParams();

  const [filmUpdated, setFilmUpdated] = useState({});
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const nameRef = useRef(null);
  const yearRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);

  useEffect(() => {
    const fetchFilm = async () => {
      setLoading(true);
      try {
        const res = await getFilmById(id);
        if (!res.ok) {
          throw new Error("Errore nel recupero del film");
        }
        const data = await res.json();
        setFilmUpdated(data);

        
        if (nameRef.current) nameRef.current.value = data.name;
        if (yearRef.current) yearRef.current.value = data.year;
        if (descriptionRef.current) descriptionRef.current.value = data.description;
        if (categoryRef.current) categoryRef.current.value = data.categoryId; 

      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchCategory = async () => {
      setLoading(true);
      try {
        const res = await getCategoriesForSelect();
        if (!res.ok) {
          throw new Error("Errore nel recupero della categoria");
        }
        const data = await res.json();
        setCategories(data.$values);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFilm();
    fetchCategory();
  }, [id]);

  function updateFilmToDb() {
    const updatedFilm = {
      name: nameRef.current.value,
      year: yearRef.current.value,
      description: descriptionRef.current.value,
      categoryId: categoryRef.current.value,
    };

    updateFilm(filmUpdated.id, updatedFilm);
    window.location.replace("/filmsHUB/filmList");
  }

  if (loading) {
    return <p className="display-1 text-center mt-5">Caricamento...</p>;
  }

  return (
    <div className="row home-row justify-content-center mt-5">
      <div className="col-4 d-flex flex-column align-items-center justify-content-center">
        <input type="text" placeholder="name" ref={nameRef} />
        <input type="text" placeholder="year" ref={yearRef} />
        <input type="email" placeholder="description" ref={descriptionRef} />
        <select className="form-select" aria-label="Default select example" ref={categoryRef}>
          <option value="">Seleziona una categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button className="btn btn-dark mt-2 align-self-start" onClick={updateFilmToDb}>
          Update
        </button>
      </div>
    </div>
  );
}

export default AddFilm;
