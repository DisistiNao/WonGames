'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

const axios = require("axios")
const slugify = require("slugify")

async function getGameInfo(slug) {
  const jsdom = require("jsdom")
  const { JSDOM } = jsdom
  const body = await axios.get(`https://www.gog.com/game/${slug}`)
  const dom = new JSDOM(body.data)

  const description = dom.window.document.querySelector('.description')

  return {
    rating: 'FREE',
    short_description: description.textContent.slice(0, 160),
    description: description.innerHTML
  }
}

async function getByName(name, entityName) {
  const item = await strapi.services[entityName].find({ name })
  return item.length ? item[0] : null
}

async function create(name, entityName) {
  const item = await getByName(name, entityName)

  if(!item) {
    return await strapi.services[entityName].create({
      name,
      slug: slugify(name, { lower: true })
    })
  }
}

module.exports = {
  populate: async (params) => {
    const gogApiUrl = `https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity`
    const { data: { products } } = await axios.get(gogApiUrl)

    // await strapi.services.publisher.create({
    //   name: products[13].publisher,
    //   slug: slugify(products[13].publisher).toLowerCase()
    // })

    // await strapi.services.developer.create({
    //   name: products[13].developer,
    //   slug: slugify(products[13].developer).toLowerCase()
    // })
    await create(products[11].publisher, "publisher")
    await create(products[11].developer, "developer")

    // console.log(await getByName("CD PROJEKT RED", "developer"))
  }
};
