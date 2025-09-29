import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import BlogList from "../components/BlogList"
import Cta from "../components/Cta"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BlogList />
      <Cta />
      <Footer />
    </>
  )
}

export default Home