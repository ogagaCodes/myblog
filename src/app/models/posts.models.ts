import ICOMMENT from './comments.model';
export interface IPOSTS {
  id:number,
  imageUrl: string,
  author:string,
  postTime:string,
  title:string,
  body: IBODY[],
  comments : ICOMMENT[]
}

export interface IBODY {
  h1: string,
  p1:string,
  p2,
  string,
  p3:string,
  img2Url: string,
  h2:string,
  p4:string,
  p7:string,
  p8:string
}
