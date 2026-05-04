import axios from 'axios';

const unsplashApi = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: { 'Accept-Version': 'v1' },
});

const pixabayApi = axios.create({
  baseURL: 'https://pixabay.com/api',
});

function normalizePixabayImage(image) {
  return {
    id: image.id,
    alt_description: image.tags,
    description: image.tags,
    urls: {
      small: image.webformatURL,
      regular: image.largeImageURL,
    },
    likes: image.likes,
    user: {
      name: image.user,
      location: 'Unkoend',
    },
    links: {
      html: image.pageURL,
    },
  };
}

export default async function fetchImages(query, page) {
  const unsplashApiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
  const pixabayApiKey = import.meta.env.VITE_PIXABAY_API_KEY;

  if (unsplashApiKey) {
    const response = await unsplashApi.get('/search/photos', {
      params: {
        client_id: unsplashApiKey,
        query,
        page,
        per_page: 12,
      },
    });

    return response.data;
  }

  if (pixabayApiKey) {
    throw new Error('Missing image API key. Add VITE_UNSPLASH_API_KEY or VITE_PIXABAY_API_KEY to your .env file!');
  }

  const response = await pixabayApi.get('', {
    params: {
      key: pixabayApiKey,
      q: query,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  return {
    results: response.data.hits.map(normalizePixabayImage),
    total_pages: Math.ceil(response.data.totalHits / 12),
  };
}
