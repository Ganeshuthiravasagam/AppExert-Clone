import Head from "next/head"
import Link from "next/link"
export default function Home() {
  
  return (
    <div>
    <Head>
      <title>AppExert | Build faster, better with our managed remote teams</title>
      <link rel="shortcut icon" href="/favicon/favicon.svg" />
    </Head>
    <div className="mt-40 ml-10 pt-20 flex flex-col md:flex-row">
      <div>
        <h1 className="text-dark-blue text-5xl font-Mouser">Don&apos;t just cruise, sprint with AppExert</h1>
        <p className="mt-10 text-xl">
        We enable tech companies to build successful products with our high performing team of managed remote developers.
        </p>
        <button><Link href="https://appexert.com/companies/start-hiring"><a className="block bg-600 hover:bg-700 rounded md:inline-block text-white hover:text-blue-500 px-5 py-1.5 mt-5">Start Hiring</a></Link></button>
      </div>
      <div>
        <img src="/images/hero.svg" width='900' height='300' alt='appexert group illustration' className="pr-10"/>
      </div>
    </div>
    <div className="bg-light-blue">
    <div className="mt-40 ml-10 pt-20 flex flex-col md:flex-row-reverse">
      <div>
        <p>What we do?</p>
        <h1 className="text-dark-blue text-2xl font-Mouser">We help you move faster and better!</h1>
        <p className="mt-10">
        We help technology companies to build successful products faster, better, leaner, and cost-effective.

        With our team of hand-picked remote developers, we enable your organization to execute critical projects successfully.
        </p>
      </div>
      <div className="mt-2">
        <img src="/images/what_we_do.svg" width='1400' height='300' alt='appexert group illustration' className="pr-10"/>
      </div>
    </div>
    </div>
    <div className="mt-40 ml-10 pt-20 flex flex-col md:flex-row">
      <div>
        <p>Who we are?</p>
        <h1 className="text-dark-blue text-2xl font-Mouser">Team of motivated engineers</h1>
        <p className="mt-10">
        We&apos;re a team of seasoned hustlers, insanely passionate about solving problems. We&apos;re motivated, pre-equipped, and laser-focused in helping you to scale fast with any sort of engineering challenges and workloads.
        </p>
      </div>
      <div>
        <img src="/images/team.svg" width='1400' height='300' alt='appexert group illustration' className="pr-10"/>
      </div>
    </div>
    <div className="bg-light-blue">
    <div className="mt-40 ml-10 pt-20 flex flex-col md:flex-row-reverse">
      <div>
        <p>How we do?</p>
        <h1 className="text-dark-blue text-2xl font-Mouser">Simple, flexible and straight forward!</h1>
        <p className="mt-10">
        Setting and managing remote teams shouldn&apos;t be harder anymore! Our Process is super easy and straight forward.
        </p>
      </div>
      <div>
        <img src="/images/analyze.svg" width='700' height='300' alt='appexert group illustration' className="pr-10"/>
      </div>
    </div>
    </div>
    <div className="mt-40 ml-10 pt-20 flex flex-col md:flex-row">
      <div>
        <p>Life at AppExert</p>
        <h1 className="text-dark-blue text-2xl font-Mouser">We believe in work + life, not work as life!</h1>
        <p className="mt-10">
        Gone are the days of cubicle farms, come join us into the new era of remote working.
        </p>
        Work from anywhere, be it the next street or the other side of the world.
        <p/>
        <p>AppExert enables a connected work environment that is collaborative, flexible, fun, supportive, and self-driven.</p>
        <button><Link href="https://appexert.com/culture"><a className="block hover:bg-700 bg-600 rounded md:inline-block text-white hover:text-blue-500 px-5 py-1.5 mt-5">Explore our culture</a></Link></button>
      </div>
      <div>
        <img src="/images/work_life.svg" width='700' height='300' alt='appexert group illustration' className="pr-10"/>
      </div>
    </div>
    <div className="mt-20 flex justify-center items-center bg-light-blue">
      <div>
          <p className="text-center mt-20">We engage in modern technologies</p>
          <img src="/images/tech_stack.svg" width='500' height='200' alt='appexert group illustration' className="mt-10 mb-20"/>
      </div>
    </div>
    </div>
  )
}
