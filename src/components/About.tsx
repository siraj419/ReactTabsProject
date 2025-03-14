
const About = () => {
  return (
    <div style={{padding: "50px"}}>
      <section className="bg-gray-200 rounded-lg" style={{padding: "10vh 15vh"}}>
        <h1 className="text-xl md:text-2xl font-bold text-center md:text-left" style={{marginBottom: "10px"}}>About GRIDFS</h1>
        <p className="text-lg text-justify md:text-xl">
          Instead of storing a file in a single document, GridFS divides the file into parts,
          or chunks [1], and stores each chunk as a separate document. By default, GridFS uses a
          default chunk size of 255 kB; that is, GridFS divides a file into chunks of 255 kB with the
          exception of the last chunk. The last chunk is only as large as necessary. Similarly, files
          that are no larger than the chunk size only have a final chunk, using only as much space as
          needed plus some additional metadata.
        </p>
      </section>
    </div>
  )
}

export default About