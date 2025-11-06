export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
              <p className="mt-3 text-gray-600">
                Have questions or want to volunteer? We would love to hear from you.
              </p>
              <div className="mt-6 space-y-2 text-gray-700">
                <p><span className="font-semibold">Address:</span> 123 Community Rd, Your City</p>
                <p><span className="font-semibold">Email:</span> info@ourmosque.org</p>
                <p><span className="font-semibold">Phone:</span> (123) 456-7890</p>
              </div>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  rows="4"
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
