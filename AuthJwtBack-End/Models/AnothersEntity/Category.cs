namespace AuthJwt.Models.AnothersEntity
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }
        public List<Film> Films { get; set; }

    }
}
