

document.addEventListener('DOMContentLoaded', async function() {
    const theme = "Motivationalquotes";
    const accessKey = "QiAZXx0XjR8hjJ_wZnFMG1ru77uN3ay22O6_n33VzpA";
    try {
      const fetchData = await fetch(`https://api.unsplash.com/search/photos?page=1&query=${theme}&client_id=${accessKey}`);
      if (!fetchData.ok) {
        throw new Error(`Unsplash API Error: ${fetchData.status}`);
      }
      const res = await fetchData.json();
  
      const randomIndex = Math.floor(Math.random() * res.results.length);
      const randomImage = res.results[randomIndex];
  
      const imgURL = randomImage.urls.regular;
      const imgElement = document.getElementById('image');
      imgElement.src = imgURL;
    } catch (err) {
      if (err.name === 'NetworkError') {
        console.error('Network error while fetching from Unsplash');
      } else {
        console.error('Error:', err);
      }
    }
  });
  