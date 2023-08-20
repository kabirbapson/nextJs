import React from 'react'

export default function index(req, res) {
   res.status(200).json({ name: 'John Doe' })
}
