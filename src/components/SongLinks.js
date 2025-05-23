const SongLinks = () => {
  const songs = [
    {
      title: "Angel",
      url: "https://youtu.be/M1V5EIdAFNU?si=TZr1tlD-ENkY09-O",
      artist: "Damiano David"
    },
    {
      title: "Just the way you are",
      url: "https://youtu.be/13jQjFQmTFw?si=YUWj-w0J29D0t8VZ",
      artist: "Bruno Mars"
    },
    {
      title: "Amor Completo",
      url: "https://youtu.be/bLojUhnV_RQ?si=_PvLUfk_d9w899Dj",
      artist: "Mon Laferte"
    }
  ];

  return (
    <section className="bg-purple-50 py-8 px-4">
      <h2 className="text-3xl font-semibold text-purple-900 mb-6 text-center">Canciones para tí</h2>
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
