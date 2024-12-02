namespace AuthJwt.Models.AnothersEntity
{
    public class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public string Description { get; set; }
        public List<Film> Films { get; set; }
    }
}
