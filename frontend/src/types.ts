type Class={
  id:number,
  department:string,
  code:string,
  name:string,
  season:string,
  time:number,
  day:string,
  place:string,
  unit:number,
  teacher:string,
  grade_min:number,
  grade_max:number,
  note:string,
  error:string,
  is_spring:boolean,
  is_autumn:boolean,
  url:string
}

type Post={
  id:string,
  title:string,
  user_id:string,
  created_at:Date,
  content:string
}

export type {Class,Post}