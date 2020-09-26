const URL = 'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json'

export const getProducts = async () => {
  const data = await (await fetch(URL)).json()
  const results = data?.results ?? []
  return results
}
