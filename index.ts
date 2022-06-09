
import { JsonData } from './models';

const discBoxStyle = "position: relative; display: ;";
const discInfoBoxStyle = "display: none; position: absolute; z-index:1; top: 100%; left: 0; width:160px; padding:5px; line-height:1.7; background-color: #fff;box-shadow: 0 0 10px 0 #ccc;";

const onmouseoverCode = "this.getElementsByClassName('disc-info')[0].style.display = 'inline-block'"
const onmouseoutCode = "this.getElementsByClassName('disc-info')[0].style.display = 'none'"


function texttip(id:string,jsonData:JsonData[]){
 const setTextArea = document.getElementById(id) as any;
 const text = setTextArea?.innerHTML;
 let reText = text;


 jsonData.forEach((item:JsonData) => {
  const ngx = new RegExp(item.title,'g');
  let setElement = `<span onmouseover="${onmouseoverCode}" onmouseout="${onmouseoutCode}" style="${discBoxStyle}">${item.title}<span class="disc-info" style="${discInfoBoxStyle}">${item.disc}</span></span>`
  if(item?.imgPath) {
    const imgElement = `<img src="${item?.imgPath}" alt="画像" />`
    setElement = `<span onmouseover="${onmouseoverCode}" onmouseout="${onmouseoutCode}" style="${discBoxStyle}">${item.title}<span class="disc-info" style="${discInfoBoxStyle}">${imgElement}${item.disc}</span></span>`
   }
  reText = reText?.replace(ngx,setElement);
  setTextArea.innerHTML = reText;
 });
}

export default texttip;
