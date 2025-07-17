'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BlogForm() {
  const [form, setForm] = useState({
    title: '',
    category: '',
    banner: null as File | null,
    description: '',
    altText: '',
    seoTitle: '',
    seoDescription: '',
    articleSchemas: ['', '', '', ''],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setForm((prev) => ({ ...prev, banner: e.target.files![0] }))
    }
  }

  const handleSchemaChange = (index: number, value: string) => {
    const updated = [...form.articleSchemas]
    updated[index] = value
    setForm((prev) => ({ ...prev, articleSchemas: updated }))
  }

  const applyFormatting = (
    field: 'description' | 'seoDescription',
    tag: string
  ) => {
    const textarea = document.querySelector<HTMLTextAreaElement>(`textarea[name="${field}"]`)
    if (!textarea) return

    const { selectionStart, selectionEnd, value } = textarea
    const selectedText = value.slice(selectionStart, selectionEnd)

    let formatted = ''

    switch (tag) {
      case 'B':
        formatted = `<strong>${selectedText || 'bold text'}</strong>`
        break
      case 'I':
        formatted = `<em>${selectedText || 'italic text'}</em>`
        break
      case 'U':
        formatted = `<u>${selectedText || 'underlined text'}</u>`
        break
      case 'H1':
        formatted = `<h1>${selectedText || 'Heading 1'}</h1>`
        break
      case 'H2':
        formatted = `<h2>${selectedText || 'Heading 2'}</h2>`
        break
      case 'List':
        formatted = `<ul><li>${selectedText || 'List item'}</li></ul>`
        break
      case 'Link':
        formatted = `<Link href="https://example.com">${selectedText || 'link text'}</Link>`
        break
      default:
        formatted = selectedText
    }

    const updatedValue =
      value.slice(0, selectionStart) + formatted + value.slice(selectionEnd)

    setForm((prev) => ({
      ...prev,
      [field]: updatedValue,
    }))

    setTimeout(() => {
      textarea.focus()
      textarea.selectionStart = textarea.selectionEnd = selectionStart + formatted.length
    }, 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Submitted form:', form)
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      <div className="space-y-5">

        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter Title"
            maxLength={80}
            className="w-full rounded-md bg-cyan-100 px-4 py-2"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-md bg-cyan-100 px-4 py-2"
          >
            <option value="">Select a category</option>
            <option value="business">Business</option>
            <option value="tech">Tech</option>
            <option value="travel">Travel</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Upload Banner (1000x700)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full bg-cyan-100 px-4 py-2 rounded-md"
          />
          {form.banner && (
            <img
              src={URL.createObjectURL(form.banner)}
              alt="Banner Preview"
              className="w-full h-auto mt-2 rounded-md"
            />
          )}
        </div>

        <div>
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter Description"
            rows={5}
            className="w-full rounded-md bg-cyan-100 px-4 py-2"
          />
          <div className="flex space-x-2 mt-2 flex-wrap">
            {['B', 'I', 'U', 'H1', 'H2', 'List', 'Link'].map((btn) => (
              <button
                key={btn}
                type="button"
                onClick={() => applyFormatting('description', btn)}
                className="bg-teal-500 text-white px-2 py-1 rounded text-xs"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Image Alt Text</label>
          <input
            name="altText"
            value={form.altText}
            onChange={handleChange}
            placeholder="Enter Alt Text"
            maxLength={30}
            className="w-full rounded-md bg-cyan-100 px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">SEO Title</label>
          <input
            name="seoTitle"
            value={form.seoTitle}
            onChange={handleChange}
            maxLength={80}
            placeholder="Enter SEO Title"
            className="w-full rounded-md bg-cyan-100 px-4 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">SEO Description</label>
          <textarea
            name="seoDescription"
            value={form.seoDescription}
            onChange={handleChange}
            placeholder="Enter SEO Description"
            rows={4}
            className="w-full rounded-md bg-cyan-100 px-4 py-2"
          />
          <div className="flex space-x-2 mt-2 flex-wrap">
            {['B', 'I', 'U', 'H1', 'H2', 'List', 'Link'].map((btn) => (
              <button
                key={btn}
                type="button"
                onClick={() => applyFormatting('seoDescription', btn)}
                className="bg-teal-500 text-white px-2 py-1 rounded text-xs"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {form.articleSchemas.map((schema, i) => (
          <div key={i}>
            <label className="block font-semibold mb-1">Article Schema</label>
            <textarea
              value={schema}
              onChange={(e) => handleSchemaChange(i, e.target.value)}
              rows={3}
              placeholder={`{ "name": "..." }`}
              className="w-full rounded-md bg-cyan-100 px-4 py-2"
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-semibold"
        >
          Publish
        </button>
      </div>
    </form>
  )
}
