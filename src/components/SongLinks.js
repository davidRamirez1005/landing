const SongLinks = () => {
  const songs = [
    {
      title: "Bésame Mucho",
      url: "https://www.youtube.com/watch?v=1K6v4Pwq5Y0",
      artist: "Andrea Bocelli"
    },
    {
      title: "Perfect",
      url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
      artist: "Ed Sheeran"
    },
    {
      title: "La Vie en Rose",
      url: "https://www.youtube.com/watch?v=ryF9vz8Jb7I",
      artist: "Louis Armstrong"
    }
  ];

  return (
    <section className="bg-purple-50 py-8 px-4">
      <h2 className="text-3xl font-semibold text-purple-900 mb-6 text-center">Canciones para enamorarse</h2>
      <div className="max-w-md mx-auto space-y-4">
        {songs.map((song, index) => (
          <a 
            key={index} 
            href={song.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-white p-4 rounded-lg shadow hover:bg-purple-100 transition-colors"
          >
            <h3 className="text-xl text-purple-800 font-medium">{song.title}</h3>
            <p className="text-purple-600">{song.artist}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SongLinks;