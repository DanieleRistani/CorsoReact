namespace AuthJwt.Models.AnothersEntity
{
    public class Film
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Year { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public List<Tag> Tags { get; set; } = new List<Tag>(); // 1 film può avere più tag>
    }
}
