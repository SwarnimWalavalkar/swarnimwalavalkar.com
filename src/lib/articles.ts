export async function getArticles(): Promise<Array<string>> {
  return [
    "https://blog.samaltman.com/advice-for-ambitious-19-year-olds",
    "https://a16z.com/why-software-is-eating-the-world/",
    "https://www.benkuhn.net/thinkrealhard/",
    "https://paulgraham.com/hwh.html",
    "http://www.appratt.com/2013/04/07/computers-as-objects-to-think-with/",
    "https://ncase.me/remember/",
    "https://every.to/p/how-we-built-the-internet",
    "https://nickbostrom.com/fable/dragon",
    "https://alexdanco.com/2021/08/21/dancoland/",
    "https://fpt.guide/",
    "https://worrydream.com/ExplorableExplanations/",
    "https://staffeng.com/guides/work-on-what-matters/",
    "https://sidbala.com/h-264-is-magic/",
  ].sort((a, b) => b.length - a.length);
}
