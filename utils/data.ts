export const generateSalesData = (days: number) => {
  const data = []
  const end = new Date()
  const start = new Date(end.getTime() - days * 24 * 60 * 60 * 1000)

  for (let date = new Date(start); date <= end; date.setDate(date.getDate() + 1)) {
    data.push({
      date: new Date(date).toISOString().split("T")[0],
      amount: Math.floor(Math.random() * 10000) + 1000,
    })
  }

  return data
}

export const generateTransactions = (count: number) => {
  const transactions = []
  const types = ["新規", "更新", "アップグレード"]
  const names = ["田中", "佐藤", "鈴木", "高橋", "渡辺"]

  for (let i = 0; i < count; i++) {
    transactions.push({
      id: `TR${Math.floor(Math.random() * 10000)}`,
      date: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
      amount: Math.floor(Math.random() * 100000) + 10000,
      type: types[Math.floor(Math.random() * types.length)],
      customer: `${names[Math.floor(Math.random() * names.length)]}${Math.floor(Math.random() * 100)}`,
    })
  }

  return transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

