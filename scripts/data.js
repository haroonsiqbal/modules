const fetcher = () => {
    return fetch("https://api.stevebrownlee.com/jobs/")
      .then(data => data.json())
    }

   