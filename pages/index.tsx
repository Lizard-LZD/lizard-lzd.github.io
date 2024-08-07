import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Ziqi&#39;s Portfolio</title>
      </Head>
      <h1 className='p-10 text-blue-500'>Ziqis portfolio</h1>

      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>


      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>


      {/* Experience */}
      <section id='experience' className='snap-center'>
        <Experience />
      </section>


      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>


      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>


      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact />
      </section>


      {/* <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
          <p>⬆Top</p>
          </div>
        </footer>
      </Link> */}

    </div>
  )
}
