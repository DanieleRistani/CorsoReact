import { Link, Outlet } from "react-router-dom"
function films(){

return (
    <>
    <div class="container-fluid">
    <div class="row home-row">
        <div class="col-12 d-flex align-items-center justify-content-center">
          <h1 class="dispay-1 text-center">Films HUB</h1> 
          <div className=" custom-buttons d-flex flex-column">
            <Link to={"/filmsHUB/filmList"}> <button className="btn border-0"><i class="fa-solid fa-2x fa-list text-dark "></i></button></Link>
            <Link to={"/filmsHUB/addFilm"}> <button className="btn border-0"><i class="fa-solid  fa-2x fa-circle-plus text-dark"></i></button></Link>

          </div>
        </div>
    </div>
    <Outlet/>
    </div>
    </>
)
}

export default films