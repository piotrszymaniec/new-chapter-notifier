# About

Website serves as a tracking list of manhwa and manga titles that I currently read.  

## Why
List of titles that I follow started to grow from few to 25+ and I was tired of updating excel spreadsheet on google drive. It is tideous to check titles on mobile phone that way, and then edit it after reading current chapter. Chence I'm creating solution that solves this problem.

## Features that I need
- [ ] It displays current and future chapter that I'm waiting for.
- [ ] Visiting link increase chapter counter
- [ ] Add new title - title name, current chapter number, link to website
- [ ] Edit link, if its outdated. (domain changes or is removed)
- [ ] Add optional cycle udate period (a week, month, etc.)

- [ ] Import list from google drive, or from csv which excel exports to
- [ ] Export list for backup purposes

## Possible problems
- chapters are sometimes numbered 1, 2, 3, 3.1, 3.15 which is difficult to know beforehand
 - possible solution: scrape and search on website dropdown box/list of chapters and read 2 last numbers
 - problem: some sites have captcha, easiest solution: find websites that does not have captcha

## Technologies
- MERN (moongoDb, express.js, react, node.js) 
  - moongodb because non browser storage allowes cross device tracking
### Service providers
- Moongo Atlas
- Vercel - frontend and backend hosting, integration with Moongo Atlas

## Thanks
 Cody Seibert from [Web Dev Cody channel](https://www.youtube.com/@WebDevCody) for kickoff [codebase](https://github.com/codyseibert/flashcardsage) which saved me lots of time.