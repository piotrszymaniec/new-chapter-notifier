import mongoose from "mongoose";

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

//number of days or enum
//create structure that will be used for the release shedule
//weekly, monthly, bi-weekly, scheduled, irregular
// enum ReleaseShedule {
//   Weekly,
//   Monthly,
//   BiWeekly,
//   Scheduled,
//   Irregular  
// }


const WebtoonSchema = new Schema({
  title: String,
  link: String,
  // nextChaperCounter: Number, //next chapter number
  // releaseShedule: Number, //number of days between chapters
  // lastlyVisited: Number, //when the title was lastly visited
});
//declare variable for counting upcoming chapter number


const WebtoonModel = mongoose.model("Webtoon", WebtoonSchema);

export default WebtoonModel;
