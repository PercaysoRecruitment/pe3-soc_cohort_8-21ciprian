const mockResponse = {
  articles: [
    {
      content: "SINGAPORE - Singapore is dedicating $25 million to liver cancer research in a new five-year programme led by the National Cancer Centre Singapore (NCCS) that aims to find the best treatments for the disease.\nThe team, comprising researchers from vari... [3250 chars]",

      image: "https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2022/06/13/sv_research_130622.jpg?VersionId=DNt5tDGd2id8OBhvAJPadjFY1DfpMzNq",
      publishedAt: "2022-06-13T08:38:21Z",
      source: { name: 'The Straits Times', url: 'https://www.straitstimes.com' },
      title: "S'pore dedicates $25m to liver cancer research to find targeted treatments",
      url: "https://www.straitstimes.com/singapore/health/spore-dedicates-25m-to-liver-cancer-research-to-find-targeted-treatments"

    }
  ]
}
const mockFetch = jest.fn().mockResolvedValue(mockResponse)
export default mockFetch