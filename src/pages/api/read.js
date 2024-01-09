// pages/api/read.j

import supabase from '@/supabase'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('your_table_name').select('*')

    if (error) return res.status(500).json({ error: 'Error fetching data' })

    return res.status(200).json(data)
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
