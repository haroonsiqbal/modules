fetcher().then(apidata => {
    for (const job of apidata.results) {
        const jobHTML = createJobHTML(job)
        renderJob(jobHTML)
    }
})