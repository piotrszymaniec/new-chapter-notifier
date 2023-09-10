## what to change from current Flashcardsage codebase

1. change names deck, cards
- ideas: 
    chapter, chapterNumber, manhwa, manga, manhua, title, cycle
2. change mongodb schema
 ```ts
 {
    title: string,
    link: string,
    nextChapter: number,
    cycle: number //days or 0 if unknown   
 }
 ```