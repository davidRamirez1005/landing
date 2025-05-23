import { useState, useEffect } from 'react';

const CatGallery = () => {
  const [catImages, setCatImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=4');
        const data = await response.json();
        setCatImages(data.map(cat => cat.url));
      } catch (error) {
        console.error("Error fetching cats:", error);
        // Imágenes de respaldo por si falla la API
        setCatImages([
          'https://placekitten.com/300/200',
          'https://placekitten.com/300/201',
          'https://placekitten.com/300/202',
          'https://placekitten.com/300/203'
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-semibold text-purple-900 mb-6 text-center">Nuestros amigos gatunos</h2>
      
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {catImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={img} 
                alt={`Gato adorable ${index + 1}`} 
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = `https://placekitten.com/300/${200 + index}`;
                }}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CatGallery;

// DONE