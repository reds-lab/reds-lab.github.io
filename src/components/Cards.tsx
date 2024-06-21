// Card.tsx
import { useState, useEffect } from 'react'
import '../styles/Cards.css'

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

function Cards() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchRepos()
  }, [])

  const fetchRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/orgs/reds-lab/repos')
      if (!response.ok) {
        throw new Error('Failed to fetch repositories')
      }
      const data = await response.json()
      setRepos(data)
      setLoading(false)
    } catch (err) {
      setError('Error fetching repositories')
      setLoading(false)
    }
  }

  if (loading) return <div className="card">Loading...</div>
  if (error) return <div className="card error">{error}</div>

  return (
    <div className="card">
      <h2 className="card-title">Our Projects</h2>
      <div className="repo-grid">
        {repos.map((repo) => (
          <div key={repo.id} className="repo-item">
            <h3 className="repo-name">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h3>
            <p className="repo-description">{repo.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards