
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as ae}from"./index-56b33bff.js";import{d as te,r as f,Q as C,x as ne,o as b,c as x,e,f as t,N as $,R as q,b as v,k as i,w as oe,I as h,t as Y,S as se,Y as V,E as I,h as o,X as ue,q as N}from"./index-be23d7e6.js";import{U as j,a as re,b as ie}from"./index-68385382.js";const de=te({__name:"index",setup(pe){const z=f(),M=f(0),y=f(!1),w=f(!1),g=f(!1),U=f(0),k=f(),c=C({status:"",id:""}),p=C({usesLeft:0,paintCount:0,balance:0}),s=C({username:"",email:"",status:"",page:1,size:10}),B=C({balance:[{required:!0,message:"请填写赠送携带金额",trigger:"blur"}],usesLeft:[{required:!0,message:"请填写赠送携带对话次数",trigger:"blur"}],paintCount:[{required:!0,message:"请填写赠送携带绘画次数",trigger:"blur"}]}),T=f([]);async function _(){try{w.value=!0;const n=await V.queryAllUser(s),{rows:a,count:d}=n.data;w.value=!1,M.value=d,T.value=a}catch{w.value=!1}}function F(n){y.value=!0,c.status=n.status,c.id=n.id}function J(n){g.value=!0,U.value=n.id}async function O(){(await V.updateUserStatus(c)).success&&I({type:"success",message:"变更用户状态成功！"}),y.value=!1,_()}function Q(n){n==null||n.resetFields(),_()}async function X(n){const{id:a,email:d}=n;(await V.resetUserPassword({id:a})).success&&I({type:"success",message:`重置用户[${d}密码为初始密码完成！`})}function G(n){U.value=0,n==null||n.resetFields()}async function H(n){n==null||n.validate(async a=>{await V.sendUserCrami({...p,userId:U.value}),I.success("赠送用户成功！"),g.value=!1})}return ne(()=>{_()}),(n,a)=>{const d=o("el-input"),r=o("el-form-item"),A=o("el-option"),D=o("el-select"),m=o("el-button"),S=o("el-form"),R=ae,u=o("el-table-column"),K=o("el-tag"),W=o("el-popconfirm"),Z=o("el-table"),E=o("el-pagination"),ee=o("el-row"),L=o("el-dialog"),le=ue("loading");return b(),x("div",null,[e(R,null,{default:t(()=>[e(S,{ref_key:"formRef",ref:z,inline:!0,model:s},{default:t(()=>[e(r,{label:"用户名称",prop:"username"},{default:t(()=>[e(d,{modelValue:s.username,"onUpdate:modelValue":a[0]||(a[0]=l=>s.username=l),placeholder:"用户姓名[模糊搜索]",clearable:""},null,8,["modelValue"])]),_:1}),e(r,{label:"用户邮箱",prop:"email"},{default:t(()=>[e(d,{modelValue:s.email,"onUpdate:modelValue":a[1]||(a[1]=l=>s.email=l),placeholder:"用户邮箱[模糊搜索]",clearable:""},null,8,["modelValue"])]),_:1}),e(r,{label:"用户状态",prop:"status"},{default:t(()=>[e(D,{modelValue:s.status,"onUpdate:modelValue":a[2]||(a[2]=l=>s.status=l),placeholder:"请选择用户状态",clearable:""},{default:t(()=>[(b(!0),x($,null,q(v(j),l=>(b(),h(A,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(m,{type:"primary",onClick:_},{default:t(()=>[i(" 查询 ")]),_:1}),e(m,{onClick:a[3]||(a[3]=l=>Q(z.value))},{default:t(()=>[i(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(R,{style:{width:"100%"}},{default:t(()=>[oe((b(),h(Z,{border:"",data:T.value,style:{width:"100%"},size:"large"},{default:t(()=>[e(u,{fixed:"",prop:"username",label:"用户名称",width:"150"}),e(u,{prop:"id",label:"用户ID",width:"80"}),e(u,{prop:"email",label:"用户邮箱",width:"250",align:"left"}),e(u,{prop:"status",label:"用户状态",width:"120",align:"center"},{default:t(l=>[e(K,{type:v(re)[l.row.status]},{default:t(()=>[i(Y(v(ie)[l.row.status]),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"balanceInfo.usesLeft",label:"对话余额",width:"120",align:"center"}),e(u,{prop:"balanceInfo.paintCount",label:"绘画余额",width:"120",align:"center"}),e(u,{prop:"balanceInfo.useChats",label:"已对话次数",width:"120",align:"center"}),e(u,{prop:"balanceInfo.usePaints",label:"已绘画次数",width:"120",align:"center"}),e(u,{prop:"balanceInfo.useTokens",label:"总计Toekn",width:"120",align:"center"}),e(u,{prop:"lastLoginIp",label:"最后登录IP",width:"140",align:"center"}),e(u,{prop:"createdAt",label:"注册时间",width:"200",align:"center"},{default:t(l=>[i(Y(v(se)(new Date(l.row.createdAt),"YYYY-MM-DD hh:mm:ss")),1)]),_:1}),e(u,{fixed:"right",label:"操作",width:"250",align:"center"},{default:t(l=>[e(m,{link:"",type:"primary",size:"small",onClick:P=>F(l.row)},{default:t(()=>[i(" 修改状态 ")]),_:2},1032,["onClick"]),e(W,{title:"确认重置此用户密码?","confirm-button-text":"确认重置",onConfirm:P=>X(l.row)},{reference:t(()=>[e(m,{link:"",type:"danger"},{default:t(()=>[i(" 重置密码 ")]),_:1})]),_:2},1032,["onConfirm"]),e(m,{link:"",type:"primary",size:"small",onClick:P=>J(l.row)},{default:t(()=>[i(" 赠送卡密 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[le,w.value]]),e(ee,{class:"flex justify-end mt-5"},{default:t(()=>[e(E,{"current-page":s.page,"onUpdate:currentPage":a[4]||(a[4]=l=>s.page=l),"page-size":s.size,"onUpdate:pageSize":a[5]||(a[5]=l=>s.size=l),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:M.value,onSizeChange:_,onCurrentChange:_},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),e(L,{modelValue:y.value,"onUpdate:modelValue":a[7]||(a[7]=l=>y.value=l),title:"变更用户状态",width:"500px"},{default:t(()=>[e(S,{model:c,inline:!0},{default:t(()=>[e(r,{label:"用户状态","label-width":"90px"},{default:t(()=>[e(D,{modelValue:c.status,"onUpdate:modelValue":a[6]||(a[6]=l=>c.status=l),placeholder:"请选择用户状态",clearable:""},{default:t(()=>[(b(!0),x($,null,q(v(j),l=>(b(),h(A,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(r,null,{default:t(()=>[e(m,{type:"primary",onClick:O},{default:t(()=>[i(" 确认变更 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue"]),e(L,{modelValue:g.value,"onUpdate:modelValue":a[13]||(a[13]=l=>g.value=l),title:"主动赠送用户",width:"400px",onClose:a[14]||(a[14]=l=>G(k.value))},{footer:t(()=>[e(m,{onClick:a[11]||(a[11]=l=>g.value=!1)},{default:t(()=>[i(" 放弃赠送 ")]),_:1}),e(m,{type:"primary",onClick:a[12]||(a[12]=l=>H(k.value))},{default:t(()=>[i(" 确认赠送 ")]),_:1})]),default:t(()=>[e(S,{ref_key:"cramiRef",ref:k,model:p,rules:B,"label-width":"85px"},{default:t(()=>[e(r,{label:"对话次数",prop:"usesLeft"},{default:t(()=>[e(d,{modelValue:p.usesLeft,"onUpdate:modelValue":a[8]||(a[8]=l=>p.usesLeft=l),modelModifiers:{number:!0},type:"number",placeholder:"赠送对话次数"},null,8,["modelValue"])]),_:1}),e(r,{label:"绘画次数",prop:"paintCount"},{default:t(()=>[e(d,{modelValue:p.paintCount,"onUpdate:modelValue":a[9]||(a[9]=l=>p.paintCount=l),modelModifiers:{number:!0},type:"number",placeholder:"赠送绘画次数"},null,8,["modelValue"])]),_:1}),e(r,{label:"MJ次数",prop:"balance"},{default:t(()=>[e(d,{modelValue:p.balance,"onUpdate:modelValue":a[10]||(a[10]=l=>p.balance=l),modelModifiers:{number:!0},type:"number",placeholder:"赠送携带MJ次数"},null,8,["modelValue"])]),_:1}),e(r,{class:"flex justify-end"})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});typeof N=="function"&&N(de);export{de as default};