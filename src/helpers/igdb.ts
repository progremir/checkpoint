import igdb from "igdb-api-node";

export function findGameByURL(url: string) {
  return igdb()
    .fields('name')  
    .where(`url = "${url}";`)
    .request('/games')
}
