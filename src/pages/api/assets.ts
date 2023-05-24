import { NextApiRequest, NextApiResponse } from 'next'
import axios from '../../utils/apiAxios'

async function assets(request: NextApiRequest, response: NextApiResponse) {
  // If some sensive information is needed use this. Ref: https://www.youtube.com/watch?v=f7JWDLFhR_c&list=PLMdYygf53DP7FJzPslLnmqp0QylyFfA8a&index=3
  // const varName = process.env.ENVIRONENT_VAR_NAME
  // const url = new URL('https://sheetdb.io/api/v1/pi3bvvgduaew2')
  // var newRequest = new Request(url)

  // const params = {
  //     ticker: ['BBAS3', 'PETR4']
  // };
  const queryParams = request.query
  console.log('query', queryParams)
  console.log('env', process.env)

  if (!process.env.SHEETDB_URL) {
    response.status(500).json({
      message:
        'Não foi possível consultar a base de dados "sheetdb". Verifique as variáveis de ambiente da api.',
    })
  } else {
    const result = await axios.get(process.env.SHEETDB_URL)
    response.status(200).json(result.data)
  }

  // const urlSearchParams = new URLSearchParams(queryParams)

  // const { searchParams } = new URL(request?.url)

  // const email = searchParams.get('email')

  // const requestUrl = `${url}?${queryParams}`

  // Enable chache control
  // response.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate')
}

export default assets
