using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AuthJwt.Models.AnothersEntity;

namespace AuthJwt.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly FilmContext _context;

        public CategoriesController(FilmContext context)
        {
            _context = context;
        }

        // GET: api/Categories
        [HttpGet("Index")]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            return await _context.Categories.Include(c => c.Films).ToListAsync();
        }

        // GET: api/Categories/5
        [HttpGet("Details/{id}")]
        public async Task<ActionResult<Category>> GetCategory(int id)
        {
            var category = await _context.Categories.Include(c => c.Films).FirstOrDefaultAsync(c => c.Id == id);

            if (category == null)
            {
                return NotFound();
            }

            return category;
        }
        // GET: api/Categories/5
        [HttpGet("DetailsWhithOutFilms")]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategoryWhithOutFilms()
        {
            return await _context.Categories.ToListAsync();
        }
        // GET: api/Categories/5
        [HttpGet("DetailsWhithOutFilms/{id}")]
        public async Task<ActionResult<Category>> GetCategoryWhithOutFilms(int id)
        {
            var category = await _context.Categories.FirstOrDefaultAsync(c => c.Id == id);

            if (category == null)
            {
                return NotFound();
            }

            return category;
        }


        private bool CategoryExists(int id)
        {
            return _context.Categories.Any(e => e.Id == id);
        }
    }
}
