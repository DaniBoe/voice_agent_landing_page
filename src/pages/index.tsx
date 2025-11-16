import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Turn Every Caller Into a Customer</title>
        <meta
          name="description"
          content="Book a 15-minute call to see how our voice agent can automate your restaurant phone bookings."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="container mx-auto max-w-4xl px-6">
        <section className="py-8">
          <div className="flex justify-center items-center space-x-4 text-gray-600">
            <div className="text-center">
              <div className="text-yellow-400 text-2xl">★★★★★</div>
              <div className="text-sm font-bold">4.9/5</div>
            </div>
            <div className="border-l h-10"></div>
            <div className="text-center">
              <div className="text-lg font-bold">200+</div>
              <div className="text-sm">restaurants trust us</div>
            </div>
            <div className="border-l h-10"></div>
            <div className="text-center">
              <div className="text-lg font-bold">1M+</div>
              <div className="text-sm">calls handled</div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
          <div className="order-2 md:order-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-600">
              Never Miss a Reservation Call Again
              <br />
              <span className="block text-2xl md:text-3xl font-bold mt-2 text-gray-900">
                Turn Missed Calls into Revenue with a 24/7 AI Voice Agent
              </span>
            </h1>
            <p className="text-gray-600 mb-4 text-xl">
              Your phone is always answered — taking bookings and keeping guests
              happy, day or night.
            </p>
            <a
              href="https://calendly.com/daniel-boettcher89/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md mb-6 hover:bg-blue-700"
            >
              Book a Free Demo
            </a>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="/hero-image.jpg"
              alt="Stressed restaurant manager missing calls"
              width={500}
              height={500}
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        <section id="demo-video" className="py-8 text-center">
          <h2 className="text-3xl font-bold mb-2">
            Watch a 2-Min Demo & Book Your Call
          </h2>
          <p className="mb-4 text-gray-600">
            See how the AI voice agent can be tailored to your restaurant's needs.
          </p>
          <div className="w-full max-w-[576px] mx-auto mb-6">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/bNNakDKb5YY"
                title="Demo video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <a
            href="https://calendly.com/daniel-boettcher89/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Book a Free Demo
          </a>
        </section>

        {/* Social proof */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
            <div className="bg-white/80 ring-1 ring-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-800">“We increased phone bookings by 37% within the first month — staff love it and so do customers.”</p>
              <footer className="mt-4 text-sm text-gray-600">— Maria Rossi, Manager at Bistro Luna</footer>
            </div>
            <div className="bg-white/80 ring-1 ring-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-800">“The voice agent handles calls reliably during busy shifts — zero missed bookings overnight.”</p>
              <footer className="mt-4 text-sm text-gray-600">— James Park, Owner at CafeCo</footer>
            </div>
            <div className="bg-white/80 ring-1 ring-gray-200 rounded-lg p-6 shadow-sm">
              <p className="text-gray-800">“Easy setup, seamless integration with our reservation flow — great ROI.”</p>
              <footer className="mt-4 text-sm text-gray-600">— Lena Kim, Operations at DineFast</footer>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How much revenue are missed calls costing you?
            </h2>
            <div className="text-lg text-gray-600 space-y-4">
              <p>1 table = <strong>$20</strong> per person × <strong>4</strong> people = <strong className="text-blue-600">$80</strong></p>
              <p>10 missed calls per day = <strong className="text-red-500">$800 lost daily</strong></p>
              <p>That's <strong className="text-red-500">$5,600 per week</strong></p>
              <p className="text-2xl font-bold text-gray-800">= Over <span className="text-blue-600">$291,000</span> per year in lost bookings</p>
            </div>
            <p className="mt-6 text-xl text-gray-800 font-semibold">
              Your AI agent answers every call and books every table — even during rush hour.
            </p>
          </div>
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">
            Why restaurants choose our voice agent
          </h2>
          <ul className="space-y-2 list-disc pl-5">
            <li>
              <strong>Reduce missed calls:</strong> automatically answer and take
              bookings.
            </li>
            <li>
              <strong>Increase bookings:</strong> friendly voice prompts to upsell
              menus and offers.
            </li>
            <li>
              <strong>Easy setup:</strong> integrates with your existing
              reservation flow.
            </li>
          </ul>
        </section>
        <footer className="py-8 text-gray-500">
          <p>© 2025. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
