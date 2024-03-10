export async function getArticles(): Promise<Array<string>> {
  return [
    "https://blog.samaltman.com/advice-for-ambitious-19-year-olds",
    "https://a16z.com/why-software-is-eating-the-world/",
    "https://www.benkuhn.net/thinkrealhard/",
    "https://paulgraham.com/hwh.html#f1n",
    "http://www.appratt.com/2013/04/07/computers-as-objects-to-think-with/",
    "https://forum.effectivealtruism.org/posts/fPu5eWJagwDvqxiGY/terminate-deliberation-based-on-resilience-not-certainty",
    "https://ncase.me/remember/",
    "https://every.to/p/how-we-built-the-internet",
  ].sort((a, b) => b.length - a.length);
}
