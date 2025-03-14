import { FaFacebook, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa"

const Contact = () => {
  return (
    <div style={{padding: "50px"}}>
      <section className="bg-gray-200 rounded" style={{padding: "20px"}}>
         <h4 className="text-xl font-bold text-center md:text-left">
          Contact Me
         </h4>

          <section className="flex gap-6 flex-col md:flex-row items-center " style={{marginTop: "20px"}}>
              <a 
                href="https://facebook.com"
                target="_blank"
                className="flex items-center flex-col md:flex-row text-black hover:text-gray-600 gap-2"
              >
                <FaFacebook className="h-6 w-6 text-blue-600"/>
                <span className="text-lg">Facebook</span>
              </a>
              <a 
                href="https://facebook.com"
                target="_blank"
                className="flex items-center flex-col md:flex-row text-black hover:text-gray-600 gap-2"
              >
                <FaYoutube className="h-6 w-6 text-red-600"/>
                <span className="text-lg">Youtube</span>
              </a>
              <a 
                href="https://x.com"
                target="_blank"
                className="flex items-center flex-col md:flex-row text-black hover:text-gray-600 gap-2"
              >
                <FaTwitter className="h-6 w-6 text-blue-600"/>
                <span className="text-lg">Twitter</span>
              </a>
              <a 
                href="https://github.com/siraj419"
                target="_blank"
                className="flex items-center flex-col md:flex-row text-black hover:text-gray-600 gap-2"
              >
                <FaGithub className="h-6 w-6 text-black"/>
                <span className="text-lg">github.com/siraj419</span>
              </a>

          </section>
      </section>
    </div>
  )
}

export default Contact