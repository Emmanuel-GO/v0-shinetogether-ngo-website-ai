'use client'

import React from "react"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogOut, Plus, Trash2, Edit2 } from 'lucide-react'
import Image from 'next/image'

interface Giveaway {
  id: string
  title: string
  description: string
  items: number
  deadline: string
  status: 'active' | 'completed' | 'upcoming'
}

export default function AdminDashboard() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [giveaways, setGiveaways] = useState<Giveaway[]>([])
  const [showGiveawayForm, setShowGiveawayForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    items: '',
    deadline: '',
    status: 'active' as const,
  })

  useEffect(() => {
    const authStatus = localStorage.getItem('admin_authenticated')
    if (authStatus !== 'true') {
      router.push('/')
    } else {
      setIsAuthenticated(true)
      loadGiveaways()
      setLoading(false)
    }
  }, [router])

  const loadGiveaways = () => {
    const saved = localStorage.getItem('shinetogether_giveaways')
    if (saved) {
      setGiveaways(JSON.parse(saved))
    }
  }

  const saveGiveaways = (data: Giveaway[]) => {
    localStorage.setItem('shinetogether_giveaways', JSON.stringify(data))
    setGiveaways(data)
  }

  const handleAddGiveaway = (e: React.FormEvent) => {
    e.preventDefault()
    if (editingId) {
      const updated = giveaways.map(g =>
        g.id === editingId
          ? {
              ...g,
              title: formData.title,
              description: formData.description,
              items: parseInt(formData.items),
              deadline: formData.deadline,
              status: formData.status,
            }
          : g
      )
      saveGiveaways(updated)
      setEditingId(null)
    } else {
      const newGiveaway: Giveaway = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        items: parseInt(formData.items),
        deadline: formData.deadline,
        status: formData.status,
      }
      saveGiveaways([...giveaways, newGiveaway])
    }
    resetForm()
  }

  const handleEditGiveaway = (giveaway: Giveaway) => {
    setFormData({
      title: giveaway.title,
      description: giveaway.description,
      items: giveaway.items.toString(),
      deadline: giveaway.deadline,
      status: giveaway.status,
    })
    setEditingId(giveaway.id)
    setShowGiveawayForm(true)
  }

  const handleDeleteGiveaway = (id: string) => {
    saveGiveaways(giveaways.filter(g => g.id !== id))
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      items: '',
      deadline: '',
      status: 'active',
    })
    setShowGiveawayForm(false)
    setEditingId(null)
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated')
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
          <p className="text-foreground/60">Loading admin dashboard...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  // True stats from home page
  const stats = [
    { label: 'Lives Touched', value: 1000, suffix: '+' },
    { label: 'Students Sponsored', value: 100, suffix: '+' },
    { label: 'Events Held', value: 5, suffix: '+' },
    { label: 'Gifts Distributed', value: 400, suffix: '+' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10">
      {/* Header */}
      <div className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="SHINETOGETHER" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <div>
                <h1 className="font-bold text-lg text-foreground">Admin Dashboard</h1>
                <p className="text-xs text-foreground/60">SHINETOGETHER Management</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors font-medium"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">Dashboard Overview</h2>
          <p className="text-foreground/60">Manage SHINETOGETHER's programs and operations</p>
        </div>

        {/* Stats Grid - True Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value.toLocaleString()}
                <span className="text-2xl ml-1">{stat.suffix}</span>
              </div>
              <p className="text-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Giveaway Management Section */}
        <section className="bg-white rounded-2xl border border-border p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-foreground">Manage Giveaways</h3>
            <button
              onClick={() => setShowGiveawayForm(!showGiveawayForm)}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Add Giveaway
            </button>
          </div>

          {/* Giveaway Form */}
          {showGiveawayForm && (
            <form
              onSubmit={handleAddGiveaway}
              className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-6 mb-8 border border-primary/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Giveaway title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Number of Items
                  </label>
                  <input
                    type="number"
                    value={formData.items}
                    onChange={e => setFormData({ ...formData, items: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="e.g., 50"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Deadline
                  </label>
                  <input
                    type="date"
                    value={formData.deadline}
                    onChange={e => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        status: e.target.value as 'active' | 'completed' | 'upcoming',
                      })
                    }
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="upcoming">Upcoming</option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={e => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Describe the giveaway"
                  rows={4}
                  required
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  {editingId ? 'Update Giveaway' : 'Create Giveaway'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2 bg-border text-foreground rounded-lg hover:bg-border/80 transition-colors font-semibold"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Giveaways List */}
          {giveaways.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {giveaways.map(giveaway => (
                <div
                  key={giveaway.id}
                  className="bg-gradient-to-br from-white to-primary/5 rounded-xl p-6 border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-2">{giveaway.title}</h4>
                      <div className="flex flex-wrap items-center gap-3 mb-3 text-sm text-foreground/60">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                          {giveaway.items} items
                        </span>
                        <span>Deadline: {new Date(giveaway.deadline).toLocaleDateString()}</span>
                        <span
                          className={`px-3 py-1 rounded-full font-semibold ${
                            giveaway.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : giveaway.status === 'upcoming'
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {giveaway.status.charAt(0).toUpperCase() + giveaway.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-foreground/70 text-sm">{giveaway.description}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleEditGiveaway(giveaway)}
                        className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                        aria-label="Edit giveaway"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteGiveaway(giveaway.id)}
                        className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                        aria-label="Delete giveaway"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border border-primary/20">
              <p className="text-foreground/60 text-lg">No giveaways yet. Create one to get started!</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
