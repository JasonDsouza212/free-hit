function levenshteinDistance(s1, s2) {
  const m = s1.length
  const n = s2.length

  // Create a matrix of size (m+1) x (n+1)
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0))

  // Initialize the first row and column
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 0
  }

  for (let j = 0; j <= n; j++) {
    dp[0][j] = 0
  }

  // Calculate the Levenshtein distance
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return Math.max(m, n) - dp[m][n]
}

export default function fuzzySearch(searchTerm, target) {
  searchTerm = searchTerm.toLowerCase()
  target = target.toLowerCase()

  const distance = levenshteinDistance(searchTerm, target)

  const similarity = 1 - distance / Math.max(searchTerm.length, target.length)
  return similarity > 0.5 // Adjust the similarity threshold as needed
}
