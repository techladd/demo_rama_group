// pages/api/update.js

import supabase from '@/supabase'

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    const { data, error } = await supabase
      .from('your_table_name')
      .update(req.body)

    if (error) return res.status(500).json({ error: 'Error updating data' })

    return res.status(200).json(data)
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
