import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function DonateWidget() {
  const [amount, setAmount] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [anonymous, setAnonymous] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [stats, setStats] = useState({ total_amount: 0, total_donations: 0 })
  const [recent, setRecent] = useState([])

  async function fetchStats() {
    try {
      const res = await fetch(`${API_BASE}/api/stats`)
      const data = await res.json()
      setStats(data)
    } catch (e) {
      // ignore
    }
  }

  async function fetchRecent() {
    try {
      const res = await fetch(`${API_BASE}/api/donations?limit=5`)
      const data = await res.json()
      setRecent(Array.isArray(data) ? data : [])
    } catch (e) {
      // ignore
    }
  }

  useEffect(() => {
    fetchStats()
    fetchRecent()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess('')
    try {
      const res = await fetch(`${API_BASE}/api/donations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: anonymous ? null : name || null,
          amount: parseFloat(amount),
          message: message || null,
          anonymous,
        }),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.detail || 'Failed to donate')
      }
      await res.json()
      setAmount('')
      setName('')
      setMessage('')
      setAnonymous(false)
      setSuccess('Thank you for your generous donation!')
      fetchStats()
      fetchRecent()
    } catch (e) {
      setError(e.message)
    } finally {
      setSubmitting(false)
    }
  }

  const quick = [25, 50, 100, 250]

  return (
    <section id="donate" className="relative bg-white py-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Make a Donation</h2>
          <p className="mt-2 text-gray-600">Every contribution counts and brings us closer to our goal.</p>

          <div className="mt-6 grid grid-cols-4 gap-3">
            {quick.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setAmount(String(q))}
                className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-2 text-emerald-700 hover:bg-emerald-100"
              >
                ${q}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Amount (USD)</label>
              <input
                type="number"
                min="1"
                step="0.01"
                required
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="50"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={anonymous}
                  className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500 disabled:bg-gray-100"
                  placeholder="Optional"
                />
              </div>
              <div className="flex items-center gap-2 pt-6 md:pt-8">
                <input id="anon" type="checkbox" checked={anonymous} onChange={(e) => setAnonymous(e.target.checked)} />
                <label htmlFor="anon" className="text-sm text-gray-700">Give anonymously</label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-md border border-gray-200 px-3 py-2 focus:border-emerald-500 focus:ring-emerald-500"
                placeholder="Add a note (optional)"
                rows={3}
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            {success && <p className="text-sm text-emerald-600">{success}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-md bg-emerald-600 py-3 font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
            >
              {submitting ? 'Processing...' : 'Donate securely'}
            </button>
          </form>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
          <h3 className="text-xl font-semibold text-gray-900">Live Impact</h3>
          <p className="mt-1 text-sm text-gray-600">Updated in real-time</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-white p-5 shadow-sm">
              <div className="text-sm text-gray-500">Total Raised</div>
              <div className="mt-1 text-3xl font-bold text-emerald-700">
                ${'{'}stats.total_amount.toLocaleString(undefined, { style: 'currency', currency: 'USD' }).replace('$',''){'}'}
              </div>
            </div>
            <div className="rounded-lg bg-white p-5 shadow-sm">
              <div className="text-sm text-gray-500">Donors</div>
              <div className="mt-1 text-3xl font-bold text-emerald-700">{stats.total_donations}</div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-700">Recent Supporters</h4>
            <ul className="mt-3 space-y-3">
              {recent.map((d) => (
                <li key={d.id} className="flex items-start justify-between rounded-md bg-white px-3 py-2 shadow-sm">
                  <div>
                    <div className="font-medium text-gray-900">{d.anonymous || !d.name ? 'Anonymous' : d.name}</div>
                    {d.message && <div className="text-sm text-gray-600">{d.message}</div>}
                  </div>
                  <div className="font-semibold text-emerald-700">${'{'}d.amount.toFixed(2){'}'}</div>
                </li>
              ))}
              {recent.length === 0 && (
                <li className="rounded-md bg-white px-3 py-2 text-sm text-gray-500 shadow-sm">Be the first to donate</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
