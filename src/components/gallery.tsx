import Image from "next/image";

const galleryItems = [
  {
    title: "Modern Apartment",
    description: "Contemporary color scheme",
    imageUrl: "/Modern Apartment.jpg",
    hint: "modern apartment",
  },
  {
    title: "Villa Exterior",
    description: "Weather-resistant finish",
    imageUrl: "/Villa Exterior.jpg",
    hint: "villa exterior",
  },
  {
    title: "Office Space",
    description: "Professional atmosphere",
    imageUrl: "/Office Space.jpg",
    hint: "modern office",
  },
  {
    title: "Cozy Bedroom",
    description: "Warm and inviting tones",
    imageUrl: "/Cozy Bedroom.jpg",
    hint: "cozy bedroom",
  },
  {
    title: "Minimalist Kitchen",
    description: "Clean and crisp lines",
    imageUrl: "/Minimalist Kitchen.jpg",
    hint: "minimalist kitchen",
  },
  {
    title: "Restaurant Accent Wall",
    description: "Bold decorative finish",
    imageUrl: "/Restaurant Accent Wall.jpg",
    hint: "restaurant interior",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            A showcase of our craftsmanship and the beautiful spaces we've had the pleasure to transform.
          </p>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-10">
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={600}
                height={400}
                data-ai-hint={item.hint}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
