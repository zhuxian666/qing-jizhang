type RecordItem = {
  id?: number;
  type: string;
  notes: string;
  tag: tag;
  amount: number;
  createAt: string;
}
type tag ={
  name : string;
  val: string
}
type tagListS ={ [key: string]: string }//Map<string, string>
type tagListZ ={ [key: string]: string }//Map<string, string>// { [key: string]: string }
type RootState = {
  recordList: RecordItem[];
  tagListZ:tagListZ;
  tagListS:tagListS;
  record:RecordItem;
}
type Result ={
  title: string;
  total?: number;
  items: RecordItem[]
}[]
type ResultItem ={
  title: string;
  total?: number;
  items: RecordItem[]
}
type Array = { key: string; value: number }[]



