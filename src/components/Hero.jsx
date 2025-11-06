import { Rocket } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
              <Rocket className="h-4 w-4" />
              <span className="text-sm font-medium">Support Our House of Worship</span>
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
              Help Build a Brighter Future for Our Mosque
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Your donation directly supports community services, youth programs, and the maintenance of our sacred space.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#donate" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white shadow hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                Donate Now
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-md border border-emerald-200 px-6 py-3 text-emerald-700 hover:bg-emerald-50">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 p-1 shadow-inner">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-white/70">
                <div className="text-center">
                  <div className="text-5xl font-extrabold text-emerald-600">بِسْمِ الله</div>
                  <p className="mt-2 text-gray-600">In the name of Allah, the Most Merciful, the Most Compassionate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
