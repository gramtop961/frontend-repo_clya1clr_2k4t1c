export default function StoryAbout() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our mosque has served as a center for prayer, learning, and community for years. With your support, we aim to expand our programs, improve accessibility, and ensure this house of worship remains a welcoming home for all.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Funds raised will go towards educational initiatives, youth mentorship, food drives, and maintaining the facilities that bring us together.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">About Us</h3>
            <div className="mt-4 space-y-3 text-gray-600">
              <p>
                We are guided by compassion, service, and unity. Our volunteers work tirelessly to create programs that uplift the community and provide resources for families.
              </p>
              <ul className="list-disc pl-5">
                <li>Daily prayers and weekly sermons</li>
                <li>Children and youth education</li>
                <li>Charity drives and community support</li>
                <li>Interfaith engagement and outreach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
